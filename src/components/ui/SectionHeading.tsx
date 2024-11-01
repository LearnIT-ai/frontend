interface SectionHeadingProps {
  params: {
    content: string;
  };
}

export default function SectionHeading({ params }: SectionHeadingProps) {
  return (
    <h2 className="text-[32px] uppercase font-bold mb-6">{params.content}</h2>
  );
}
