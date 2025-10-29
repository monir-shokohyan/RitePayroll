import { companyInfo, products, services } from "../constant";

const WHATSAPP_LINK = "https://wa.me/256755818183?text=Hi%20Lotus%20Team%2C%20I%20need%20help%20with%20your%20products.";

const SYSTEM_PROMPT = `
You are Lotus Assistant for Lotus Soft Technologies Ltd.
You MUST answer using ONLY the data below. NEVER make up information, prices, or costs.
If the user asks about prices or anything not in the data, say EXACTLY: "CONNECT_TO_HUMAN"

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

Products:
${Object.values(products)
  .map(p => `${p.name}: ${p.description}. Features: ${p.features.join("; ")}. Industries: ${p.industries}.`)
  .join("\n")}

Services: ${services.join(", ")}

Be concise. Use **bold** for product names.
`.trim();

const callGroq = async (userInput: string): Promise<string> => {
  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY || process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userInput },
        ],
        max_tokens: 400,
        temperature: 0.3,
      }),
    });

    if (!res.ok) throw new Error("Groq error");
    const data = await res.json();
    return data.choices[0].message.content.trim();
  } catch {
    return '';
  }
};

const isSafeResponse = (text: string): boolean => {
  const lower = text.toLowerCase();
  const priceKeywords = ["$", "ugx", "shs", "price", "cost", "starts at", "from", "per month", "fee"];
  if (priceKeywords.some(k => lower.includes(k))) return false;

  const keywords = [
    ...Object.keys(products).map(k => k.toLowerCase()),
    ...Object.values(products).map(p => p.name.toLowerCase()),
    "lotus", "ritebooks", "ritepayroll", "tally", "justpay", "demo", "contact", "phone", "email"
  ];

  return keywords.some(k => lower.includes(k));
};

const getRuleBasedResponse = (input: string): { text: string; showWhatsApp?: boolean } => {
  const q = input.toLowerCase().trim();

  if (q.includes("price") || q.includes("cost") || q.includes("pricing") || q.includes("how much")) {
    return {
      text: "Pricing is customized based on your business needs. Please contact our sales team for a personalized quote.",
      showWhatsApp: true,
    };
  }

  for (const key in products) {
    const p = products[key];
    if (q.includes(p.name.toLowerCase()) || q.includes(key)) {
      return {
        text: `**${p.name}**\n\n${p.description}\n\n**Features:**\n${p.features.map(f => `• ${f}`).join("\n")}\n\n**Industries:** ${p.industries}`,
        showWhatsApp: false,
      };
    }
  }

  if (q.includes("product") || q.includes("software")) {
    return {
      text: `We offer:\n${Object.values(products).map(p => `• **${p.name}**`).join("\n")}\n\nAsk about a specific product for details!`,
      showWhatsApp: false,
    };
  }

  if (q.includes("company") || q.includes("about") || q.includes("lotus")) {
    return {
      text: `**${companyInfo.name}**\n\n` +
        `• ${companyInfo.experience} of experience\n` +
        `• Serving ${companyInfo.clients}\n` +
        `• Founded by ${companyInfo.founder}\n` +
        `• Co-Director: ${companyInfo.coDirector}\n` +
        `• Phone: ${companyInfo.phone}\n` +
        `• Email: ${companyInfo.email}`,
      showWhatsApp: false,
    };
  }

  if (q.includes("contact") || q.includes("phone") || q.includes("email")) {
    return {
      text: `**Contact Us**\n\nPhone: ${companyInfo.phone}\nEmail: ${companyInfo.email}`,
      showWhatsApp: true,
    };
  }

  if (q.includes("demo") || q.includes("try")) {
    return {
      text: `Request a **free demo** here: [Book Demo](https://lotus.co.ug/demo)\n\nOr call **${companyInfo.phone}**.`,
      showWhatsApp: false,
    };
  }

  return {
    text: "Let me connect you to a human.",
    showWhatsApp: true,
  };
};

export const getAIResponse = async (userInput: string): Promise<{ text: string; showWhatsApp?: boolean }> => {
  const aiReply = await callGroq(userInput);

  if (aiReply && isSafeResponse(aiReply) && !aiReply.includes("CONNECT_TO_HUMAN")) {
    return { text: aiReply, showWhatsApp: false };
  } else {
    const fallback = getRuleBasedResponse(userInput);
    if (aiReply?.includes("CONNECT_TO_HUMAN")) {
      return { text: "Let me connect you to a human.", showWhatsApp: true };
    }
    return fallback;
  }
};