import { FormEvent, ChangeEventHandler, useState, useRef } from "react";

import Input from "./ui/Input";
import Select from "./ui/Select";
import Button from "./ui/Button";

import { SignUpUserDataTypes } from "../interfaces/signupContentType";

import hiddenPassword from "../assets/icons/hidden-password.svg";
import shownPassword from "../assets/icons/shown-password.svg";

import { changePasswordVisibility } from "../methods/changePasswordVisibility";

import { cities } from "../lib/cities";
import { roles } from "../lib/roles";

interface SignUpFormProps {
  params: {
    inputsData: SignUpUserDataTypes;
    handleSignUp: (e: FormEvent) => Promise<void>;
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  };
}

export default function SignUpForm({ params }: SignUpFormProps) {
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  return (
    <form className="w-full md:w-[60%] lg:w-full flex flex-col gap-4">
      <Input
        params={{
          id: "last-name",
          value: params.inputsData.lastName,
          type: "text",
          inputName: "lastName",
          placeholderText: "Last Name",
          functionName: params.handleChange,
          isRequired: true,
        }}
      />
      <Input
        params={{
          id: "first-name",
          value: params.inputsData.firstName,
          type: "text",
          inputName: "firstName",
          placeholderText: "First Name",
          functionName: params.handleChange,
          isRequired: true,
        }}
      />
      <Input
        params={{
          id: "father-name",
          value: params.inputsData.fatherName,
          type: "text",
          inputName: "fatherName",
          placeholderText: "Father Name",
          functionName: params.handleChange,
          isRequired: true,
        }}
      />

      <div className="flex flex-col md:flex-row gap-3">
        <Select
          params={{
            id: "cities",
            value: params.inputsData.city,
            selectName: "city",
            functionName: params.handleChange,
            isRequired: true,
            optionsContent: cities,
          }}
        />
        <Select
          params={{
            id: "roles",
            value: params.inputsData.profileType,
            selectName: "profileType",
            functionName: params.handleChange,
            isRequired: true,
            optionsContent: roles,
          }}
        />
      </div>
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
            type: "text",
            inputName: "email",
            functionName: params.handleChange,
            placeholderText: "address@email.com",
            inputClassName: "pl-10",
            isRequired: true,
          }}
        />
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-[var(--input-text-clr)]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
          </svg>
        </div>
        <Input
          params={{
            id: "phone-number",
            value: params.inputsData.phoneNumber,
            type: "text",
            inputName: "phoneNumber",
            functionName: params.handleChange,
            placeholderText: "+38-ХХХ-ХХХ-ХХХХ",
            inputClassName: "pl-10",
            isRequired: true,
            length: 16,
          }}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-3 items-center">
        <Input
          params={{
            id: "password",
            value: params.inputsData.password,
            type: "password",
            inputName: "password",
            placeholderText: "Password",
            functionName: params.handleChange,
            isRequired: true,
            ref: passwordInputRef,
          }}
        />
        <Input
          params={{
            id: "confirm-password",
            value: params.inputsData.confirmPassword,
            type: "password",
            inputName: "confirmPassword",
            placeholderText: "Confirm Password",
            functionName: params.handleChange,
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
          className="cursor-pointer h-5 w-auto invert-[1]"
        />
      </div>
      <Button
        params={{
          content: "Sign Up",
          onClickFunction: params.handleSignUp,
          className: "btn-primary mx-auto mt-6",
        }}
      />
    </form>
  );
}
