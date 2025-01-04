interface SectionHeadingProps {
  params: {
    content: string;
  };
}

export default function SectionHeading({ params }: SectionHeadingProps) {
  return (
    <h2 className="text-[26px] md:text-[32px] uppercase font-semibold mb-8">
      {params.content}
    </h2>
  );
}
