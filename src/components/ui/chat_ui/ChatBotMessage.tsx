interface ChatBotMessageProps {
  params: {
    content: string;
    className?: string;
  };
}

export default function ChatBotMessage({ params }: ChatBotMessageProps) {
  const { content, className } = params;

  return (
    <div className="w-full h-fit flex justify-start">
      <div
        className={`${className} p-3 bg-[var(--bg-clr)] rounded-xl text-sm
            border-2 border-[var(--border-clr)] w-fit max-w-[75%] font-medium`}
      >
        {content}
      </div>
    </div>
  );
}
