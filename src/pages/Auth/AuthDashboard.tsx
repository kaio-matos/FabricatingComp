import { CreateAuthComponent } from "../../factories/CreateAuthComponent";

export const AuthDashboard = CreateAuthComponent(function AuthDashboard({
    user,
}) {
    return (
        <div className="flex h-full w-full flex-col gap-4 bg-slate-600">
            <h2>Olá {user.firstName}</h2>
        </div>
    );
});
