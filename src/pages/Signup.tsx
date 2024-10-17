import { Link } from "react-router-dom";
import { useState, useEffect, useRef, FormEvent } from "react";

import LabeledInput from "../components/ui/LabeledInput";
import LabeledSelect from "../components/ui/LabeledSelect";
import Button from "../components/ui/Button";

import hiddenPassword from "../assets/icons/hidden-password.svg";
import shownPassword from "../assets/icons/shown-password.svg";

import axios from "axios";

import { changePasswordVisibility } from "../functions/changePassword";

import { countries } from "../lib/counties";
import { cities } from "../lib/cities";
import { roles } from "../lib/roles";

export default function Signup() {
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

  const url = "http://localhost:8080/";

  interface SignUpUserDataTypes {
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    profileType: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  const [inputsData, setInputsData] = useState<SignUpUserDataTypes>({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    profileType: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordVisibility, setPasswordVisibility] = useState<Boolean>(false);

  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setInputsData((data) => ({ ...data, [name]: value }));
  };

  useEffect(() => {
    console.log("State updated:", inputsData);
  }, [inputsData]);

  const validatePassword = () => {
    if (inputsData.confirmPassword !== inputsData.password) {
      setPasswordError(true);
      return passwordError;
    } else return passwordError;
  };

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    if (validatePassword()) {
      alert("The passwords do not match!");
      return;
    }

    axios
      .post(`${url}`, {
        firstName: inputsData.firstName,
        lastName: inputsData.lastName,
        country: inputsData.country,
        city: inputsData.city,
        profileType: inputsData.profileType,
        email: inputsData.email,
        password: inputsData.password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full h-screen">
      <h1 className="text-4xl">Sign up page</h1>
      <form className="sm:w-[60%] md:w-[40%] lg:w-[20%]">
        <div className="flex flex-row gap-5">
          <LabeledInput
            labelParams={{
              content: "First Name",
            }}
            inputParams={{
              id: "first-name",
              value: inputsData.firstName,
              type: "text",
              inputName: "firstName",
              functionName: handleChange,
              placeholderText: "John",
              isRequired: true,
            }}
          />
          <LabeledInput
            labelParams={{
              content: "Last Name",
            }}
            inputParams={{
              id: "last-name",
              value: inputsData.lastName,
              type: "text",
              inputName: "lastName",
              functionName: handleChange,
              placeholderText: "Doe",
              isRequired: true,
            }}
          />
        </div>

        <LabeledSelect
          labelParams={{
            content: "Select your city",
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
            content: "Select profile type",
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
              content: "Your email",
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

        <div className="flex flex-row gap-5 items-center">
          <LabeledInput
            labelParams={{
              content: "Password",
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
              content: "Confirm password",
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
            content: "Submit",
            onClickFunction: handleSignUp,
          }}
        />
      </form>
      <p>
        Already have an account?
        <Link to="/login">
          <b> Log in</b>
        </Link>
      </p>
    </div>
  );
}
