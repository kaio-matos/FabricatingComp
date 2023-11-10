import { useEffect, useState } from "react";
import { useAsyncState } from "../../../hooks/useAsyncState";
import { CommerceService } from "../../../services";
import { IUserResource } from "../../../services/auth/resources/user";

export function useAuthService() {
    const localStorageUser = window.localStorage.getItem("user");
    const [user, setUser] = useState<IUserResource | null>(
        localStorageUser ? JSON.parse(localStorageUser) : null,
    );

    useEffect(() => {
        window.localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    const login = useAsyncState(
        async (...args: Parameters<typeof CommerceService.Auth.login>) => {
            const account = await CommerceService.Auth.login(...args);
            setUser(account);
            return account;
        },
        null,
    );

    const logout = useAsyncState(() => {
        setUser(null);
        return Promise.resolve(null);
    }, null);

    return { user, login, logout };
}
