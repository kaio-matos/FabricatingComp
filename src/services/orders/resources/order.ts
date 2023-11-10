import { ICartResource, Cart } from "../../carts/resources/cart";
import { IPaymentResource, Payment, createPayment } from "./payment";

export const OrderStatus = {
    created: "created",
    processing: "processing",
    processed: "processed",
    failed: "failed",
    canceled: "canceled",

    name(key: string) {
        return {
            created: "Created",
            processing: "Processing",
            processed: "Processed",
            failed: "Failed",
            canceled: "Canceled",
        }[key];
    },
} as const;
export type OrderStatus = Omit<typeof OrderStatus, "name">;

export interface IOrderResource {
    id: string;
    cart: ICartResource;
    amount: number;
    status: OrderStatus[keyof OrderStatus];
    payment: IPaymentResource;
    created_at: string;
}

export class Order {
    id: string;
    cart: Cart;
    amount: number;
    status: OrderStatus[keyof OrderStatus];
    payment: Payment;
    created_at: Date;

    constructor(order: IOrderResource) {
        this.id = order.id;
        this.cart = Cart.create(order.cart);
        this.status = order.status;
        this.amount = order.amount;
        this.payment = createPayment(order.payment);
        this.created_at = new Date(order.created_at);
    }

    static create(order: IOrderResource) {
        return new Order(order);
    }

    get toResource(): IOrderResource {
        return {
            id: this.id,
            cart: this.cart.toResource,
            status: this.status,
            amount: this.amount,
            payment: this.payment.toResource,
            created_at: this.created_at.toUTCString(),
        };
    }
}
