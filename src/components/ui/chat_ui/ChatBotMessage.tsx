import ReactMarkdown from "react-markdown";

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
        className={`${className} p-3 bg-[var(--bg-clr)] rounded-xl
            border-2 border-[var(--border-clr)] w-fit max-w-[75%] font-medium
            prose text-sm prose-invert`}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
