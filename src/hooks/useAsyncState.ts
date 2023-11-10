import { useState } from "react";
import { useMount } from "./useMount";

export function useMountAsyncState<T, InitialState>(
    request: () => Promise<T>,
    initialState: InitialState,
) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<unknown>();
    const [state, setState] = useState<T | InitialState>(initialState);

    useMount(() => {
        setIsLoading(true);
        request()
            .then(setState)
            .catch(setError)
            .finally(() => setIsLoading(false));
    });

    return {
        state,
        error,
        isLoading,
    };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (...args: any[]) => any;

export function useAsyncState<Request extends Fn, InitialState>(
    request: Request,
    initialState: InitialState,
) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<unknown>();
    const [state, setState] = useState<
        Awaited<ReturnType<Request>> | InitialState
    >(initialState);

    function execute(...params: Parameters<Request>) {
        setIsLoading(true);
        return request(...params)
            .then(setState)
            .catch(setError)
            .finally(() => setIsLoading(false));
    }

    return {
        execute,
        state,
        setState,
        error,
        setError,
        isLoading,
        setIsLoading,
    };
}
