import { addGiftCard, newOrder } from "../modules/businessLogic";
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
    // Given, When
    order = addGiftCard(order, {
      denomination: 10,
      quantity: 1,
      type: "digitale",
    });
    // Then
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
  it("'addGiftCard' should increment the quantity of an existing gift card", () => {
    order = addGiftCard(order, {
      denomination: 10,
      quantity: 1,
      type: "digitale",
    });
    const newOrder = addGiftCard(order, {
      denomination: 10,
      quantity: 1,
      type: "digitale",
    });
    expect(newOrder.giftCards.length).toBe(1);
    expect(newOrder.giftCards[0].quantity).toBe(2);
  });

  it("'addGiftCard' should add a new gift card if the denomination is different", () => {
    order = addGiftCard(order, {
      denomination: 10,
      quantity: 1,
      type: "digitale",
    });
    const newOrder = addGiftCard(order, {
      denomination: 20,
      quantity: 1,
      type: "digitale",
    });
    expect(newOrder.giftCards.length).toBe(2);
    expect(newOrder.giftCards[1].denomination).toBe(20);
    expect(newOrder.giftCards[1].quantity).toBe(1);
  });
});
