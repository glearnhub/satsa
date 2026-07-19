export const WHATSAPP_PHONE = '254745267164'

export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}
