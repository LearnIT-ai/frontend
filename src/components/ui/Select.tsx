import { ChangeEvent, useState } from "react";
import { selectContentType } from "../../interfaces/selectContentType";

interface SelectProps {
  params: {
    id: string;
    value: string;
    ariaLabel: string;
    selectName?: string;
    functionName: (e: ChangeEvent<HTMLSelectElement>) => void;
    selectClassName?: string;
    isRequired: boolean;
    optionsContent: selectContentType[];
    error?: string;
  };
}

export default function Select({ params }: SelectProps) {
  const {
    id,
    value,
    ariaLabel,
    selectName,
    functionName,
    selectClassName,
    isRequired,
    optionsContent,
    error,
  } = params;

  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => setIsOpen(true);
  const handleBlur = () => setIsOpen(false);

  return (
    <div className="relative flex items-center justify-end w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className={`bi bi-caret-down-fill 
                  text-[var(--input-text-clr)] absolute mr-2.5 duration-300
                  ${isOpen ? "rotate-180 text-[var(--primary-clr)]" : ""}`}
        viewBox="0 0 16 16"
      >
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
      </svg>
      <select
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label={ariaLabel}
        id={id}
        value={value}
        name={selectName}
        onChange={functionName}
        className={`${selectClassName} bg-[var(--input-clr)] border-2 border-[var(--bg-clr)] outline-none focus:border-[var(--input-focus-clr)]
                text-[var(--input-text-clr)] text-sm rounded-2xl block w-full p-3 duration-300
                ${error ? "border-2 border-[var(--error-clr)]" : ""}`}
        required={isRequired}
      >
        <option value="">None</option>
        {optionsContent.map((option) => (
          <option key={option.id} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}
