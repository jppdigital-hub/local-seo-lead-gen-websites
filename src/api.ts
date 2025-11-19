import { Insight } from './types';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

const getInsightExtractionPrompt = (transcript: string): string => {
  return `You are analyzing a Limitless pendant transcript. This may include the wearer's thoughts, podcasts they listened to, videos they watched, or conversations they had.

Extract up to 8 valuable insights from ANY speaker in this transcript. Look for:
- Sharp observations about human behavior, systems, or expertise
- Moments that reframe common beliefs
- Practical principles or methods
- Frustrations with how things are typically done
- Provocative ideas worth testing publicly

For each insight, provide:
1. The insight (1-2 sentences, clear and specific)
2. Category: [Branding, Parenting, Life, Career, Relationships, Nursing, Business, Other]
3. A brief reason why this is X-worthy (1 sentence)

Return ONLY a valid JSON array with this structure (no markdown, no code blocks):
[
  {
    "insight": "The actual insight here",
    "category": "Branding",
    "reason": "Why this stops the scroll"
  }
]

Prioritize clarity and impact. Don't be overly strict - this is a testing ground.

TRANSCRIPT:
${transcript}`;
};

const getPostGenerationPrompt = (insight: string, category: string): string => {
  return `You are Paul Linehan's voice architect. Create ONE X/Twitter post (200-280 characters) from this insight that sounds authentically like Paul.

INSIGHT: ${insight}
CATEGORY: ${category}

PAUL'S VOICE:
- Direct, calm, clean, adult-to-adult
- Short, precise sentences
- Truth-first, zero fluff
- Genuine curiosity as an asset
- Metaphors from architecture, excavation, structure, systems, truth

FORBIDDEN PATTERNS:
❌ "Unpopular opinion but..."
❌ "Here's your sign to..."
❌ "Let that sink in"
❌ "Read that again"
❌ Emojis (except rare strategic use)
❌ Performative positivity
❌ Hustle culture nonsense

GOOD PATTERNS:
✅ "You don't need X. You need Y."
✅ "Your X isn't Y. It's Z."
✅ "Most people think A. Reality: B."
✅ Genuine questions that invite thinking
✅ Direct observations that reframe

Create a post that tests this idea publicly. Can be provocative, curious, or teaching - but always clear and authentically Paul.

Return ONLY the post text, nothing else. No quotes, no markdown, no explanation.`;
};

const callOpenAI = async (apiKey: string, prompt: string, temperature: number = 0.7): Promise<string> => {
  const response = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [{
        role: 'user',
        content: prompt
      }],
      temperature
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'API request failed');
  }

  const data = await response.json();
  return data.choices[0].message.content;
};

export const extractInsights = async (apiKey: string, transcript: string): Promise<Insight[]> => {
  const prompt = getInsightExtractionPrompt(transcript);
  const response = await callOpenAI(apiKey, prompt, 0.7);

  const cleaned = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
  const insights = JSON.parse(cleaned);

  return insights.map((insight: Insight) => ({
    ...insight,
    selected: false
  }));
};

export const generatePost = async (apiKey: string, insight: string, category: string): Promise<string> => {
  const prompt = getPostGenerationPrompt(insight, category);
  const response = await callOpenAI(apiKey, prompt, 0.8);

  return response.trim().replace(/^["']|["']$/g, '');
};

export const regeneratePost = async (apiKey: string, insight: string, category: string): Promise<string> => {
  const prompt = getPostGenerationPrompt(insight, category) + '\n\nCreate a DIFFERENT post than before. Make it fresh and clear.';
  const response = await callOpenAI(apiKey, prompt, 0.9);

  return response.trim().replace(/^["']|["']$/g, '');
};
