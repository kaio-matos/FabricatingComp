import { useGlobalState } from "../../contexts/global";
import { useMount } from "../../hooks/useMount";
import { CreateAuthComponent } from "../../factories/CreateAuthComponent";

export const AuthPosts = CreateAuthComponent(function AuthPosts({ user }) {
    const { POSTS } = useGlobalState();

    useMount(() => POSTS.getForUser.execute(user.id));

    return (
        <div className="flex w-full flex-col gap-4">
            <h2>POSTS</h2>

            {POSTS.getForUser.isLoading && "Loading..."}

            <div className="flex h-[65vh] flex-col gap-4 overflow-auto">
                {POSTS.getForUser.state.map(({ id, title, by, text }) => {
                    return (
                        <article
                            key={id}
                            className="border border-gray-400 text-left"
                        >
                            <h3>{title}</h3>
                            <small>Author: {by}</small>

                            <p>{text}</p>
                        </article>
                    );
                })}
            </div>
        </div>
    );
});
