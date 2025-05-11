interface UserMessageProps {
  params: {
    id: number;
    content: string;
    className?: string;
  };
}

export default function UserMessage({ params }: UserMessageProps) {
  const { content, className, id } = params;

  return (
    <div className="w-full h-fit flex justify-end" key={id}>
      <div
        className={`${className} prose prose-lg p-3 bg-[var(--secondary-clr)] rounded-xl text-sm lg:text-xs xl:text-sm 
            border-2 border-white w-fit max-w-[75%] text-black font-medium`}
      >
        {content}
      </div>
    </div>
  );
}
