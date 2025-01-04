interface TeamCardProps {
  params: {
    role: string;
    name: string;
    position: string;
    img: string;
  };
}

export default function TeamCard({ params }: TeamCardProps) {
  return (
    <div
      className={`${params.position} ${params.img} 
      w-full h-96 lg:h-72 xl:h-96 rounded-xl p-4 border-2 border-[var(--border-clr)] flex 
      flex-col justify-end text-md md:text-sm lg:text-[10px] xl:text-sm gap-2
      brightness-[80%] hover:brightness-100 hover:border-[var(--input-focus-clr)] duration-300 cursor-pointer`}
    >
      <div className="px-3 py-1 rounded-2xl bg-white text-black w-fit text-left">
        {params.role}
      </div>
      <div
        className="name-tab duration-300 px-3 py-1 rounded-2xl bg-[var(--bg-clr)] 
      w-fit text-left"
      >
        {params.name}
      </div>
    </div>
  );
}
