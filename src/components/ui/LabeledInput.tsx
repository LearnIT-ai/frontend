import { ChangeEventHandler, RefObject } from "react";

interface LabeledInputProps {
  labelParams: {
    labelClassName?: string;
    content: string;
  };

  inputParams: {
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

export default function LabeledInput({
  labelParams,
  inputParams,
}: LabeledInputProps) {
  const { labelClassName, content } = labelParams;
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
  } = inputParams;

  return (
    <div className="mb-5 text-left w-full">
      <label
        htmlFor={id}
        className={`${labelClassName}block mb-2 text-sm font-medium text-gray-900`}
      >
        {content}
      </label>
      <input
        type={type}
        id={id}
        name={inputName}
        value={value}
        onChange={functionName}
        className={`${inputClassName} bg-gray-50 border border-gray-300 text-gray-900
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2`}
        required={isRequired}
        placeholder={placeholderText}
        ref={ref}
        maxLength={length}
      />
    </div>
  );
}
