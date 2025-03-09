import { MouseEventHandler } from "react";

interface ButtonProps {
  params: {
    content: string;
    className?: string;
    disabled?: boolean;
    onClickFunction?: MouseEventHandler<HTMLButtonElement>;
  };
}

export default function Button({ params }: ButtonProps) {
  const { content, className, onClickFunction, disabled } = params;

  return (
    <button
      className={`${className} text-white font-medium rounded-lg 
      px-3 md:px-4 py-2 text-center w-fit uppercase text-base`}
      onClick={onClickFunction}
      type="button"
      disabled={disabled}
    >
      {content}
    </button>
  );
}
