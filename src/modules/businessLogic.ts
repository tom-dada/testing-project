import { amountType, giftCardType, orderType, personalDataType } from "../types/types";

export const newOrder = (data: personalDataType): orderType => {
  return ({
    personalData: data,
    giftCards: [],
  });
};

export const addGiftCard = (order: orderType, giftCard: giftCardType): orderType => {
  order.giftCards.push(giftCard);
  return order;
};

export const getAmount = (order: orderType): amountType => {
  const taxable = order.giftCards.reduce((acc, card) => {
    return acc + card.denomination * card.quantity;
  }, 0);
  const iva = taxable * 0.22;
  const total = taxable + iva;
  return ({ taxable, iva, total });
};
