import { ComponentPropsWithoutRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    icon?: JSX.Element,
    title: string
}
