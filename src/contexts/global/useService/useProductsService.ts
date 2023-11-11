import { useState } from "react";
import { useAsyncState } from "../../../hooks/useAsyncState";
import { CommerceService } from "../../../services";
import { Product } from "../../../services/products/resources/product";

export function useProductsService() {
    const [products, setProducts] = useState<Product[]>([]);

    return {
        products,

        index: useAsyncState(
            async (
                ...args: Parameters<typeof CommerceService.Products.index>
            ) => {
                const { products } = await CommerceService.Products.index(
                    ...args,
                );
                await new Promise((res) => setTimeout(res, 1000));
                setProducts(products);
            },
            [],
        ),
        indexByCategory: useAsyncState(
            CommerceService.Products.indexByCategory.bind(
                CommerceService.Products,
            ),
            [],
        ),
        get: useAsyncState(
            CommerceService.Products.get.bind(CommerceService.Products),
            null,
        ),
        create: useAsyncState(
            CommerceService.Products.create.bind(CommerceService.Products),
            null,
        ),
        deleteProduct: useAsyncState(
            CommerceService.Products.delete.bind(CommerceService.Products),
            null,
        ),
        search: useAsyncState(
            CommerceService.Products.search.bind(CommerceService.Products),
            [],
        ),
    };
}
