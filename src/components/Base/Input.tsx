import { InputHTMLAttributes, ReactNode, useState } from "react";

interface IProps {
    label?: ReactNode;
}

interface IAttributes
    extends Omit<InputHTMLAttributes<HTMLInputElement>, keyof IProps> {}

export function Input(props: IProps & IAttributes) {
    const { label, ...attrs } = props;
    const [type, setType] = useState(attrs.type);
    const [isFocused, setIsFocused] = useState(false);
    const isPasswordType = (value: typeof type) => value === "password";

    const BaseInput = (
        <div
            className={`flex rounded bg-white px-4 py-2 text-slate-950 ${
                isFocused && "ring ring-slate-800"
            }`}
        >
            <input
                className="w-full outline-none transition-all"
                {...attrs}
                type={type}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {isPasswordType(attrs.type) && (
                <button
                    onClick={() =>
                        setType(isPasswordType(type) ? "text" : "password")
                    }
                >
                    Visible
                </button>
            )}
        </div>
    );

    if (label) {
        return (
            <label className="flex flex-col gap-1 text-slate-100">
                {label}
                {BaseInput}
            </label>
        );
    }

    return BaseInput;
}
