interface SectionDescriptionProps {
  params: {
    content: string;
    alignment: string;
    className?: string;
  };
}

export default function SectionDescription({
  params,
}: SectionDescriptionProps) {
  return (
    <p
      className={`${params.alignment} ${params.className} w-[100%] md:w-[70%] xl:w-[60%] text-sm md:text-base text-[var(--input-text-clr)]`}
    >
      {params.content}
    </p>
  );
}
