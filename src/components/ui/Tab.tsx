import { MouseEventHandler } from "react";

interface TabProps {
  params: {
    content: string;
    className?: string;
    isActive: boolean;
    onClickFunction: MouseEventHandler<HTMLDivElement>;
  };
}

export default function Tab({ params }: TabProps) {
  return (
    <div
      onClick={params.onClickFunction}
      className={`font-semibold border-b-2 ${
        params.isActive
          ? "border-b-[var(--primary-clr)]"
          : "border-b-[var(--border-clr)]"
      }  hover:border-b-white hover:bg-[var(--navbar-clr)] px-10 py-5 cursor-pointer`}
    >
      {params.content}
    </div>
  );
}
