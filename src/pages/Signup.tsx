import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, FormEvent } from "react";
import axios from "axios";
import { motion } from "motion/react";

import SocialAppButton from "../components/ui/SocialAppButton";

import google from "../assets/icons/google_login.svg";
import facebook from "../assets/icons/facebook_login.svg";
import instagram from "../assets/icons/instagram_login.svg";

import SignUpForm from "../components/SignUpForm";

import { SignUpUserDataTypes } from "../interfaces/signupContentType";

import { inputsValidation } from "../methods/inputsValidation";
import { validateData } from "../methods/inputsValidation";

import bot from "../assets/images/baby_bot.png";
import triangle from "../assets/icons/polygon.svg";

export default function Signup() {
  const navigate = useNavigate();

  const url = import.meta.env.URL;

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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row h-[calc(100vh-var(--navbar-height))] mb-[var(--navbar-height)] md:mb-0 justify-center"
    >
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

        <div className="flex flex-row gap-6 mx-auto mt-4">
          <SocialAppButton params={{ content: google }} />
          <SocialAppButton params={{ content: facebook }} />
          <SocialAppButton params={{ content: instagram }} />
        </div>
        <p className="text-[var(--input-text-clr)]">
          Already have an account? <span> </span>
          <Link to="/login" className="underline">
            <b>Log In</b>
          </Link>
        </p>
      </div>
      <div className="hidden lg:flex flex-1 w-full h-[calc(100vh-80px)] p-2 pb-4">
        <div
          className="relative flex items-center w-full h-full bg-[var(--navbar-clr)]
        rounded-xl overflow-hidden border-2 border-[var(--border-clr)]"
        >
          <p
            className="absolute xl:text-[110px] text-start lg:text-[110px] leading-[80%] xl:leading-[90%] font-black
           text-[var(--bg-clr)] uppercase top-5 left-5 z-0 break-words"
          >
            Learn.it Learn.it Learn.it Learn.it Learn.it Learn.it Learn.it
            Learn.it Learn.it Learn.it Learn.it
          </p>
          <div className="relative flex justify-center xl:justify-end items-center w-full">
            <div className="absolute flex-row items-center z-20 top-[28%] left-[8%] hidden xl:flex">
              <div
                className="bg-white text-black 
                          p-4 rounded-xl uppercase font-bold text-sm"
              >
                Let's study together!
              </div>
              <img
                src={triangle}
                className="absolute h-6 w-6 scale-x-[-1] rotate-90 right-[-20px]"
              ></img>
            </div>
            <img
              src={bot}
              alt="Bot image"
              className="z-10 h-auto xl:w-[60%] lg:w-[60%] xl:mr-5"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
