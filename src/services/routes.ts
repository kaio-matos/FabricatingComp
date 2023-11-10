export const routes = {
  auth: {
    _: "/auth",
    login: "/auth/login",
    products: {
      add: "/auth/products/add",
      update: (id: number) => "/auth/products/update/" + id,
      delete: (id: number) => "/auth/products/delete/" + id,
    },
  },
  products: {
    _: (id?: number) => (id ? "/products/" + id : "/products"),
    categories: "/products/categories",
    category: (category: string) => "/products/category/" + category,
  },
  carts: {
    _: "/carts",
    cart: (id: number) => "/carts/" + id,
    user: (id: number) => "/carts/user/" + id,
    add: "/carts/add",
    update: (id: number) => "/carts/" + id,
  },
} as const;
