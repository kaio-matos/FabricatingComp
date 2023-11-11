import { type FC, type PropsWithChildren } from "react";
import { useGlobalState } from "../contexts/global/index";
import { IUserResource } from "../services/auth/resources/user";

const FallbackComponent: FC = () => (
    <div className="flex h-full w-full flex-col justify-center bg-slate-600 text-center text-white">
        <p className="text-4xl font-semibold">
            Make sure to login{" "}
            <a className="text-blue-600" href="/login">
                here
            </a>
            .
        </p>
    </div>
);

export function CreateAuthComponent<Props extends object>(
    Component: FC<
        PropsWithChildren<
            Props & {
                user: IUserResource;
            }
        >
    >,
) {
    const InjectedComponent: FC<PropsWithChildren<Props>> = (props) => {
        const state = useGlobalState();
        const user = state.USER.user;

        if (!user) {
            return <FallbackComponent />;
        }

        return <Component user={user} {...props} />;
    };

    return InjectedComponent;
}
