import { inputsValidation } from "./inputsValidation";

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  inputsValidation(name, value, setInputsData);
};
