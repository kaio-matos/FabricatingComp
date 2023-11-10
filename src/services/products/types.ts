import { IProductResource } from "./resources/product";

export type tProducts = {
  products: IProductResource[];
  total: number;
  skip: number;
  limit: number;
};
