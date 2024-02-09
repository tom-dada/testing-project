import { newOrder } from "../modules/businessLogic";
import { orderType } from "../types/types";

describe("newOrder tests", () => {
  
  let order: orderType = {
    personalData: { nome: "", cognome: "", codiceFiscale: "", email: "" },
    giftCards: [],
  };
  
  // Pass mock data to "order" before each test
  beforeEach(() => {
    const data = {
      codiceFiscale: "RSSMRA80A01H501A",
      nome: "Mario",
      cognome: "Rossi",
      email: "mario.rossi@gmail.com",
    };
    order = newOrder(data);
  });

  it("newOrder: 'codice fiscale' is a string", () => {
    expect(typeof order.personalData.codiceFiscale).toBe("string");
  });

  it("newOrder: 'codice fiscale' is 16 characters long", () => {
    expect(order.personalData.codiceFiscale).toHaveLength(16);
  });
  it("newOrder: 'nome' is a string", () => {
    expect(typeof order.personalData.nome).toBe("string");
  });
  it("newOrder: 'name' is under 25 characters long", () => {
    expect(order.personalData.nome.length).toBeLessThanOrEqual(25);
  });
  it("newOrder: 'cognome' is a string", () => {
    expect(typeof order.personalData.cognome).toBe("string");
  });
  it("newOrder: 'cognome' is under 30 characters long", () => {
    expect(order.personalData.cognome.length).toBeLessThanOrEqual(30);
  });
  it("newOrder: 'email' is a string", () => {
    expect(typeof order.personalData.email).toBe("string");
  });
  it("newOrder: 'email' is a valid email address", () => {
    expect(order.personalData.email).toMatch(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    );
  });
});
