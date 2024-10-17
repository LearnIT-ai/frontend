import { ChangeEvent } from "react";
import { selectContentType } from "../../lib/selectContentType";

interface LabeledSelectProps {
  labelParams: {
    labelClassName?: string;
    content: string;
  };

  selectParams: {
    id: string;
    value: string;
    selectName?: string;
    functionName: (e: ChangeEvent<HTMLSelectElement>) => void;
    selectClassName?: string;
    isRequired: boolean;
    optionsContent: selectContentType[];
  };
}

export default function LabeledSelect({
  labelParams,
  selectParams,
}: LabeledSelectProps) {
  const { labelClassName, content } = labelParams;
  const {
    id,
    value,
    selectName,
    functionName,
    selectClassName,
    isRequired,
    optionsContent,
  } = selectParams;

  return (
    <div className="mb-5 text-left">
      <label
        htmlFor={id}
        className={`${labelClassName}block mb-2 text-sm font-medium text-gray-900`}
      >
        {content}
      </label>
      <select
        id={id}
        value={value}
        name={selectName}
        onChange={functionName}
        className={`${selectClassName} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
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
