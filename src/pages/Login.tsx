import { useNavigate, Link } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";

import LabeledInput from "../components/ui/LabeledInput";
import Button from "../components/ui/Button";

import hiddenPassword from "../assets/icons/hidden-password.svg";
import shownPassword from "../assets/icons/shown-password.svg";

import { LoginUserDataTypes } from "../interfaces/loginContentTypes";

import { changePasswordVisibility } from "../methods/changePasswordVisibility";

export default function Login() {
  const navigate = useNavigate();

  const passwordInputRef = useRef<HTMLInputElement>(null);

  const url = "http://localhost:8080/";

  const [inputsData, setInputsData] = useState<LoginUserDataTypes>({
    email: "",
    password: "",
  });

  const [passwordVisibility, setPasswordVisibility] = useState<Boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputsData((data) => ({ ...data, [name]: value }));
    console.log(inputsData);
  };

  const handleLogIn = async () => {
    await axios
      .post(`${url}`, {
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
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen w-full">
      <h1 className="text-4xl">Увійти</h1>
      <form className="sm:w-[60%] md:w-[40%] lg:w-[20%]">
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
              functionName: handleInputChange,
              placeholderText: "address@email.com",
              inputClassName: "pl-10",
              isRequired: true,
            }}
          />
        </div>
        <div className="flex flex-row gap-5 items-center w-full">
          <LabeledInput
            labelParams={{
              content: "Пароль",
            }}
            inputParams={{
              id: "password",
              value: inputsData.password,
              type: "password",
              inputName: "password",
              functionName: handleInputChange,
              isRequired: true,
              ref: passwordInputRef,
            }}
          />
          <img
            src={passwordVisibility ? shownPassword : hiddenPassword}
            onClick={() =>
              changePasswordVisibility(
                [passwordInputRef],
                [passwordVisibility, setPasswordVisibility]
              )
            }
            alt="Show/hide password"
            className="cursor-pointer h-5 w-auto"
          />
        </div>
        <Button
          params={{
            content: "Увійти",
            onClickFunction: handleLogIn,
          }}
        />
      </form>
      <p>
        Не маєте створеного профілю?
        <Link to="/signup">
          <b> Зареєструйтеся</b>
        </Link>
      </p>
    </div>
  );
}
