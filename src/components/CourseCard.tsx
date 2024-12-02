import { Link } from "react-router-dom";

interface CourseCardProps {
  params: {
    heading: string;
    content: string;
    decoration: string;
    link: string;
    className?: string;
  };
}

export default function CourseCard({ params }: CourseCardProps) {
  return (
    <div
      className="bg-[var(--dark-clr)] flex flex-col w-full h-64 md:h-80 items-start justify-between
                    rounded-xl border-2 border-[var(--border-clr)] overflow-hidden"
    >
      <Link
        to={params.link}
        className="flex flex-col items-start text-left h-full w-full"
      >
        <div
          className="decoration text-white p-4 lg:p-6 text-[150px]
        lg:text-[100px] leading-[80%] font-black uppercase h-full flex items-end w-full
        break-all"
        >
          {params.decoration}
        </div>
      </Link>
      <div className="flex flex-col gap-2 items-start text-left p-4 lg:p-6">
        <p className="uppercase font-semibold">{params.heading}</p>
        <p className="text-xs">{params.content}</p>
      </div>
    </div>
  );
}
