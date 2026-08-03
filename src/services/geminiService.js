import { CYL_SYSTEM_PROMPT } from '../data/chatbotFaq';

// Limpiador exacto aprovechando la estructura de partes de Gemma 4
const cleanThinkingOutput = (parts) => {
  if (!parts || !Array.isArray(parts)) return '';

  // 1. Si Gemma 4 separa explícitamente la parte con thought: true de la parte de texto final:
  const nonThoughtPart = parts.find(p => !p.thought && p.text);
  if (nonThoughtPart && nonThoughtPart.text) {
    return nonThoughtPart.text.trim();
  }

  // 2. Si viene todo consolidado en una sola cadena de texto:
  const rawText = parts.map(p => p.text || '').join('\n');
  
  // Buscar coincidencia directa de frase corporativa
  const phraseMatch = rawText.match(/(Como asistente de (CYL|Cordero)[\s\S]*)/i);
  if (phraseMatch && phraseMatch[1]) {
    return phraseMatch[1].trim().replace(/^["'\s*]+|["'\s*]+$/g, '');
  }

  // Descartar líneas de razonamiento (* User, * Role, * Rule, etc.)
  const lines = rawText.split('\n');
  const contentLines = lines.filter(l => {
    const t = l.trim();
    return !t.startsWith('*') && !t.startsWith('-') && !/^(Role|Constraint|User|Analysis|System|Persona|Draft):/i.test(t);
  });

  return contentLines.join('\n').trim().replace(/^["'\s*]+|["'\s*]+$/g, '') || rawText.trim();
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
