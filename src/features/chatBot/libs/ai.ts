import { CallGrok } from '../api'
import { companyInfo } from '../constant'
import { getRuleBasedResponse } from './offlineBrain'

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
    !aiReply.includes('SOCIAL_MEDIA') && 
    !aiReply.includes('COMPANY_REACH')

  ) {
    return { text: aiReply, showWhatsApp: false }
  }

  const fallback = getRuleBasedResponse(userInput)

  if (aiReply?.includes('OUT_OF_BOX')) {
    return {
      text: 'I am here to assist you with Lotus support. It would be my pleasure to serve you regarding any Lotus-related inquiries. For additional assistance, please feel free to connect with us by clicking the button below.',
      showWhatsApp: true,
    }
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
  if (aiReply?.includes('COMPANY_REACH')) {
    return {
      text: `You can reach us at:\n📞 Phone: ${companyInfo.phone}\n📧 Email: ${companyInfo.email}\n🌐 Website: ${companyInfo.website}\n📍 Address: ${companyInfo.address}\n🕐 Hours: ${companyInfo.hours}`,
      showWhatsApp: false,
      showSocialMedia: false,
    }
  }


  return fallback
}
