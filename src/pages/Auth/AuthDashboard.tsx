import { CreateAuthComponent } from "../../factories/CreateAuthComponent";
import { AuthLayout } from "./AuthLayout";

export const AuthDashboard = CreateAuthComponent(function AuthDashboard({
    user,
}) {
    return (
        <AuthLayout title="Dashboard" className="p-10">
            <p>Yes your name is {user.firstName}</p>
        </AuthLayout>
    );
});
