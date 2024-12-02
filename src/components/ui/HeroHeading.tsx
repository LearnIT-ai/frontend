interface HeroHeadingProps {
  params: {
    content: string;
  };
}

export default function HeroHeading({ params }: HeroHeadingProps) {
  return (
    <h1
      className="text-[36px] md:text-[50px] xl:text-[65px] uppercase font-bold w-[70%] 
    xl:w-[70%] mb-4"
    >
      {params.content}
    </h1>
  );
}
