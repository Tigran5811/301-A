import "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  data?: Record<string, string | boolean>;
};

export const Button: React.FC<ButtonProps> = ({ children, data }) => {
  return <button {...data}>{children}</button>;
};
