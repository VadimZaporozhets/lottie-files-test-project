import { InputHTMLAttributes, FC } from 'react';
import Input from '../Input';

type LabeledInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const LabeledInput: FC<LabeledInputProps> = ({ label, ...props }) => (
  <label className="mb-2 flex items-center justify-between">
    <p className="text-xs text-white">{label}</p>
    <div className="w-1/2">
      <Input {...props} />
    </div>
  </label>
);

export default LabeledInput;
