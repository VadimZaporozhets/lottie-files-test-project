import { FC, ButtonHTMLAttributes, PropsWithChildren } from 'react';

const Button: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> = ({
  children,
  ...props
}) => (
  <button
    {...props}
    type="button"
    className="rounded-md bg-accent px-2 py-1 text-sm font-bold text-white"
  >
    {children}
  </button>
);

export default Button;
