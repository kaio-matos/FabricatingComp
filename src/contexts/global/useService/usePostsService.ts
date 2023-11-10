import { useAsyncState } from "../../../hooks/useAsyncState";
import { IUserResource } from "../../../services/auth/resources/user";
import { posts } from "../../../mock/posts";

export function usePostsService() {
    const getPublic = useAsyncState(async () => {
        await new Promise((res) => setTimeout(res, 1000));

        return posts;
    }, []);

    const getForUser = useAsyncState(async (userId: IUserResource["id"]) => {
        String(userId);

        await new Promise((res) => setTimeout(res, 1000));

        return posts;
    }, []);

    return {
        getPublic,
        getForUser,
    };
}
