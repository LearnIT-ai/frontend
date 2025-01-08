interface UserMessageProps {
  params: {
    content: string;
    className?: string;
  };
}

export default function UserMessage({ params }: UserMessageProps) {
  const { content, className } = params;

  return (
    <div className="w-full h-fit flex justify-end">
      <div
        className={`${className} p-3 bg-[var(--secondary-clr)] rounded-xl text-sm 
            border-2 border-white w-fit max-w-[75%] text-black font-medium`}
      >
        {content}
      </div>
    </div>
  );
}
