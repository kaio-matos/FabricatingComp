import { useState } from "react";
import "./App.css";
import { AuthPosts } from "./components/Auth/AuthPosts";
import { PublicPosts } from "./components/Public/PublicPosts";
import { GlobalContextProvider } from "./contexts/global/global.context";

function App() {
    const [isProductsPageActive, setIsProductsPageActive] = useState(false);

    return (
        <>
            <GlobalContextProvider>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1rem",
                        textAlign: "left",
                        width: "100%",
                    }}
                >
                    <button onClick={() => setIsProductsPageActive((v) => !v)}>
                        See our products
                    </button>
                    <div>
                        <h1>Authenticated Area</h1>

                        <AuthPosts />
                    </div>

                    <div>
                        <h1>Public Area</h1>

                        <PublicPosts />
                    </div>
                </div>
            </GlobalContextProvider>
        </>
    );
}

export default App;
