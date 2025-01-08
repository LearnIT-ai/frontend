interface ChatButtonProps {
  params: {
    path: string;
    size: number;
    ref?: React.RefObject<HTMLButtonElement>;
    className?: string;
    onClickFunction?: () => void;
  };
}

export default function ChatButton({ params }: ChatButtonProps) {
  const { path, size, ref, className, onClickFunction } = params;

  return (
    <button
      className="hover:ring-2 hover:ring-blue-300 rounded-xl text-center h-12 w-12
                           btn-primary flex justify-center items-center aspect-square"
      onClick={onClickFunction}
      ref={ref}
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
