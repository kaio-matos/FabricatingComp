import { useState } from "react";
import { Input } from "../components/Base/Input";
import { CreatePublicComponent } from "../factories/CreatePublicComponent";
import { Button } from "../components/Base/Button";
import { app_routes } from "./routes";

export const Login = CreatePublicComponent(function Login({ state }) {
    const [username, setUsername] = useState<string>("atuny0");
    const [password, setPassword] = useState<string>("9uQFF1Lh");

    return (
        <div className="flex h-full flex-col gap-4 bg-gray-600 p-36 text-2xl text-white">
            <h1 className="mb-2 text-5xl font-bold text-slate-100">Log in</h1>

            <Input
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button
                loading={state.USER.login.isLoading}
                onClick={async () => {
                    if (!username || !password) return;

                    await state.USER.login.execute({
                        username,
                        password,
                    });
                    location.assign(app_routes.auth.dashboard);
                }}
            >
                Login
            </Button>
        </div>
    );
});
