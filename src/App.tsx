import { GlobalContextProvider } from "./contexts/global/global.context";
import { Login } from "./pages/Login";
import { AuthDashboard } from "./pages/Auth/AuthDashboard";
import { CreatePublicComponent } from "./factories/CreatePublicComponent";
import { ReactNode } from "react";
import { app_routes } from "./pages/routes";

const CurrentPage = CreatePublicComponent(() => {
    const r = app_routes;

    const pages: Record<string, ReactNode> = {
        [r.login]: <Login />,
        [r.auth.dashboard]: <AuthDashboard />,
    };

    return pages[window.location.pathname] || <p>Page not found</p>;
});

function App() {
    return (
        <>
            <GlobalContextProvider>
                <CurrentPage />
                {/* <div className="grid w-full grid-cols-2 gap-4 text-left">
                    <button>See our products</button>
                    <div>
                        <h1>Authenticated Area</h1>

                        <AuthPosts />
                    </div>

                    <div>
                        <h1>Public Area</h1>

                        <PublicPosts />
                    </div>
                </div> */}
            </GlobalContextProvider>
        </>
    );
}

export default App;
