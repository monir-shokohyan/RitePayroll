import { CallGrok } from '../api';


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
  const aiReply = await CallGrok(userInput)

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
