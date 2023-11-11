import { useState } from "react";

import { Button } from "../../components/Base/Button";
import { CreateAuthComponent } from "../../factories/CreateAuthComponent";

export const AuthLayout = CreateAuthComponent<{
    title: string;
    className?: string;
}>(function AuthLayout({ title, className, user, children }) {
    const [isNavActive, setIsNavActive] = useState(false);

    const routes = {
        "/auth/dashboard": "Dashboard",
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
                        className={`transition-opacity duration-500 ${
                            isNavActive ? "opacity-1" : "opacity-0"
                        }`}
                    >
                        {Object.entries(routes).map(([route, name]) => (
                            <a
                                className="mb-3 block text-center text-xl font-bold uppercase"
                                href={route}
                            >
                                {name}
                            </a>
                        ))}
                    </div>
                </nav>

                <main className={`flex-grow ${className}`}>{children}</main>
            </section>
        </div>
    );
});
