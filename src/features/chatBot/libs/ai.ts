import { CallGrok } from '../api'

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
    !aiReply.includes('OUT_OF_BOX') &&
    !aiReply.includes('CONNECT_TO_HUMAN') &&
    !aiReply.includes('SHOW_PRICES') &&
    !aiReply.includes('SOCIAL_MEDIA')
  ) {
    return { text: aiReply, showWhatsApp: false }
  }

  const fallback = getRuleBasedResponse(userInput)

  if (aiReply?.includes('OUT_OF_BOX')) {
    return {
      text: 'I am here to assist you with Lotus support. It would be my pleasure to serve you regarding any Lotus-related inquiries. For additional assistance, please feel free to connect with us by clicking the button below.',
      showWhatsApp: true,
    };
  }
  if (aiReply?.includes('CONNECT_TO_HUMAN')) {
    return {
      text: 'I’m sorry, but I’m unable to fully process your request at the moment. Kindly click the button below to connect with a human representative for further assistance.',
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
