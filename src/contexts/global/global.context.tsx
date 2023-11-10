import { createContext, type FC, type PropsWithChildren } from "react";
import {
    useGlobalStateManager,
    type TuseGlobalStateManagerReturn,
} from "./global.context.manager";

export const GlobalContext = createContext<TuseGlobalStateManagerReturn>(
    {} as TuseGlobalStateManagerReturn
);

export const GlobalContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const stateManager = useGlobalStateManager();

    return (
        <GlobalContext.Provider value={stateManager}>
            {children}
        </GlobalContext.Provider>
    );
};
