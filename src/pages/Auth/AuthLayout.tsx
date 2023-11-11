import { useState } from "react";

import { Button } from "../../components/Base/Button";
import { CreateAuthComponent } from "../../factories/CreateAuthComponent";
import { useGlobalState } from "../../contexts/global";
import { app_routes } from "../routes";

export const AuthLayout = CreateAuthComponent<{
    title: string;
    className?: string;
}>(function AuthLayout({ title, className, user, children }) {
    const [isNavActive, setIsNavActive] = useState(false);
    const { USER } = useGlobalState();

    const routes = {
        [app_routes.auth.dashboard]: "Dashboard",
    };

    return (
        <div className="flex h-full w-full flex-col bg-slate-600 text-white">
            <div className="flex">
                <Button
                    className="w-[14rem] rounded-none bg-slate-800 focus:ring-0"
                    onClick={() => setIsNavActive(!isNavActive)}
                >
                    Navbar
                </Button>
                <header className="flex flex-grow items-center justify-between bg-slate-800 px-4 py-8">
                    <h1 className="text-3xl">{title}</h1>

                    <Button>{user.firstName}</Button>
                </header>
            </div>
            <section className="flex flex-grow">
                <nav
                    className={`max-w-[14rem] bg-slate-800 py-4 transition-all duration-[600ms]  ${
                        isNavActive ? "w-full px-10" : "w-0 px-0"
                    }`}
                >
                    <div
                        className={`flex h-full flex-col text-center transition-opacity duration-500 ${
                            isNavActive ? "opacity-1" : "opacity-0"
                        }`}
                    >
                        {Object.entries(routes).map(([route, name]) => (
                            <a
                                key={route}
                                className="mb-3 block text-xl font-bold uppercase"
                                href={route}
                            >
                                {name}
                            </a>
                        ))}

                        <Button
                            className="mt-auto text-xl"
                            loading={USER.logout.isLoading}
                            onClick={USER.logout.execute}
                        >
                            Logout
                        </Button>
                    </div>
                </nav>

                <main className={`flex-grow ${className}`}>{children}</main>
            </section>
        </div>
    );
});
