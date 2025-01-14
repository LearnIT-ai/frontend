import { MouseEventHandler } from "react";

interface ProfileTabProps {
  params: {
    content: string;
    className?: string;
    isActive: boolean;
    onClickFunction: MouseEventHandler<HTMLDivElement>;
  };
}

export default function ProfileTab({ params }: ProfileTabProps) {
  return (
    <div
      onClick={params.onClickFunction}
      className={`font-semibold rounded-lg mr-4 uppercase text-sm transition-none
        ${params.isActive ? "bg-[var(--tab-clr)]" : ""}
        hover:bg-[var(--tab-hover-clr)] px-6 py-4 cursor-pointer`}
    >
      {params.content}
    </div>
  );
}
