import { useAsyncState } from "../../../hooks/useAsyncState";
import { CommerceService } from "../../../services";

export function useProductsService() {
    return {
        index: useAsyncState(
            CommerceService.Products.index.bind(CommerceService.Products),
            []
        ),
        indexByCategory: useAsyncState(
            CommerceService.Products.indexByCategory.bind(
                CommerceService.Products
            ),
            []
        ),
        get: useAsyncState(
            CommerceService.Products.get.bind(CommerceService.Products),
            null
        ),
        create: useAsyncState(
            CommerceService.Products.create.bind(CommerceService.Products),
            null
        ),
        deleteProduct: useAsyncState(
            CommerceService.Products.delete.bind(CommerceService.Products),
            null
        ),
        search: useAsyncState(
            CommerceService.Products.search.bind(CommerceService.Products),
            []
        ),
    };
}
