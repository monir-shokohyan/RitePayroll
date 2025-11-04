import { SYSTEM_PROMPT } from '../constant'

const CallGrok = async (userInput: string): Promise<string> => {
  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY || process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userInput },
        ],
        max_tokens: 400,
        temperature: 0.3,
      }),
    })

    if (!res.ok) throw new Error('Groq error')
    const data = await res.json()
    return data.choices[0].message.content.trim()
  } catch {
    return ''
  }
}

export { CallGrok }
