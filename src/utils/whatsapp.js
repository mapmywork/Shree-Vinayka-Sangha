import { CONTACT_INFO, BRAND } from './constants';

export const generateWhatsAppLink = (message = '') => {
  const defaultMessage = `Hello ${BRAND.name}, I would like to make an enquiry.\n\nPlease share the relevant information and next steps. Thank you.`;
  const textToEncode = message || defaultMessage;
  return `https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(textToEncode)}`;
};

export const generateFormWhatsAppLink = (data) => {
  const message = `Hello ${BRAND.name}, I would like to make an enquiry.\n\nName: ${data.name || ''}\nPhone: ${data.phone || ''}\nRequirement: ${data.requirement || ''}\nCity: ${data.city || ''}\nRequired Amount: ${data.amount || 'N/A'}\nMessage: ${data.message || ''}\n\nPlease share the relevant information and next steps. Thank you.`;
  return `https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
};
