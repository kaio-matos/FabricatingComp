import { useMount } from "../../hooks/useMount";
import { CreatePublicComponent } from "../../factories/CreatePublicComponent";

export const PublicPosts = CreatePublicComponent(function PublicPosts({
    state,
}) {
    useMount(state.POSTS.getPublic.execute);

    return (
        <div className="flex w-full flex-col gap-4">
            <p>
                {state.USER.user
                    ? `Bem vindo ${state.USER.user.firstName}!`
                    : "Bem vindo!"}
            </p>

            <br />

            {state.POSTS.getPublic.isLoading && "Loading..."}

            <div className="flex h-[50vh] flex-col gap-4 overflow-auto">
                {!state.USER.user &&
                    state.POSTS.getPublic.state.map(
                        ({ id, title, by, text }) => {
                            return (
                                <article
                                    key={id}
                                    style={{
                                        border: "1px solid #999999",
                                        padding: "1rem",
                                    }}
                                >
                                    <h3>{title}</h3>
                                    <small>Author: {by}</small>

                                    <p>{text}</p>
                                </article>
                            );
                        },
                    )}
            </div>
        </div>
    );
});
