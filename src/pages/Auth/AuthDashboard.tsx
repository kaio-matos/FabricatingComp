import { CreateAuthComponent } from "../../factories/CreateAuthComponent";
import { CreateDashboardComponent } from "../../factories/CreateDashboardComponent";
import { AuthLayout } from "./AuthLayout";

export const Dashboard = CreateDashboardComponent(function Dashboard({
    user,
    products,
}) {
    return (
        <>
            <p>Yes your name is {user.firstName}</p>

            <div className="flex flex-col gap-4">
                <h1>My products</h1>
                <div>
                    {products.map((product) => (
                        <p>{product.title}</p>
                    ))}
                </div>
            </div>
        </>
    );
});

export const AuthDashboard = CreateAuthComponent(function AuthDashboard() {
    return (
        <AuthLayout title="Dashboard" className="p-10">
            <Dashboard />
        </AuthLayout>
    );
});
