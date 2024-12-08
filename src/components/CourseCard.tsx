import { Link } from "react-router-dom";

interface CourseCardProps {
  params: {
    heading: string;
    semester: string;
    year?: string;
    decoration: string;
    link: string;
    className?: string;
  };
}

export default function CourseCard({ params }: CourseCardProps) {
  return (
    <div
      className="bg-[var(--dark-clr)] flex flex-col w-full h-full items-start justify-between
                    rounded-xl border-2 border-[var(--border-clr)] overflow-hidden"
    >
      <Link
        to={`/academic-years/${params.year}/${params.link}`}
        className="flex flex-col items-start text-left h-full w-full"
      >
        <div
          className="decoration text-white p-4 lg:p-6 text-[150px] md:text-[100px]
        lg:text-[70px] xl:text-[95px] leading-[80%] font-black uppercase h-48 flex items-end w-full
        break-all"
        >
          {params.decoration}
        </div>
      </Link>
      <div className="h-full flex flex-col gap-2 items-start justify-start text-left p-4 lg:p-6">
        <p className="uppercase font-semibold">{params.heading}</p>
        <p className="text-xs">{params.semester}</p>
      </div>
    </div>
  );
}
