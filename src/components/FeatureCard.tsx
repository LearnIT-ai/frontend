interface FeatureCardProps {
  params: {
    heading: string;
    content: string;
    logo: string;
    delay: number;
  };
}

export default function FeatureCard({ params }: FeatureCardProps) {
  return (
    <div
      className="feature-card bg-[var(--dark-clr)] flex flex-col w-full h-64 md:h-80 items-start justify-between
                    rounded-xl p-4 lg:p-6 border-2 border-[var(--border-clr)]"
    >
      <div
        className="logo-container h-14 w-14 flex justify-center items-center border-2 border-[var(--border-clr)] 
                    rounded-lg bg-[var(--bg-clr)]"
      >
        <img className="h-8 w-auto" src={params.logo} alt="Feature Icon" />
      </div>
      <div className="flex flex-col gap-8 items-start text-left">
        <div className="flex flex-col gap-2 items-start">
          <p className="uppercase font-semibold">{params.heading}</p>
          <p className="text-xs">{params.content}</p>
        </div>
        <a href="#" className="text-sm uppercase">
          Find out more
        </a>
      </div>
    </div>
  );
}
