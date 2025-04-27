import { FormEvent, ChangeEventHandler, useState, useRef } from "react";

import { useTranslation } from "react-i18next";

import Input from "./ui/Input";
import Select from "./ui/Select";
import Button from "./ui/Button";

import {
  SignUpErrors,
  SignUpUserDataTypes,
} from "../interfaces/signupContentType";

import hiddenPassword from "../assets/icons/hidden-password.svg";
import shownPassword from "../assets/icons/shown-password.svg";

import { changePasswordVisibility } from "../methods/changePasswordVisibility";

import { cities } from "../lib/cities";
import { roles } from "../lib/roles";
import InputError from "./ui/InputError";

interface SignUpFormProps {
  params: {
    inputsData: SignUpUserDataTypes;
    handleSignUp: (e: FormEvent) => Promise<void>;
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    signupErrors: SignUpErrors;
  };
}

export default function SignUpForm({ params }: SignUpFormProps) {
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  const [isFirstPage, setIsFirstPage] = useState<boolean>(true);

  const { t } = useTranslation();

  return (
    <form className="w-full md:w-[60%] lg:w-[80%] flex flex-col gap-4">
      <div className={`${isFirstPage ? "flex" : "hidden"} flex-col gap-4`}>
        <div className="flex flex-col gap-2">
          <Input
            params={{
              id: "last-name",
              value: params.inputsData.lastName,
              ariaLabel: "Last Name",
              type: "text",
              inputName: "lastName",
              placeholderText: t("account:signup.form.lastName"),
              functionName: params.handleChange,
              isRequired: false,
              error: params.signupErrors.lastName,
            }}
          />
          {params.signupErrors.lastName && (
            <InputError message={params.signupErrors.lastName} />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Input
            params={{
              id: "first-name",
              value: params.inputsData.firstName,
              ariaLabel: "First Name",
              type: "text",
              inputName: "firstName",
              placeholderText: t("account:signup.form.firstName"),
              functionName: params.handleChange,
              isRequired: false,
              error: params.signupErrors.firstName,
            }}
          />
          {params.signupErrors.firstName && (
            <InputError message={params.signupErrors.firstName} />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Input
            params={{
              id: "father-name",
              value: params.inputsData.fatherName,
              ariaLabel: "Father Name",
              type: "text",
              inputName: "fatherName",
              placeholderText: t("account:signup.form.fatherName"),
              functionName: params.handleChange,
              isRequired: false,
              error: params.signupErrors.fatherName,
            }}
          />
          {params.signupErrors.fatherName && (
            <InputError message={params.signupErrors.fatherName} />
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex flex-col gap-2 w-full">
            <Select
              params={{
                id: "cities",
                value: params.inputsData.city,
                ariaLabel: "Cities",
                selectName: "city",
                functionName: params.handleChange,
                isRequired: false,
                optionsContent: cities,
                error: params.signupErrors.city,
              }}
            />
            {params.signupErrors.city && (
              <InputError message={params.signupErrors.city} />
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Select
              params={{
                id: "roles",
                value: params.inputsData.profileType,
                ariaLabel: "Profile roles",
                selectName: "profileType",
                functionName: params.handleChange,
                isRequired: false,
                optionsContent: roles,
                error: params.signupErrors.profileType,
              }}
            />
            {params.signupErrors.profileType && (
              <InputError message={params.signupErrors.profileType} />
            )}
          </div>
        </div>
        <Button
          params={{
            content: t("account:signup.nextButton"),
            onClickFunction: () => setIsFirstPage(false),
            className: "btn-primary mx-auto mt-6",
          }}
        />
      </div>

      <div className={`${isFirstPage ? "hidden" : "flex"} flex-col gap-4`}>
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
                ariaLabel: "Email",
                type: "text",
                inputName: "email",
                functionName: params.handleChange,
                placeholderText: "address@email.com",
                inputClassName: "pl-10",
                isRequired: false,
                error: params.signupErrors.email,
              }}
            />
          </div>
          {params.signupErrors.email && (
            <InputError message={params.signupErrors.email} />
          )}
        </div>
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
                <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
            </div>
            <Input
              params={{
                id: "phone-number",
                value: params.inputsData.phoneNumber,
                ariaLabel: "Phone number",
                type: "text",
                inputName: "phoneNumber",
                functionName: params.handleChange,
                placeholderText: "+38-ХХХ-ХХХ-ХХХХ",
                inputClassName: "pl-10",
                isRequired: false,
                length: 16,
                error: params.signupErrors.phoneNumber,
              }}
            />
          </div>
          {params.signupErrors.phoneNumber && (
            <InputError message={params.signupErrors.phoneNumber} />
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row md:flex-row gap-3 items-center">
            <div className="flex flex-col md:flex-row gap-3 w-full">
              <Input
                params={{
                  id: "password",
                  value: params.inputsData.password,
                  ariaLabel: "Password",
                  type: "password",
                  inputName: "password",
                  placeholderText: t("account:signup.form.password"),
                  functionName: params.handleChange,
                  isRequired: false,
                  ref: passwordInputRef,
                  error: params.signupErrors.password,
                }}
              />

              <Input
                params={{
                  id: "confirm-password",
                  value: params.inputsData.confirmPassword,
                  ariaLabel: "Confirm password",
                  type: "password",
                  inputName: "confirmPassword",
                  placeholderText: t("account:signup.form.confirmPassword"),
                  functionName: params.handleChange,
                  isRequired: false,
                  ref: confirmPasswordInputRef,
                  error: params.signupErrors.confirmPassword,
                }}
              />
            </div>
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
          {(params.signupErrors.password ||
            params.signupErrors.confirmPassword ||
            params.signupErrors.additionalError) && (
            <InputError
              message={
                params.signupErrors.password ??
                params.signupErrors.confirmPassword ??
                params.signupErrors.additionalError ??
                ""
              }
            />
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-6 mx-auto">
          <Button
            params={{
              content: t("account:signup.backButton"),
              onClickFunction: () => setIsFirstPage(true),
              className: "btn-secondary",
            }}
          />
          <Button
            params={{
              content: t("account:signup.button"),
              onClickFunction: params.handleSignUp,
              className: "btn-primary",
            }}
          />
        </div>
      </div>
    </form>
  );
}
