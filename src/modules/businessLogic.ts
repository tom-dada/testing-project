import { orderType, personalDataType } from "../types/types";

export const newOrder = (data: personalDataType): orderType => {
  return {
    personalData: data,
    giftCards: [],
  };
};
