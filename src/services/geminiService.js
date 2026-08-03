import { CYL_SYSTEM_PROMPT } from '../data/chatbotFaq';

export const askGeminiAI = async (userPrompt) => {
  try {
    const apiKey = import.meta.env.VITE_GOOGLE_AI_KEY;
    if (!apiKey) {
      console.warn('VITE_GOOGLE_AI_KEY no está configurada.');
      return 'Nuestra IA está disponible a través de atención directa. Si tienes cualquier consulta, con gusto te atenderemos personalmente vía WhatsApp al +58 424-6676099.';
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;

    const requestBody = {
      contents: [
        {
          role: 'user',
          parts: [
            { text: `${CYL_SYSTEM_PROMPT}\n\nConsulta del Usuario: ${userPrompt}` }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 350
      }
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`API response error: ${response.status}`);
    }

    const data = await response.json();
    const textResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textResponse) {
      throw new Error('Empty response from AI');
    }

    return textResponse;
  } catch (error) {
    console.error('Error connecting to AI service:', error);
    return 'Nuestra IA está atendiendo un alto volumen de consultas en este momento. Si no encuentras la respuesta que necesitas, con gusto te atenderemos personalmente vía WhatsApp al +58 424-6676099.';
  }
};
