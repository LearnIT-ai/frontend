import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, FormEvent } from "react";
import axios from "axios";

import LabeledInput from "../components/ui/LabeledInput";
import LabeledSelect from "../components/ui/LabeledSelect";
import Button from "../components/ui/Button";

import hiddenPassword from "../assets/icons/hidden-password.svg";
import shownPassword from "../assets/icons/shown-password.svg";

import { SignUpUserDataTypes } from "../interfaces/signupContentType";

import { changePasswordVisibility } from "../methods/changePasswordVisibility";
import { inputsValidation } from "../methods/inputsValidation";
import { validateData } from "../methods/inputsValidation";

import { cities } from "../lib/cities";
import { roles } from "../lib/roles";

export default function Signup() {
  const navigate = useNavigate();

  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

  const url = "http://localhost:8080/";

  const [passwordVisibility, setPasswordVisibility] = useState<Boolean>(false);

  const [inputsData, setInputsData] = useState<SignUpUserDataTypes>({
    lastName: "",
    firstName: "",
    fatherName: "",
    city: "",
    profileType: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    inputsValidation(name, value, setInputsData);
  };

  useEffect(() => {
    console.log("State updated:", inputsData);
  }, [inputsData]);

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    const error = validateData(inputsData);
    if (error) {
      alert(error);
    } else {
      axios
        .post(`${url}`, {
          fullName:
            inputsData.lastName +
            " " +
            inputsData.firstName +
            " " +
            inputsData.fatherName,
          city: inputsData.city,
          profileType: inputsData.profileType,
          email: inputsData.email,
          password: inputsData.password,
        })
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((e) => {
          console.error(e.message);
        });
    }
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full h-screen">
      <h1 className="text-4xl">Реєстрація</h1>
      <form className="sm:w-[60%] md:w-[40%] lg:w-[20%]">
        <LabeledInput
          labelParams={{
            content: "Прізвище",
          }}
          inputParams={{
            id: "last-name",
            value: inputsData.lastName,
            type: "text",
            inputName: "lastName",
            functionName: handleChange,
            isRequired: true,
          }}
        />
        <LabeledInput
          labelParams={{
            content: "Ім'я",
          }}
          inputParams={{
            id: "first-name",
            value: inputsData.firstName,
            type: "text",
            inputName: "firstName",
            functionName: handleChange,
            isRequired: true,
          }}
        />
        <LabeledInput
          labelParams={{
            content: "По батькові",
          }}
          inputParams={{
            id: "father-name",
            value: inputsData.fatherName,
            type: "text",
            inputName: "fatherName",
            functionName: handleChange,
            isRequired: true,
          }}
        />

        <div className="flex flex-row gap-5">
          <LabeledSelect
            labelParams={{
              content: "Оберіть місто",
            }}
            selectParams={{
              id: "cities",
              value: inputsData.city,
              selectName: "city",
              functionName: handleChange,
              isRequired: true,
              optionsContent: cities,
            }}
          />
          <LabeledSelect
            labelParams={{
              content: "Тип профілю",
            }}
            selectParams={{
              id: "roles",
              value: inputsData.profileType,
              selectName: "profileType",
              functionName: handleChange,
              isRequired: true,
              optionsContent: roles,
            }}
          />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pt-6 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <LabeledInput
            labelParams={{
              content: "Електронна пошта",
            }}
            inputParams={{
              id: "email-address",
              value: inputsData.email,
              type: "text",
              inputName: "email",
              functionName: handleChange,
              placeholderText: "address@email.com",
              inputClassName: "pl-10",
              isRequired: true,
            }}
          />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pt-6 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
          </div>
          <LabeledInput
            labelParams={{
              content: "Номер телефону",
            }}
            inputParams={{
              id: "phone-number",
              value: inputsData.phoneNumber,
              type: "text",
              inputName: "phoneNumber",
              functionName: handleChange,
              placeholderText: "+38-ХХХ-ХХХ-ХХХХ",
              inputClassName: "pl-10",
              isRequired: true,
              length: 16,
            }}
          />
        </div>

        <div className="flex flex-row gap-5 items-center">
          <LabeledInput
            labelParams={{
              content: "Пароль",
            }}
            inputParams={{
              id: "password",
              value: inputsData.password,
              type: "password",
              inputName: "password",
              functionName: handleChange,
              isRequired: true,
              ref: passwordInputRef,
            }}
          />
          <LabeledInput
            labelParams={{
              content: "Підтвердіть пароль",
            }}
            inputParams={{
              id: "confirm-password",
              value: inputsData.confirmPassword,
              type: "password",
              inputName: "confirmPassword",
              functionName: handleChange,
              isRequired: true,
              ref: confirmPasswordInputRef,
            }}
          />
          <img
            src={passwordVisibility ? shownPassword : hiddenPassword}
            onClick={() =>
              changePasswordVisibility(
                [passwordInputRef, confirmPasswordInputRef],
                [passwordVisibility, setPasswordVisibility]
              )
            }
            alt="Show/hide password"
            className="cursor-pointer h-5 w-auto"
          />
        </div>
        <Button
          params={{
            content: "Створити профіль",
            onClickFunction: handleSignUp,
          }}
        />
      </form>
      <p>
        Вже маєте створений профіль?
        <Link to="/login">
          <b> Увійти</b>
        </Link>
      </p>
    </div>
  );
}
