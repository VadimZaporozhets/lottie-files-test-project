import { FC, InputHTMLAttributes } from 'react';

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input {...props} className="w-full rounded-md bg-neutral-900 px-2 py-1 text-xs text-white" />
);

export default Input;
