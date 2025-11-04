import { companyInfo, products } from '../constant'

export const OfflineBrains = {
  // Company Information
  company: {
    keywords: ['company', 'about', 'who are you', 'lotus', 'organization', 'business', 'firm'],
    response: () => `**${companyInfo.name}** is a leading software solutions provider with ${companyInfo.experience} of experience serving ${companyInfo.clients}. Founded by ${companyInfo.founder} with ${companyInfo.coDirector} as Co-Director, we specialize in delivering innovative business software across various industries in Uganda and beyond.`
  },
  contact: {
    keywords: ['contact', 'reach', 'phone', 'email', 'call', 'write', 'get in touch'],
    response: () => `You can reach us at:\n📞 Phone: ${companyInfo.phone}\n📧 Email: ${companyInfo.email}\n🌐 Website: ${companyInfo.website}\n📍 Address: ${companyInfo.address}\n🕐 Hours: ${companyInfo.hours}`
  },
  location: {
    keywords: ['location', 'address', 'where', 'office', 'visit', 'directions'],
    response: () => `Our office is located at **${companyInfo.address}**. We're open ${companyInfo.hours}. Feel free to visit us or contact us at ${companyInfo.phone} to schedule an appointment.`
  },
  
  // Products - Detailed
  ritebooks: {
    keywords: ['ritebooks', 'rite books', 'erp', 'enterprise resource', 'accounting software', 'inventory management', 'complete erp'],
    response: () => `**${products.ritebooks.name}** is our flagship ERP solution designed for medium to large businesses.\n\n${products.ritebooks.description}\n\n**Key Features:**\n${products.ritebooks.features.slice(0, 5).map(f => `• ${f}`).join('\n')}\n\n**Best for:** ${products.ritebooks.industries}\n**Available:** ${products.ritebooks.deployment}`
  },
  ritebooksExpress: {
    keywords: ['ritebooks express', 'express', 'small business', 'startup software', 'affordable erp', 'lite version'],
    response: () => `**${products.ritebooksExpress.name}** is perfect for startups and small businesses looking for an affordable solution.\n\n${products.ritebooksExpress.description}\n\n**Key Features:**\n${products.ritebooksExpress.features.map(f => `• ${f}`).join('\n')}\n\n**Best for:** ${products.ritebooksExpress.industries}\n**Available:** ${products.ritebooksExpress.deployment}`
  },
  ritebooksPocket: {
    keywords: ['ritebooks pocket', 'pocket', 'mobile', 'android', 'smartphone', 'mobile accounting', 'app', 'on the go'],
    response: () => `**${products.ritebooksPocket.name}** brings accounting to your fingertips!\n\n${products.ritebooksPocket.description}\n\n**Key Features:**\n${products.ritebooksPocket.features.map(f => `• ${f}`).join('\n')}\n\n**Best for:** ${products.ritebooksPocket.industries}\n**Platform:** ${products.ritebooksPocket.deployment}`
  },
  riteRoutes: {
    keywords: ['riteroutes', 'rite routes', 'distribution', 'field sales', 'route sales', 'van sales', 'delivery management', 'fmcg'],
    response: () => `**${products.riteRoutes.name}** - Your complete field sales and distribution solution.\n\n${products.riteRoutes.description}\n\n**Key Features:**\n${products.riteRoutes.features.map(f => `• ${f}`).join('\n')}\n\n**Best for:** ${products.riteRoutes.industries}\n**Available:** ${products.riteRoutes.deployment}`
  },
  ritePayroll: {
    keywords: ['rite payroll', 'ritepayroll', 'payroll', 'hr', 'salary', 'paye', 'nssf', 'employee management', 'human resource'],
    response: () => `**${products.ritePayroll.name}** - Streamline your HR and payroll processes.\n\n${products.ritePayroll.description}\n\n**Key Features:**\n${products.ritePayroll.features.map(f => `• ${f}`).join('\n')}\n\n**Best for:** ${products.ritePayroll.industries}\n**Available:** ${products.ritePayroll.deployment}`
  },
  riteEats: {
    keywords: ['riteeats', 'rite eats', 'restaurant', 'bar', 'hotel', 'cafe', 'food', 'pos', 'kitchen', 'table management'],
    response: () => `**${products.riteEats.name}** - Complete restaurant and hospitality management.\n\n${products.riteEats.description}\n\n**Key Features:**\n${products.riteEats.features.slice(0, 6).map(f => `• ${f}`).join('\n')}\n\n**Best for:** ${products.riteEats.industries}\n**Available:** ${products.riteEats.deployment}`
  },
  justPay: {
    keywords: ['justpay', 'just pay', 'loyalty', 'rewards', 'membership', 'customer retention', 'points', 'loyalty program'],
    response: () => `**${products.justPay.name}** - Build customer loyalty that drives repeat business.\n\n${products.justPay.description}\n\n**Key Features:**\n${products.justPay.features.map(f => `• ${f}`).join('\n')}\n\n**Best for:** ${products.justPay.industries}\n**Platform:** ${products.justPay.deployment}`
  },
  tallyPrime: {
    keywords: ['tally', 'tally prime', 'tallyprime', 'tally software', 'tally partner', 'tally customization'],
    response: () => `**${products.tallyPrime.name}** - We're Uganda's leading Tally Prime partner!\n\n${products.tallyPrime.description}\n\n**Key Features:**\n${products.tallyPrime.features.map(f => `• ${f}`).join('\n')}\n\n**Best for:** ${products.tallyPrime.industries}\n**Available:** ${products.tallyPrime.deployment}`
  },
  
  // Services
  customDevelopment: {
    keywords: ['custom software', 'custom development', 'bespoke', 'tailored solution', 'custom application', 'software development'],
    response: () => `We offer **Custom Software Development** tailored to your unique business needs. Whether you need a web application, desktop software, or specialized business tools, our experienced team can build it from scratch to match your exact requirements.`
  },
  mobileApp: {
    keywords: ['mobile app', 'android app', 'ios app', 'mobile development', 'app development'],
    response: () => `Our **Custom Mobile Application Development** service creates powerful iOS and Android apps for your business. From concept to deployment, we handle everything to bring your mobile vision to life.`
  },
  uraEfris: {
    keywords: ['ura', 'efris', 'ura efris', 'tax', 'fiscalization', 'ura integration', 'tax compliance'],
    response: () => `We provide complete **URA EFRIS Integration** services to ensure your business complies with Uganda's tax regulations. Our solutions seamlessly integrate with your existing systems for automated invoicing and tax reporting.`
  },
  tallyServices: {
    keywords: ['tally customization', 'tally cloud', 'tally services', 'tally support'],
    response: () => `As Uganda's premier **Tally Partner**, we offer:\n• Tally Prime customization to match your workflow\n• Tally Cloud setup for remote access\n• Migration from older Tally versions\n• Training and ongoing support\n• Custom reports and integrations`
  },
  cloudHosting: {
    keywords: ['cloud', 'hosting', 'backup', 'cloud hosting', 'data backup', 'server'],
    response: () => `Our **Cloud Hosting & Backup** services ensure your business data is secure, accessible, and always available. We provide reliable cloud infrastructure with automated backups, 99.9% uptime, and 24/7 monitoring.`
  },
  webDevelopment: {
    keywords: ['website', 'web development', 'web design', 'website development', 'web hosting'],
    response: () => `We build professional **Websites** that drive business growth. From corporate sites to e-commerce platforms, we handle design, development, hosting, and ongoing maintenance.`
  },
  ecommerce: {
    keywords: ['ecommerce', 'e-commerce', 'online store', 'online shop', 'shopping cart'],
    response: () => `Our **E-Commerce Integration** services help you sell online effectively. We build and integrate complete online stores with payment gateways, inventory sync, and order management.`
  },
  
  // Industry-specific queries
  retail: {
    keywords: ['retail', 'shop', 'store', 'supermarket', 'pharmacy'],
    response: () => `For **retail businesses**, we recommend:\n• **Ritebooks Express** for small shops\n• **Ritebooks** for larger retail chains\n• **JustPay** for customer loyalty\n• **POS systems** with URA EFRIS integration\n\nAll solutions include inventory management, barcode scanning, and multi-location support.`
  },
  restaurant: {
    keywords: ['restaurant', 'bar', 'cafe', 'hotel', 'food business'],
    response: () => `For **restaurants, bars, and hospitality**, we offer **RiteEats** - a complete solution with:\n• Table management\n• Kitchen Display System (KDS)\n• Takeaway & delivery tracking\n• Recipe costing\n• Reservation management\n• URA EFRIS billing`
  },
  manufacturing: {
    keywords: ['manufacturing', 'factory', 'production', 'assembly'],
    response: () => `For **manufacturing businesses**, **Ritebooks** provides:\n• Bill of Materials (BOM)\n• Production planning\n• Assembly modules\n• Raw material tracking\n• Work-in-progress management\n• Cost accounting\n• Quality control`
  },
  distribution: {
    keywords: ['distribution', 'wholesale', 'distributor', 'fmcg distribution'],
    response: () => `For **distribution and wholesale**, we offer:\n• **RiteRoutes** for field sales and delivery management\n• **Ritebooks** for complete inventory and accounting\n• GPS tracking and route optimization\n• Van stock management\n• Multi-location support`
  },
  
  // Features and comparisons
  features: {
    keywords: ['features', 'capabilities', 'what can', 'functionality'],
    response: () => `Our solutions offer comprehensive features including:\n• Complete accounting (P&L, Balance Sheet, Trial Balance)\n• Inventory & stock management\n• Multi-branch operations\n• URA EFRIS compliance\n• Cloud & mobile access\n• Custom reports\n• User permissions\n• Audit trails\n\nWhich specific feature are you interested in?`
  },
  integration: {
    keywords: ['integration', 'integrate', 'connect', 'api', 'third party'],
    response: () => `We provide seamless integrations with:\n• URA EFRIS for tax compliance\n• Mobile money & payment gateways\n• E-commerce platforms\n• Third-party applications via APIs\n• Banking systems\n• Delivery platforms\n\nOur team can also build custom integrations for your specific needs.`
  },
  difference: {
    keywords: ['difference', 'compare', 'comparison', 'vs', 'versus', 'better'],
    response: () => `**Choosing the right solution:**\n\n• **Ritebooks** - Full ERP for established businesses\n• **Ritebooks Express** - Simplified version for startups/SMEs\n• **Ritebooks Pocket** - Mobile-first for micro businesses\n• **RiteRoutes** - Specialized for distribution\n• **RiteEats** - Designed for hospitality\n• **Rite Payroll** - HR & payroll focus\n\nNeed help choosing? Tell me about your business type and size!`
  },
  
  // Support and implementation
  support: {
    keywords: ['support', 'help', 'assistance', 'problem', 'issue', 'not working', 'error'],
    response: () => `We provide comprehensive support including:\n• Initial training for your team\n• Phone & email support during business hours\n• Remote assistance\n• On-site support when needed\n• Regular software updates\n\nFor immediate assistance, please contact us at ${companyInfo.phone} or use the WhatsApp button below.`,
    showWhatsApp: true
  },
  implementation: {
    keywords: ['implementation', 'setup', 'install', 'deployment', 'getting started', 'how to start'],
    response: () => `Our implementation process:\n1. **Consultation** - Understanding your needs\n2. **Configuration** - Setting up the system\n3. **Data Migration** - Importing existing data\n4. **Training** - Hands-on training for your team\n5. **Go-Live** - Launch with full support\n6. **Follow-up** - Ongoing support and optimization\n\nTypical timeline: 1-4 weeks depending on complexity.`
  },
  training: {
    keywords: ['training', 'learn', 'tutorial', 'how to use', 'course'],
    response: () => `We provide comprehensive training:\n• On-site training at your location\n• Online training sessions\n• Video tutorials and documentation\n• Hands-on practice sessions\n• Ongoing support after training\n\nTraining is customized based on user roles and responsibilities.`
  },
  
  // Pricing (still requires human contact)
  pricing: {
    keywords: ['price', 'cost', 'pricing', 'quote', 'quotation', 'budget', 'rate', 'fee', 'charge', 'how much', 'affordable'],
    response: () => `Pricing varies based on:\n• Number of users\n• Modules required\n• Cloud vs on-premise\n• Customization needs\n• Training requirements\n\nWe offer flexible payment plans including one-time licensing and subscription models. Contact our sales team for a customized quote tailored to your business.`,
    showWhatsApp: true
  },
  
  // Demo and trial
  demo: {
    keywords: ['demo', 'trial', 'test', 'try', 'see it', 'show me', 'demonstration'],
    response: () => `We'd be happy to show you our solutions in action! We offer:\n• Free product demonstrations\n• Live walkthroughs of features\n• Trial periods for selected products\n• Customized demos based on your industry\n\nSchedule a demo by contacting us at ${companyInfo.phone} or clicking the WhatsApp button below.`,
    showWhatsApp: true
  },
  
  // Greetings
  greeting: {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'],
    response: () => `Hello! 👋 I'm the Lotus Assistant. I can help you with:\n• Information about our software products\n• Details about our services\n• Company information\n• General inquiries\n\nHow can I assist you today?`
  },

  // farewell
  farewell: {
    keywords: ['bye', 'goodbye', 'see you', 'later', 'take care', 'have a good day', 'good night'],
    response: () => `Goodbye! 👋 Thank you for contacting Lotus Soft Technologies. If you have any more questions in the future, feel free to reach out. Have a great day! 😊`
  },
  
  // Thank you
  thanks: {
    keywords: ['thank', 'thanks', 'appreciate', 'grateful'],
    response: () => `You're welcome! If you have any other questions about our products or services, feel free to ask. We're here to help! 😊`
  },
  
  // Social Media
  socialMedia: {
    keywords: ['facebook', 'instagram', 'linkedin', 'github', 'social media', 'follow us', 'social', 'twitter', 'youtube', 'follow'],
    response: () => `Connect with us on social media! 🌐`,
    showSocialMedia: true
  }
}


