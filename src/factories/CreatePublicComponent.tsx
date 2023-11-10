import { type FC, type PropsWithChildren } from "react";
import { useGlobalState } from "../contexts/global/index";

export function CreatePublicComponent<Props extends object>(
    Component: FC<
        PropsWithChildren<Props> & {
            state: ReturnType<typeof useGlobalState>;
        }
    >,
) {
    const InjectedComponent: FC<Props> = (props) => {
        const state = useGlobalState();

        return <Component state={state} {...props} />;
    };

    return InjectedComponent;
}
