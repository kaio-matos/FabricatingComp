import { useGlobalState } from "../../contexts/global";
import { useMount } from "../../hooks/useMount";
import { CreateAuthComponent } from "../factories/CreateAuthComponent";

export const AuthPosts = CreateAuthComponent(function AuthPosts({ user }) {
    const { POSTS } = useGlobalState();

    useMount(() => POSTS.getForUser.execute(user.id));

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
            }}
        >
            <h2>POSTS</h2>

            {POSTS.getForUser.isLoading && "Loading..."}

            <div
                style={{
                    height: "65vh",
                    overflow: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                {POSTS.getForUser.state.map(({ id, title, by, text }) => {
                    return (
                        <article
                            key={id}
                            style={{
                                textAlign: "left",
                                border: "1px solid #999999",
                                padding: "1rem",
                            }}
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