const findBestMatch = (input: string): { response: () => string, showWhatsApp?: boolean, showSocialMedia?: boolean } | null => {
  const lowerInput = input.toLowerCase().trim()
  
  // Priority 1: Check for human/agent keywords (override everything)
  const humanKeywords = [
    'talk to human', 'speak to someone', 'real person', 'agent', 'representative',
    'customer care', 'customer support', 'sales team', 'connect me', 'live chat',
    'talk to agent', 'speak with representative'
  ]
  if (humanKeywords.some(keyword => lowerInput.includes(keyword))) {
    return {
      response: () => `I'm sorry, but I'm unable to fully process your request at the moment. Kindly click the button below to connect with a human representative for further assistance.`,
      showWhatsApp: true
    }
  }
  
  // Priority 2: Check for social media
  const socialKeywords = ['facebook', 'instagram', 'linkedin', 'github', 'social media', 'follow us', 'social']
  if (socialKeywords.some(keyword => lowerInput.includes(keyword))) {
    return {
      response: () => '',
      showWhatsApp: false,
      showSocialMedia: true
    }
  }
  
  // Priority 3: Find the best matching knowledge base entry
  let bestMatch: { key: string, score: number, entry: any } | null = null
  
  for (const [key, entry] of Object.entries(OfflineBrains)) {
    const matchScore = entry.keywords.reduce((score, keyword) => {
      if (lowerInput.includes(keyword)) {
        return score + keyword.split(' ').length // Longer phrases get higher scores
      }
      return score
    }, 0)
    
    if (matchScore > 0 && (!bestMatch || matchScore > bestMatch.score)) {
      bestMatch = { key, score: matchScore, entry }
    }
  }
  
  if (bestMatch) {
    return {
      response: bestMatch.entry.response,
      showWhatsApp: bestMatch.entry.showWhatsApp || false,
      showSocialMedia: bestMatch.entry.showSocialMedia || false
    }
  }
  
  return null
}

// Enhanced rule-based response with comprehensive knowledge
export const getRuleBasedResponse = (
  input: string,
): { text: string; showWhatsApp?: boolean; showSocialMedia?: boolean } => {
  const match = findBestMatch(input)
  
  if (match) {
    return {
      text: match.response(),
      showWhatsApp: match.showWhatsApp,
      showSocialMedia: match.showSocialMedia
    }
  }
  
  // Default fallback
  return {
    text: `I'd be happy to help you with information about Lotus Soft Technologies! I can assist with:\n\n• Our products (Ritebooks, RiteRoutes, RiteEats, etc.)\n• Services we offer\n• Company information\n• Industry-specific solutions\n\nWhat would you like to know? Or connect with our team directly using the button below.`,
    showWhatsApp: true,
  }
}
