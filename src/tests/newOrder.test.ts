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

  it("'codice fiscale' is a string", () => {
    expect(typeof order.personalData.codiceFiscale).toBe("string");
  });

  it("'codice fiscale' is 16 characters long", () => {
    expect(order.personalData.codiceFiscale).toHaveLength(16);
  });
  it("'codice fiscale' is a valid Italian fiscal code", () => {
    // Regex taken from http://blog.marketto.it/2016/01/regex-validazione-codice-fiscale-con-omocodia/
    expect(order.personalData.codiceFiscale).toMatch(
      /^(?:[A-Z][AEIOU][AEIOUX]|[AEIOU]X{2}|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i
    );
  });
  it("'nome' is a string", () => {
    expect(typeof order.personalData.nome).toBe("string");
  });
  it("'name' is under 25 characters long", () => {
    expect(order.personalData.nome.length).toBeLessThanOrEqual(25);
  });
  it("'cognome' is a string", () => {
    expect(typeof order.personalData.cognome).toBe("string");
  });
  it("'cognome' is under 30 characters long", () => {
    expect(order.personalData.cognome.length).toBeLessThanOrEqual(30);
  });
  it("'email' is a string", () => {
    expect(typeof order.personalData.email).toBe("string");
  });
  it("'email' is a valid email address", () => {
    expect(order.personalData.email).toMatch(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    );
  });
});
