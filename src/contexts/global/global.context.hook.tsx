import { useContext } from "react";
import { GlobalContext } from "./global.context";

export function useGlobalState() {
    return useContext(GlobalContext);
}
