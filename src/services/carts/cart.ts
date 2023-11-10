import { routes } from "../routes";
import { Http } from "../http";
import { Cart, ICartResource } from "./resources/cart";
import { schemas } from "./schemas";

export class Carts extends Http {
  async get(cart_id: number) {
    const { data: cart } = await this.http.get<ICartResource>(
      routes.carts.cart(cart_id)
    );

    return Cart.create(cart);
  }

  async getByUserId(user_id: number) {
    const {
      data: { carts, ...data },
    } = await this.http.get<{
      carts: ICartResource[];
      total: number;
      skip: number;
      limit: number;
    }>(routes.carts.user(user_id));

    return {
      ...data,
      carts: carts.map(Cart.create),
    };
  }

  add_schema = schemas.add;
  async add(payload: typeof schemas.add._input) {
    const { data } = await this.http.post<ICartResource>(
      routes.carts.add,
      payload
    );

    return Cart.create(data);
  }

  update_schema = schemas.update;
  async update(id: number, payload: typeof schemas.update._input) {
    const { data } = await this.http.put<ICartResource>(
      routes.carts.update(id),
      payload
    );

    return Cart.create(data);
  }
}
