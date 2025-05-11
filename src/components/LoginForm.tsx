import { FormEvent, ChangeEventHandler, useState, useRef } from "react";

import Input from "./ui/Input";
import Button from "./ui/Button";
import InputError from "./ui/InputError";

import {
  LoginErrors,
  LoginUserDataTypes,
} from "../interfaces/loginContentTypes";

import hiddenPassword from "../assets/icons/hidden-password.svg";
import shownPassword from "../assets/icons/shown-password.svg";

import { changePasswordVisibility } from "../methods/changePasswordVisibility";
import { useTranslation } from "react-i18next";

interface LoginFormProps {
  params: {
    inputsData: LoginUserDataTypes;
    handleLogIn: (e: FormEvent) => Promise<void>;
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    loginErrors: LoginErrors;
  };
}

export default function LoginForm({ params }: LoginFormProps) {
  const { t } = useTranslation();

  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);

  return (
    <form className="w-full md:w-[60%] lg:w-[80%] flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-[var(--input-text-clr)]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <Input
            params={{
              id: "email-address",
              value: params.inputsData.email,
              ariaLabel: "Email address",
              type: "text",
              inputName: "email",
              functionName: params.handleChange,
              placeholderText: "address@email.com",
              inputClassName: "pl-10",
              isRequired: false,
              error: params.loginErrors.email,
            }}
          />
        </div>
        {params.loginErrors.email && (
          <InputError message={params.loginErrors.email} />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-5 items-center w-full">
          <Input
            params={{
              id: "password",
              value: params.inputsData.password,
              ariaLabel: "Password",
              type: "password",
              placeholderText: t("account:login.form.password"),
              inputName: "password",
              functionName: params.handleChange,
              isRequired: false,
              ref: passwordInputRef,
              error: params.loginErrors.password,
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
            className="cursor-pointer h-5 w-auto invert-[1]"
          />
        </div>
        {params.loginErrors.password && (
          <InputError message={params.loginErrors.password} />
        )}
      </div>

      <Button
        params={{
          content: t("account:login.button"),
          onClickFunction: params.handleLogIn,
          className: "btn-primary mx-auto mt-6",
        }}
      />
    </form>
  );
}
