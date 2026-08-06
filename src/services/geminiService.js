import { CYL_SYSTEM_PROMPT } from '../data/chatbotFaq';

/**
 * Filtro de respuestas para Gemma 4 y modelos Gemini:
 * Gemma 4 (gemma-4-31b-it) divide la respuesta en un array `parts`.
 * - La parte de pensamiento/razonamiento viene marcada explícitamente con `thought: true`.
 * - La respuesta limpia para el usuario viene en la parte con `thought: false` (o sin la propiedad `thought`).
 */
export const cleanThinkingOutput = (parts) => {
  if (!parts) return '';

  // 1. Si `parts` es un arreglo devuelto directamente por la API de Google
  if (Array.isArray(parts)) {
    // Buscar la parte que NO sea de pensamiento (thought != true)
    const finalResponsePart = parts.find(p => p && !p.thought && p.text);
    if (finalResponsePart && finalResponsePart.text) {
      return sanitizeText(finalResponsePart.text);
    }

    // Si todas las partes vinieran sin flag explicito, concatenar solo las que no comiencen con viñetas de razonamiento
    const allTextParts = parts
      .filter(p => !p.thought)
      .map(p => p.text || '')
      .join('\n');

    if (allTextParts) {
      return sanitizeText(allTextParts);
    }
  }

  // 2. Si se pasa una cadena directa (fallback o respuestas procesadas)
  if (typeof parts === 'string') {
    return sanitizeText(parts);
  }

  return '';
};

/**
 * Limpiador secundario para descartar cualquier residuo de razonamiento o viñetas internas
 */
const sanitizeText = (raw) => {
  if (!raw) return '';
  let text = raw.trim();

  // Si contiene la respuesta corporativa predefinida de derivación, extraer directamente
  const corporateMatch = text.match(/(Como asistente de (CYL|Cordero)[\s\S]*)/i);
  if (corporateMatch && corporateMatch[1]) {
    return corporateMatch[1].trim().replace(/^["'\s*]+|["'\s*]+$/g, '');
  }

  // Si contiene etiquetas "Response:" o "Respuesta:"
  if (/(?:Response|Respuesta):/i.test(text)) {
    const parts = text.split(/(?:Response|Respuesta):/i);
    text = parts[parts.length - 1].trim();
  }

  // Eliminar bloques con etiquetas <thought>...</thought> o <reasoning>...</reasoning>
  text = text.replace(/<(thought|reasoning)>[\s\S]*?<\/\1>/gi, '');

  // Filtrar líneas individuales que inicien con viñetas de prompt/razonamiento (* User asks, * Constraint, etc.)
  const lines = text.split('\n');
  const cleanLines = lines.filter(line => {
    const t = line.trim();
    if (t.startsWith('*   User') || t.startsWith('*   Role') || t.startsWith('*   Constraint') || t.startsWith('*   Rule') || t.startsWith('*   Context') || t.startsWith('*   Analysis')) {
      return false;
    }
    return true;
  });

  return cleanLines.join('\n').trim().replace(/^["'\s*]+|["'\s*]+$/g, '');
};

export const askGeminiAI = async (userPrompt) => {
  try {
    const apiKey = import.meta.env.VITE_GOOGLE_AI_KEY;
    if (!apiKey) {
      console.warn('VITE_GOOGLE_AI_KEY no está configurada.');
      return 'Nuestra IA está disponible mediante atención directa. Si tienes cualquier consulta, con gusto te atenderemos personalmente vía WhatsApp al +58 424-6676099.';
    }

    const primaryModel = 'gemma-4-31b-it';
    const fallbackModel = 'gemini-2.0-flash';

    const requestBody = {
      system_instruction: {
        parts: [
          { text: CYL_SYSTEM_PROMPT }
        ]
      },
      contents: [
        {
          role: 'user',
          parts: [
            { text: userPrompt }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.1,
        maxOutputTokens: 350
      }
    };

    let apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${primaryModel}:generateContent?key=${apiKey}`;
    
    let response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      console.warn(`Primary model ${primaryModel} failed (${response.status}). Trying fallback ${fallbackModel}...`);
      apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${fallbackModel}:generateContent?key=${apiKey}`;
      response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });
    }

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    const parts = data?.candidates?.[0]?.content?.parts;

    if (!parts) {
      throw new Error('Empty parts response');
    }

    return cleanThinkingOutput(parts);
  } catch (error) {
    console.error('Error connecting to AI service:', error);
    return 'Nuestra IA está atendiendo un alto volumen de consultas en este momento. Para brindarte una respuesta inmediata sin demoras, haz clic abajo para chatear con un consultor por WhatsApp:';
  }
};
