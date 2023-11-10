import { Http } from "../http";
import { IOrderResource, Order, OrderStatus } from "./resources/order";
import { schemas } from "./schemas";

export class Orders extends Http {
  private orders: IOrderResource[] = [];

  async index() {
    return this.orders.map(Order.create);
  }

  buy_schema = schemas.buy;
  async buy(payload: typeof schemas.buy._type) {
    const order = {
      id: crypto.randomUUID(),
      cart: payload.cart.toResource,
      amount: payload.cart.total.value,
      status: OrderStatus.created,
      payment: payload.payment,
      created_at: new Date().toUTCString(),
    };

    this.orders.push(order);

    await new Promise((res) => setTimeout(res, 100));

    return Order.create(order);
  }

  cancel_schema = schemas.cancel;
  async cancel(payload: typeof schemas.cancel._type) {
    const order = this.orders.find(({ id }) => id === payload.id);

    if (!order) {
      throw {
        status: 404,
        message: "Not found",
      };
    }

    this.orders = this.orders.map((order) => {
      if (order.id === payload.id) {
        order.status = OrderStatus.canceled;
      }
      return order;
    });

    return Order.create(order);
  }
}
