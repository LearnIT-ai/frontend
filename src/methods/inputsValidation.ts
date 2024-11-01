import { SignUpUserDataTypes } from "../interfaces/signupContentType";

export const inputsValidation = (
  name: string,
  value: string,
  setInputsData: React.Dispatch<React.SetStateAction<SignUpUserDataTypes>>
) => {
  if (name === "lastName" || name === "firstName" || name === "fatherName") {
    const letters = value.replace(/[^а-яА-ЯіїєґІЇЄҐ]/g, "");
    const capitalized = letters.charAt(0).toUpperCase() + letters.slice(1);
    setInputsData((data) => ({ ...data, [name]: capitalized }));
  } else if (name === "phoneNumber") {
    value = value.replace(/[^\d]/g, "");

    if (value.length < 3) {
      value = "38";
    }
    if (value.length > 2) {
      value = value.slice(0, 2) + "-" + value.slice(2);
    }
    if (value.length > 6) {
      value = value.slice(0, 6) + "-" + value.slice(6);
    }
    if (value.length > 10) {
      value = value.slice(0, 10) + "-" + value.slice(10);
    }
    setInputsData((data) => ({ ...data, [name]: "+" + value }));
  } else {
    setInputsData((data) => ({ ...data, [name]: value }));
  }
};

export const validateData = (inputsData: SignUpUserDataTypes) => {
  if (inputsData.confirmPassword !== inputsData.password) {
    return "Паролі не збігаються!";
  }
  if (
    !inputsData.firstName ||
    !inputsData.lastName ||
    !inputsData.fatherName ||
    !inputsData.city ||
    !inputsData.profileType ||
    !inputsData.email ||
    !inputsData.phoneNumber
  ) {
    return "Заповніть усі поля!";
  }
};
