import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, FormEvent } from "react";
import axios from "axios";

import SignUpForm from "../components/SignUpForm";

import { SignUpUserDataTypes } from "../interfaces/signupContentType";

import { inputsValidation } from "../methods/inputsValidation";
import { validateData } from "../methods/inputsValidation";

export default function Signup() {
  const navigate = useNavigate();

  const url = "http://localhost:8080/";

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

  const handleInputChange = (
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
    <div className="flex flex-col md:flex-row h-[calc(100vh-var(--navbar-height))] mb-[var(--navbar-height)] md:mb-0 justify-center">
      <div
        className="flex flex-1 flex-col gap-10 justify-center items-center w-full
                  px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)] mt-[var(--navbar-height)]"
      >
        <h1 className="text-4xl">Sign Up</h1>
        <SignUpForm
          params={{
            inputsData: inputsData,
            handleSignUp: handleSignUp,
            handleChange: handleInputChange,
          }}
        />
        <p className="text-[var(--input-text-clr)]">
          Already have an account? <span> </span>
          <Link to="/login" className="underline">
            <b>Log In</b>
          </Link>
        </p>
        <p className="text-[var(--input-text-clr)]">
          By registering, you agree to the Terms of Use{" "}
          <span className="underline">Learn.it</span>
        </p>
      </div>
      <div className="hidden lg:flex flex-1 w-full h-[calc(100vh-80px)]">
        <div className="w-full h-full bg-[var(--primary-clr)] "></div>
      </div>
    </div>
  );
}
