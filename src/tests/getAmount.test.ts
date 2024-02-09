import { getAmount } from "../modules/businessLogic";
import { orderType } from "../types/types";

describe("getAmount tests", () => {
  const order: orderType = {
    personalData: {
      nome: "Mario",
      cognome: "Rossi",
      codiceFiscale: "RSSMRA80A01H501A",
      email: "mariorossi@gmail.com",
    },
    giftCards: [
      {
        denomination: 10,
        quantity: 1,
        type: "digitale",
      },
      {
        denomination: 20,
        quantity: 1,
        type: "digitale",
      },
      {
        denomination: 50,
        quantity: 1,
        type: "digitale",
      },
      {
        denomination: 100,
        quantity: 1,
        type: "digitale",
      },
    ],
  };
  it("should return an object", () => {
    expect(typeof getAmount(order)).toBe("object");
  });
  it("should return an object with 3 props", () => {
    expect(Object.keys(getAmount(order)).length).toBe(3);
  });
  it("should return an object with the correct props", () => {
    expect(getAmount(order)).toHaveProperty("taxable");
    expect(getAmount(order)).toHaveProperty("iva");
    expect(getAmount(order)).toHaveProperty("total");
  });
  it("should return the correct amount", () => {
    expect(getAmount(order)).toEqual({
      taxable: 180,
      iva: 39.6,
      total: 219.6,
    });
  });
});
