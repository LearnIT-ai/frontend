import { MouseEventHandler } from "react";

interface ButtonProps {
  params: {
    content: string;
    className?: string;
    onClickFunction?: MouseEventHandler<HTMLButtonElement>;
  };
}

export default function Button({ params }: ButtonProps) {
  const { content, className, onClickFunction } = params;

  return (
    <button
      className={`${className} text-white
      hover:ring-2 hover:ring-blue-300 font-medium rounded-lg 
      px-3 md:px-4 py-2 text-center w-fit
      uppercase text-lg md:text-sm lg:text-lg`}
      onClick={onClickFunction}
      type="button"
    >
      {content}
    </button>
  );
}
