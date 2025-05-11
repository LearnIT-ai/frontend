import {
  SignUpErrors,
  SignUpUserDataTypes,
} from "../interfaces/signupContentType";

import {
  LoginErrors,
  LoginUserDataTypes,
} from "../interfaces/loginContentTypes";

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

const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const validateSignupData = (
  inputsData: SignUpUserDataTypes,
  t: (key: string) => string
): SignUpErrors => {
  const errors: SignUpErrors = {};
  if (inputsData.confirmPassword !== inputsData.password)
    errors.additionalError = t("errors:signup.additionalError");
  if (!inputsData.firstName) errors.firstName = t("errors:signup.firstName");
  if (!inputsData.lastName) errors.lastName = t("errors:signup.lastName");
  if (!inputsData.fatherName) errors.fatherName = t("errors:signup.fatherName");
  if (!inputsData.city) errors.city = t("errors:signup.city");
  if (!inputsData.profileType)
    errors.profileType = t("errors:signup.profileType");
  if (!inputsData.email) errors.email = t("errors:signup.email");
  if (inputsData.email && !validateEmail(inputsData.email))
    errors.email = t("errors:signup.invalidEmail");
  if (!inputsData.password) errors.password = t("errors:signup.password");
  if (!inputsData.confirmPassword)
    errors.confirmPassword = t("errors:signup.confirmPassword");
  if (!inputsData.phoneNumber)
    errors.phoneNumber = t("errors:signup.phoneNumber");

  return errors;
};

export const validateLoginData = (
  inputsData: LoginUserDataTypes,
  t: (key: string) => string
): LoginErrors => {
  const errors: LoginErrors = {};

  if (!inputsData.email) errors.email = t("errors:login.email");
  if (inputsData.email && !validateEmail(inputsData.email))
    errors.email = t("errors:login.invalidEmail");
  if (!inputsData.password) errors.password = t("errors:login.password");

  return errors;
};
