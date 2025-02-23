interface SubmitAssignmentCardProps {
  params: {
    onClickFunction: () => void;
    pathPrimary: string;
    pathSecondary?: string;
    header: string;
    description: string;
  };
}

export default function SubmitAssignmentCard({
  params,
}: SubmitAssignmentCardProps) {
  return (
    <div
      className="w-full rounded-xl border-2 border-[var(--border-clr)] bg-[var(--navbar-clr)]
                          flex justify-center items-center flex-col p-10 lg:p-20 gap-6
                          hover:border-[var(--primary-clr)] hover:cursor-pointer hover:bg-[var(--dark-clr)]"
      onClick={params.onClickFunction}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-cloud-plus w-20 h-20"
          viewBox="0 0 16 16"
        >
          <path d={params.pathPrimary} />
          <path d={params.pathSecondary} />
        </svg>
      </div>
      <p className="text-xl font-semibold uppercase w-[100%] text-center">
        {params.header}
      </p>
      <p className="text-[var(--input-text-clr)] text-center text-sm">
        {params.description}
      </p>
    </div>
  );
}
