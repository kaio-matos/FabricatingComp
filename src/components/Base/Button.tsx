import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
    loading?: boolean;
}

interface IAttributes
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof IProps> {}

export function Button(props: IProps & IAttributes) {
    const { loading, ...attrs } = props;

    return (
        <button
            {...attrs}
            className={twMerge([
                "rounded-md bg-blue-600 p-4 transition-all hover:bg-blue-700 focus:ring focus:ring-blue-300",
                loading && "animate-pulse",
                attrs.className,
            ])}
        >
            {loading ? "Loading..." : props.children}
        </button>
    );
}
