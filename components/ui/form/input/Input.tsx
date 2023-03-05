import { HTMLInputTypeAttribute } from 'react';
import { useFormContext } from 'react-hook-form';

export interface IInput {
  label: string;
  keyInput: string;
  type: HTMLInputTypeAttribute | undefined;
  placeholder?: string | undefined;
  pattern?: string | undefined;
}

const Input: React.FC<IInput> = ({ label, keyInput, placeholder, type }) => {
  const { register } = useFormContext();
  return (
    <>
      <label htmlFor={keyInput} className="mb-2 text-sm font-medium text-gray-900 sr-only">
        {label}
      </label>
      <input
        type={type}
        id={keyInput}
        className="block py-4 pl-8 pr-8 w-80 h-full text-200 font-medium text-neutral-800 bg-neutral-100 rounded-full border-0.06 placeholder:text-neutral-500 border-neutral-500 focus:ring-primaryGreen focus:border-primaryGreen"
        placeholder={placeholder ? placeholder : 'Placeholder'}
        required={true}
        {...register(keyInput)}
      />
    </>
  );
};

export default Input;
