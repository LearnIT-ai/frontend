import { ChangeEventHandler, RefObject } from "react";

interface InputProps {
  params: {
    id: string;
    type: string;
    value: string;
    ariaLabel: string;
    inputName: string;
    functionName: ChangeEventHandler<HTMLInputElement>;
    inputClassName?: string;
    isRequired: boolean;
    placeholderText?: string;
    ref?: RefObject<HTMLInputElement>;
    length?: number;
    error?: string;
  };
}

export default function Input({ params }: InputProps) {
  const {
    id,
    type,
    value,
    ariaLabel,
    inputName,
    functionName,
    inputClassName,
    isRequired,
    placeholderText,
    ref,
    length,
    error,
  } = params;

  return (
    <input
      type={type}
      id={id}
      name={inputName}
      value={value}
      aria-label={ariaLabel}
      onChange={functionName}
      className={`${inputClassName} bg-[var(--input-clr)] border-2 border-[var(--bg-clr)] outline-none focus:border-[var(--input-focus-clr)]
                text-[var(--input-text-clr)] focus:text-[var(--input-text-focus-clr)] placeholder-[var(--input-text-clr)] text-sm rounded-2xl w-full 
                duration-300 p-3 ${
                  error ? "border-2 border-[var(--error-clr)]" : ""
                }`}
      required={isRequired}
      placeholder={placeholderText}
      ref={ref}
      maxLength={length}
    />
  );
}
