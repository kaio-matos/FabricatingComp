import { type FC, type PropsWithChildren } from "react";
import { useGlobalState } from "../contexts/global/index";
import { IProductResource } from "../services/products/resources/product";
import { useMount } from "../hooks/useMount";
import { CreateAuthComponent } from "./CreateAuthComponent";
import { IUserResource } from "../services/auth/resources/user";

const FallbackComponent: FC = () => (
    <div className="flex h-full w-full flex-col justify-center bg-slate-600 text-center text-white">
        <p className="animate-pulse text-4xl font-semibold">Loading Data...</p>
    </div>
);

export function CreateDashboardComponent<Props extends object>(
    Component: FC<
        PropsWithChildren<
            Props & {
                products: IProductResource[];
                user: IUserResource;
            }
        >
    >,
) {
    return CreateAuthComponent<Props>(function InjectedComponent(props) {
        const { PRODUCTS } = useGlobalState();

        useMount(PRODUCTS.index.execute);

        if (PRODUCTS.index.isLoading) {
            return <FallbackComponent />;
        }

        return <Component products={PRODUCTS.products} {...props} />;
    });
}
