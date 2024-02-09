import { amountType, giftCardType, orderType, personalDataType } from "../types/types";

export const newOrder = (data: personalDataType): orderType => {
  return ({
    personalData: data,
    giftCards: [],
  });
};

export const addGiftCard = (order: orderType, giftCard: giftCardType): orderType => {
  // Check if order already has a gift card of the same denomination
  if (order.giftCards.some((card) => card.denomination === giftCard.denomination)) {
    // If so, increment the quantity of the existing gift card
    order.giftCards.forEach((card) => {
      if (card.denomination === giftCard.denomination) {
        card.quantity += giftCard.quantity;
      }
    });
    return order;
  } else {
    // If not, add the new gift card to the order
    order.giftCards.push(giftCard);
    return order;
  }
};

export const getAmount = (order: orderType): amountType => {
  const taxable = order.giftCards.reduce((acc, card) => {
    return acc + card.denomination * card.quantity;
  }, 0);
  const iva = taxable * 0.22;
  const total = taxable + iva;
  return ({ taxable, iva, total });
};
