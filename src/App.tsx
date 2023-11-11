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
            </GlobalContextProvider>
        </>
    );
}

export default App;
