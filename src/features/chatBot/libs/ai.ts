import { companyInfo, products, services } from '../constant'

const SYSTEM_PROMPT = `
You are Lotus Assistant for Lotus Soft Technologies Ltd.
You MUST answer using ONLY the data below. NEVER make up information, prices, or costs.
you Must be polite and very good to sell products.
If the user asks about prices or anything relevant to price , say EXACTLY : "SHOW_PRICES".
If the user asks about anything not in the data, say EXACTLY: "CONNECT_TO_HUMAN".
If the user asks about social media or anything relevant to social media, facebook, instagram, github, linkedin, say EXACTLY: "SOCIAL_MEDIA".

Company: ${companyInfo.name}
Experience: ${companyInfo.experience}
Clients: ${companyInfo.clients}
Founder: ${companyInfo.founder}
Co-Director: ${companyInfo.coDirector}
Phone: ${companyInfo.phone}
Email: ${companyInfo.email}
Website: ${companyInfo.website}
Address: ${companyInfo.address}
Hours: ${companyInfo.hours}
facebook: ${companyInfo.facebook}
linkedin: ${companyInfo.linkedin}
github: ${companyInfo.github}
whatsapp: ${companyInfo.whatsapp}

Products:
${Object.values(products)
  .map(
    (p) =>
      `${p.name}: ${p.description}. Features: ${p.features.join('; ')}. Industries: ${p.industries}.`,
  )
  .join('\n')}

Services: ${services.join(', ')}

Be concise. Use **bold** for product names.
`.trim()

const callGroq = async (userInput: string): Promise<string> => {
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

const getRuleBasedResponse = (
  input: string,
): { text: string; showWhatsApp?: boolean; showSocialMedia?: boolean } => {
  return {
    text: 'Let me connect you to a human.',
    showWhatsApp: true,
  }
}

export const getAIResponse = async (
  userInput: string,
): Promise<{
  text: string
  showWhatsApp?: boolean
  showSocialMedia?: boolean
}> => {
  const aiReply = await callGroq(userInput)
  console.log('ai reply is ', aiReply)

  if (
    aiReply &&
    !aiReply.includes('CONNECT_TO_HUMAN') &&
    !aiReply.includes('SHOW_PRICES') &&
    !aiReply.includes('SOCIAL_MEDIA')
  ) {
    return { text: aiReply, showWhatsApp: false }
  }

  const fallback = getRuleBasedResponse(userInput)

  if (aiReply?.includes('CONNECT_TO_HUMAN')) {
    return {
      text: 'I’m sorry, but I’m unable to fully understand your request or intent at this time. For further assistance, kindly allow me to connect you with a human representative.',
      showWhatsApp: true,
    }
  }

  if (aiReply?.includes('SHOW_PRICES')) {
    return {
      text: 'Pricing is customized based on your business needs. Please contact our sales team for a personalized quote.',
      showWhatsApp: true,
    }
  }
  if (aiReply?.includes('SOCIAL_MEDIA')) {
    return {
      text: '',
      showWhatsApp: false,
      showSocialMedia: true,
    }
  }

  return fallback
}
