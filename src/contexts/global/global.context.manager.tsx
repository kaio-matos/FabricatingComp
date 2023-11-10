import { useAuthService } from "./useService/useAuthService";
import { usePostsService } from "./useService/usePostsService";
import { useProductsService } from "./useService/useProductsService";

export type TuseGlobalStateManagerReturn = ReturnType<
    typeof useGlobalStateManager
>;
export function useGlobalStateManager() {
    const USER = useAuthService();
    const POSTS = usePostsService();
    const PRODUCTS = useProductsService();

    return {
        USER,
        POSTS,
        PRODUCTS,
    };
}
