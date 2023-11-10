import { useState } from "react";
import { useAsyncState } from "../../../hooks/useAsyncState";
import { CommerceService } from "../../../services";
import { IUserResource } from "../../../services/auth/resources/user";

export function useAuthService() {
    const [user, setUser] = useState<IUserResource | null>(null);

    const login = useAsyncState(async () => {
        const account = await CommerceService.Auth.login({
            username: "atuny0",
            password: "9uQFF1Lh",
        });
        setUser(account);
        return account;
    }, null);

    const logout = useAsyncState(() => {
        setUser(null);
        return Promise.resolve(null);
    }, null);

    return { user, login, logout };
}
