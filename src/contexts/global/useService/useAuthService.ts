import { useEffect, useState } from "react";
import { useAsyncState } from "../../../hooks/useAsyncState";
import { CommerceService } from "../../../services";
import { IUserResource } from "../../../services/auth/resources/user";
import { app_routes } from "../../../pages/routes";

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
        return new Promise((res) => {
            setTimeout(() => {
                location.assign(app_routes.login);

                setTimeout(() => {
                    res(null);
                    setUser(null);
                }, 500);
            }, 2000);
        });
    }, null);

    return { user, login, logout };
}
