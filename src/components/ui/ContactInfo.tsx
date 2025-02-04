interface ContactInfoProps {
  params: {
    content: string;
  };
}

export default function ContactInfo({ params }: ContactInfoProps) {
  const { content } = params;

  return (
    <div className="flex flex-row gap-4 hover:translate-x-4 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="bi bi-arrow-down-right-circle w-6 h-6 fill-[var(--input-clr)]"
        viewBox="0 0 16 16"
      >
        <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
      </svg>
      <p>{content}</p>
    </div>
  );
}
