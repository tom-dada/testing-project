import { giftCardType, orderType, personalDataType } from "../types/types";

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

export const getAmount = () => {
  // TODO: implement this function
  throw new Error("Not implemented");
};
