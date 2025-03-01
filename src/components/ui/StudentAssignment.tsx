import { useNavigate } from "react-router-dom";
import Button from "./Button";

interface StudentAssignmentTypes {
  params: {
    content: string;
    date: string;
    state?: string;
  };
}

export default function StudentAssignment({ params }: StudentAssignmentTypes) {
  const navigate = useNavigate();
  return (
    <li
      className="w-full rounded-xl border-2 border-[var(--border-clr)] 
                  bg-[var(--navbar-clr)] flex flex-row p-4 justify-between items-center"
    >
      <p className="flex-1">{params.content}</p>
      <p className="flex flex-1 justify-center">{params.date}</p>
      <div className="flex flex-1 justify-end">
        <Button
          params={{
            content: "Grade",
            className: "btn-primary",
            onClickFunction: () => navigate(params.content),
          }}
        />
      </div>
    </li>
  );
}
