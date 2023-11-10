import { IProductResource } from "../products/resources/product";

export type tProducts = {
  products: IProductResource[];
  total: number;
  skip: number;
  limit: number;
};
