import { MouseEventHandler } from "react";

interface ChatButtonProps {
  params: {
    path: string;
    size: number;
    disabled?: boolean;
    ref?: React.RefObject<HTMLButtonElement>;
    className?: string;
    onClickFunction?: MouseEventHandler<HTMLButtonElement>;
  };
}

export default function ChatButton({ params }: ChatButtonProps) {
  const { path, size, ref, className, disabled, onClickFunction } = params;

  return (
    <button
      className={`hover:ring-2 hover:ring-blue-300 rounded-xl text-center w-12 h-12 lg:h-10 xl:h-12 lg:w-10 xl:w-12
                  btn-primary flex justify-center items-center aspect-square
                  ${
                    disabled
                      ? "bg-[var(--border-clr)]"
                      : "bg-[var(--primary-clr)]"
                  }`}
      onClick={onClickFunction}
      ref={ref}
      disabled={disabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="currentColor"
        viewBox="0 0 16 16"
        className={className}
      >
        <path d={path} />
      </svg>
    </button>
  );
}
