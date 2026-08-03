import { CYL_SYSTEM_PROMPT } from '../data/chatbotFaq';

// Limpiador automático para eliminar cualquier pensamiento interno o notas de borrador que genere la IA
const cleanThinkingOutput = (text) => {
  if (!text) return '';
  let cleaned = text.replace(/<thought>[\s\S]*?<\/thought>/gi, '');
  cleaned = cleaned.replace(/^\s*\*\s*(User asks|Rule|Context|The system prompt|Since I don't|Draft|Internal).*$/gmi, '');
  cleaned = cleaned.replace(/\n\s*\n\s*\n/g, '\n\n').trim();
  return cleaned;
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
        temperature: 0.2,
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
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      throw new Error('Empty response');
    }

    return cleanThinkingOutput(rawText);
  } catch (error) {
    console.error('Error connecting to AI service:', error);
    return 'Nuestra IA está atendiendo un alto volumen de consultas en este momento. Para brindarte una respuesta inmediata sin demoras, haz clic abajo para chatear con un consultor por WhatsApp:';
  }
};
