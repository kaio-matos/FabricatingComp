import { Resource } from "../../types";

export interface IProductResource {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];

    isDeleted?: boolean;
    deletedOn?: string;
}

export class Product implements Resource {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];

    isDeleted?: boolean;
    deletedOn?: string;

    constructor(data: IProductResource) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.price = data.price;
        this.discountPercentage = data.discountPercentage;
        this.rating = data.rating;
        this.stock = data.stock;
        this.brand = data.brand;
        this.category = data.category;
        this.thumbnail = data.thumbnail;
        this.images = data.images;

        this.isDeleted = data.isDeleted;
        this.deletedOn = data.deletedOn;
    }

    static create(data: IProductResource) {
        return new Product(data);
    }

    get toResource(): IProductResource {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            price: this.price,
            discountPercentage: this.discountPercentage,
            rating: this.rating,
            stock: this.stock,
            brand: this.brand,
            category: this.category,
            thumbnail: this.thumbnail,
            images: this.images,

            isDeleted: this.isDeleted,
            deletedOn: this.deletedOn,
        };
    }
}
