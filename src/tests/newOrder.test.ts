import { newOrder } from "../modules/businessLogic";

describe("newOrder tests", () => {
  it("newOrder: order is defined", () => {
    // Given
    // When
    const order = newOrder();
    // Then
    expect(order).toBeDefined();
  });
  it("newOrder: 'codice fiscale' is a string", () => {
    // Given
    // When
    const order = newOrder();
    // Then
    expect(order.codiceFiscale).toBeInstanceOf(String);
  }),
    it("newOrder: 'codice fiscale' is 16 characters long", () => {
      // Given
      // When
      const order = newOrder();
      // Then
      expect(order.codiceFiscale).toHaveLength(16);
    }),
    it("newOrder: 'codice fiscale' is a valid Italian fiscal code", () => {
      // Given
      // When
      const order = newOrder();
      // Then
      // ** Regex from http://blog.marketto.it/2016/01/regex-validazione-codice-fiscale-con-omocodia/
      expect(order.codiceFiscale).toMatch(
        /^(?:[A-Z][AEIOU][AEIOUX]|[AEIOU]X{2}|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i
      );
    });
  it("newOrder: 'nome' is a string", () => {
    // Given
    // When
    const order = newOrder();
    // Then
    expect(order.nome).toBeInstanceOf(String);
  }),
    it("newOrder: 'name' is under 25 characters long", () => {
      // Given
      // When
      const order = newOrder();
      // Then
      expect(order.nome).toBeLessThanOrEqual(25);
    }),
    it("newOrder: 'cognome' is a string", () => {
      // Given
      // When
      const order = newOrder();
      // Then
      expect(order.cognome).toBeInstanceOf(String);
    });
  it("newOrder: 'cognome' is under 30 characters long", () => {
    // Given
    // When
    const order = newOrder();
    // Then
    expect(order.cognome).toBeLessThanOrEqual(30);
  });
  it("newOrder: 'email' is a string", () => {
    // Given
    // When
    const order = newOrder();
    // Then
    expect(order.email).toBeInstanceOf(String);
  });
  it("newOrder: 'email' is a valid email address", () => {
    // Given
    // When
    const order = newOrder();
    // Then
    expect(order.email).toMatch(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    );
  });
});
