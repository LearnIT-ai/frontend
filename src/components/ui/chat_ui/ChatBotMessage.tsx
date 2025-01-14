interface ChatBotMessageProps {
  params: {
    id: number;
    content: string;
    className?: string;
  };
}

export default function ChatBotMessage({ params }: ChatBotMessageProps) {
  const { content, className, id } = params;

  return (
    <div className="w-full h-fit flex justify-start" key={id}>
      <div
        className={`${className} p-3 bg-[var(--bg-clr)] rounded-xl text-sm lg:text-xs xl:text-sm
            border-2 border-[var(--border-clr)] w-fit max-w-[75%] font-medium`}
      >
        {content}
      </div>
    </div>
  );
}
