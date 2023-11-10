import { type FC, type PropsWithChildren } from "react";
import { useGlobalState } from "../contexts/global/index";
import { IUserResource } from "../services/auth/resources/user";

const FallbackComponent: FC = () => (
    <p>
        Make sure to login <a href="#">here</a>.
    </p>
);

export function CreateAuthComponent<Props extends object>(
    Component: FC<
        PropsWithChildren<Props> & {
            user: IUserResource;
        }
    >,
) {
    const InjectedComponent: FC<Props> = (props) => {
        const state = useGlobalState();
        const user = state.USER.user;

        if (!user) {
            return <FallbackComponent />;
        }

        return <Component user={user} {...props} />;
    };

    return InjectedComponent;
}
