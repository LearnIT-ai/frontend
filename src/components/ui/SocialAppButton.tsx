interface ButtonProps {
  params: {
    content: string;
    className?: string;
  };
}

export default function SocialAppButton({ params }: ButtonProps) {
  const { content, className } = params;

  return (
    <button
      className={`${className} hover:ring-2 hover:ring-blue-300 border-2
      border-[var(--input-clr)] rounded-[100%] px-3 py-3 bg-[var(--input-clr)]`}
    >
      <img src={content} alt="Social app button" className="h-5 w-5" />
    </button>
  );
}
