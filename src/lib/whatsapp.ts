const WHATSAPP_NUMBER = "917004817894";

export const getWhatsAppLink = (productName: string, productPrice: number) => {
  const message = encodeURIComponent(
    `Hi! I'm interested in purchasing:\n\n` +
    `📦 Product: ${productName}\n` +
    `💰 Price: $${productPrice.toFixed(2)}\n\n` +
    `Could you please provide more details?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};
