import { routes } from "../routes";
import { Http } from "../http";
import { IUserResource } from "./resources/user";
import { schemas } from "./schemas";

export class Auth extends Http {
    login_schema = schemas.login;
    async login(payload: typeof schemas.login._type) {
        const { data } = await this.http.post<IUserResource>(
            routes.auth.login,
            payload
        );

        return data;
    }
}
