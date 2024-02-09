export type personalDataType = {
    nome: string;
    cognome: string;
    codiceFiscale: string;
    email: string;
};

export type giftCardType = {
    type: "digitale" | "cartacea";
    denomination: 10 | 20 | 50 | 100;
    quantity: number;
};

export type orderType = {
    personalData: personalDataType;
    giftCards: giftCardType[];
};

export type amountType = {
    taxable: number;
    iva: number;
    total: number;
};
