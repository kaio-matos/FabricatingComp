import { routes } from "../routes";
import { Http } from "../http";
import { IProductResource, Product } from "./resources/product";
import { tProducts } from "./types";
import { schemas } from "./schemas";

export class Products extends Http {
  async index() {
    const {
      data: { products, ...data },
    } = await this.http.get<tProducts>(routes.products._());

    return {
      products: products.map(Product.create),
      ...data,
    };
  }

  async get(id: number) {
    const { data } = await this.http.get<IProductResource>(
      routes.products._(id)
    );

    return Product.create(data);
  }

  async search(query: string) {
    const {
      data: { products, ...data },
    } = await this.http.get<tProducts>(routes.products._(), {
      params: {
        search: query,
      },
    });

    return {
      products: products.map(Product.create),
      ...data,
    };
  }

  async categories() {
    const { data } = await this.http.get<string[]>(routes.products.categories);

    return data;
  }

  async indexByCategory(category: string) {
    const {
      data: { products, ...data },
    } = await this.http.get<tProducts>(routes.products.category(category));

    return {
      products: products.map(Product.create),
      ...data,
    };
  }

  //
  //
  // Authenticated Functions
  //
  //

  async create(payload: typeof schemas.create._type) {
    const { data } = await this.http.post<IProductResource>(
      routes.auth.products.add,
      payload
    );

    return Product.create(data);
  }

  async update(id: number, payload: typeof schemas.create._type) {
    const { data } = await this.http.put<IProductResource>(
      routes.auth.products.update(id),
      payload
    );

    return Product.create(data);
  }

  async delete(id: number) {
    const { data } = await this.http.delete<IProductResource>(
      routes.auth.products.delete(id)
    );

    return Product.create(data);
  }
}
