import { CYL_SYSTEM_PROMPT } from '../data/chatbotFaq';

export const askGeminiAI = async (userPrompt) => {
  try {
    const apiKey = import.meta.env.VITE_GOOGLE_AI_KEY;
    if (!apiKey) {
      console.warn('VITE_GOOGLE_AI_KEY no está configurada.');
      return 'Nuestra IA está disponible mediante atención directa. Si tienes cualquier consulta, con gusto te atenderemos personalmente vía WhatsApp al +58 424-6676099.';
    }

    // Modelo Gemma 4 solicitado (gemma-4-31b-it) con fallback a modelos estables (gemini-2.0-flash)
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

    // Si Gemma 4 da 503 u otro error temporal, usar fallback a gemini-2.0-flash
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
    const textResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textResponse) {
      throw new Error('Empty response');
    }

    return textResponse;
  } catch (error) {
    console.error('Error connecting to AI service:', error);
    return 'Nuestra IA está atendiendo un alto volumen de consultas en este momento. Para brindarte una respuesta inmediata sin demoras, haz clic abajo para chatear con un consultor por WhatsApp:';
  }
};
