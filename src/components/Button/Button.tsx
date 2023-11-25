import { ReactElement } from "react";
import { ButtonProps } from "./Button.type";

const Button = (props: ButtonProps): ReactElement => {
  const { onClick, icon, title } = props;

  return (
    <button onClick={onClick}>{ icon ?? title }</button>
  )
}

export default Button