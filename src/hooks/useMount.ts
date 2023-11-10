import { useRef, useEffect } from "react";

export function useMount(cb: () => void) {
    const hasBeenExecutedOnce = useRef(false);

    useEffect(() => {
        if (!hasBeenExecutedOnce.current) {
            cb();
            hasBeenExecutedOnce.current = true;
        }
    }, []);
}
