interface HeroHeadingProps {
  params: {
    content: string;
    className?: string;
  };
}

export default function HeroHeading({ params }: HeroHeadingProps) {
  return (
    <h1
      className={`${params.className} text-[24px] md:text-[36px] lg:text-[60px] xl:text-[75px] uppercase font-bold w-[70%] 
    xl:w-[70%] mb-4`}
    >
      {params.content}
    </h1>
  );
}
