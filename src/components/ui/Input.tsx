import { ChangeEventHandler, RefObject } from "react";

interface InputProps {
  params: {
    id: string;
    type: string;
    value: string;
    inputName: string;
    functionName: ChangeEventHandler<HTMLInputElement>;
    inputClassName?: string;
    isRequired: boolean;
    placeholderText?: string;
    ref?: RefObject<HTMLInputElement>;
    length?: number;
  };
}

export default function Input({ params }: InputProps) {
  const {
    id,
    type,
    value,
    inputName,
    functionName,
    inputClassName,
    isRequired,
    placeholderText,
    ref,
    length,
  } = params;

  return (
    <input
      type={type}
      id={id}
      name={inputName}
      value={value}
      onChange={functionName}
      className={`${inputClassName} bg-[var(--input-clr)] border-2 border-[var(--bg-clr)] outline-none focus:border-[var(--input-focus-clr)]
                text-[var(--input-text-clr)] focus:text-[var(--input-text-focus-clr)] placeholder-[var(--input-text-clr)] text-sm rounded-2xl w-full duration-300 p-3`}
      required={isRequired}
      placeholder={placeholderText}
      ref={ref}
      maxLength={length}
    />
  );
}
