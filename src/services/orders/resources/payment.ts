import { Resource } from "../../types";

export const PaymentMethod = {
    cash: "cash",
    card: "card",

    getName(key: string) {
        return {
            cash: "Cash",
            card: "Credit Card",
        }[key];
    },
    getValues(): string[] {
        return Object.values(this).filter(
            (value) => typeof value === "string"
        ) as string[];
    },
} as const;
export type PaymentMethod = Omit<typeof PaymentMethod, "getName" | "getValues">;

//
// Resource
//
interface IPaymentResourceCash {
    method: typeof PaymentMethod.cash;
}

interface IPaymentResourceCard {
    method: typeof PaymentMethod.card;
    number: string;
    code: string;
    installments: number;
}

export type IPaymentResource = IPaymentResourceCash | IPaymentResourceCard;

//
// Class
//
export interface Payment extends Resource {
    method: PaymentMethod[keyof PaymentMethod];

    get toResource(): IPaymentResource;
}

export class PaymentCash implements Payment {
    method: PaymentMethod["cash"];

    constructor(payment: IPaymentResourceCash) {
        this.method = payment.method;
    }

    static create(payment: IPaymentResourceCash) {
        return new PaymentCash(payment);
    }

    get toResource(): IPaymentResourceCash {
        return {
            method: this.method,
        };
    }
}

export class PaymentCard implements Payment {
    method: PaymentMethod["card"];
    number: string;
    code: string;
    installments: number;

    constructor(payment: IPaymentResourceCard) {
        this.method = payment.method;
        this.number = payment.number;
        this.code = payment.code;
        this.installments = payment.installments;
    }

    static create(payment: IPaymentResourceCard) {
        return new PaymentCard(payment);
    }

    get toResource(): IPaymentResourceCard {
        return {
            method: this.method,
            number: this.number,
            code: this.code,
            installments: this.installments,
        };
    }
}

export function createPayment(payment: IPaymentResource) {
    if (payment.method === PaymentMethod.card) {
        return PaymentCard.create(payment);
    }

    return PaymentCash.create(payment);
}
