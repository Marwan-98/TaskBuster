const Button = (props: { onClick: () => void, icon?: JSX.Element, title: string }) => {
  const { onClick, icon, title } = props;

  return (
    <button onClick={onClick}>{ icon ?? title }</button>
  )
}

export default Button