interface IProductCartResource {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedPrice: number;
}

export interface ICartResource {
    id: number;
    products: IProductCartResource[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

export class Cart {
    id: number;
    products: {
        id: number;
        title: string;
        price: number;
        quantity: number;
        total: number;
        discountPercentage: number;
        discountedPrice: number;
    }[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;

    constructor(data: ICartResource) {
        this.id = data.id;
        this.products = data.products.map((product) => ({
            ...product,
            price: product.price,
            total: product.total,
            discountedPrice: product.discountedPrice,
        }));
        this.total = data.total;
        this.discountedTotal = data.discountedTotal;
        this.userId = data.userId;
        this.totalProducts = data.totalProducts;
        this.totalQuantity = data.totalQuantity;
    }

    static create(data: ICartResource) {
        return new Cart(data);
    }

    get toResource(): ICartResource {
        return {
            id: this.id,
            discountedTotal: this.discountedTotal,
            products: this.products.map((p) => ({
                ...p,
                discountedPrice: p.discountedPrice,
                price: p.price,
                total: p.total,
            })),
            total: this.total,
            totalProducts: this.totalProducts,
            totalQuantity: this.totalQuantity,
            userId: this.userId,
        };
    }
}
