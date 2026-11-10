import { CYL_SYSTEM_PROMPT } from '../../src/data/chatbotFaq';

const ALLOWED_ORIGINS = [
  'https://cyl-latam.com',
  'https://www.cyl-latam.com',
  'https://cyl-website-3mp.pages.dev',
];

const API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models';
const PRIMARY_MODEL = 'gemma-4-31b-it';
const FALLBACK_MODEL = 'gemini-2.0-flash';
const MAX_PROMPT_LENGTH = 1000;

const json = (payload, status) => (
  new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
);

const callModel = async ({ model, apiKey, prompt }) => {
  const response = await fetch(`${API_BASE}/${model}:generateContent?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: CYL_SYSTEM_PROMPT }] },
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.2, maxOutputTokens: 1000 },
    }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const data = await response.json();
  const parts = data?.candidates?.[0]?.content?.parts;

  if (!parts) {
    throw new Error('Empty parts response');
  }

  return parts;
};

export const onRequestPost = async ({ request, env }) => {
  const origin = request.headers.get('Origin');

  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return json({ error: 'Origin not allowed' }, 403);
  }

  if (!env.GOOGLE_AI_KEY) {
    return json({ error: 'AI service not configured' }, 500);
  }

  const body = await request.json().catch(() => null);
  const prompt = typeof body?.prompt === 'string' ? body.prompt.trim() : '';

  if (!prompt) {
    return json({ error: 'Invalid prompt' }, 400);
  }

  if (prompt.length > MAX_PROMPT_LENGTH) {
    return json({ error: 'Prompt too long' }, 413);
  }

  try {
    const parts = await callModel({ model: PRIMARY_MODEL, apiKey: env.GOOGLE_AI_KEY, prompt });
    return json({ parts });
  } catch (primaryError) {
    try {
      const parts = await callModel({ model: FALLBACK_MODEL, apiKey: env.GOOGLE_AI_KEY, prompt });
      return json({ parts });
    } catch (fallbackError) {
      console.error('AI service failed for both models:', primaryError, fallbackError);
      return json({ error: 'AI service unavailable' }, 502);
    }
  }
};
