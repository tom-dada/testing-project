import { addGiftCard } from "../modules/businessLogic";
import { orderType } from "../types/types";

describe("addGiftCard tests", () => {
  let order: orderType = {
    personalData: { nome: "", cognome: "", codiceFiscale: "", email: "" },
    giftCards: [],
  };

  // Reset "order" before each test
  beforeEach(() => {
    order = {
      personalData: { nome: "", cognome: "", codiceFiscale: "", email: "" },
      giftCards: [],
    };
  });

  it("'order' has a non-empty 'gift card' array", () => {
    order = addGiftCard(order, {
      denomination: 10,
      quantity: 1,
      type: "digitale",
    });
    expect(order.giftCards.length).toBeGreaterThan(0);
  });
  it("'order' has a 'type', 'denomination' and 'quantity' prop. for each 'gift card' in the gift card array", () => {
    order.giftCards.forEach((card) => {
      expect(card).toHaveProperty("type");
      expect(card).toHaveProperty("denomination");
      expect(card).toHaveProperty("quantity");
    });
  });
  it("'order' has either 'digitale' or 'cartacea' as 'type' for each 'gift card' in the gift card array", () => {
    order.giftCards.forEach((card) => {
      expect(card.type).toMatch(/digitale|cartacea/);
    });
  });
  it("'order' is either '10', '20', '50' or '100' as 'denomination' for each 'gift card' in the gift card array", () => {
    order.giftCards.forEach((card) => {
      expect(card.denomination).toBe(10 || 20 || 50 || 100);
    });
  });
  it("'order' has a number as 'quantity' for each 'gift card' in the gift card array", () => {
    order.giftCards.forEach((card) => {
      expect(typeof card.quantity).toBe("number");
    });
  });
  it("'order' doesn't have more than 1 'gift card' with the same denomination in the gift card array", () => {
    // TODO: implement this test
    expect(true).toBe(true);
  });
});
