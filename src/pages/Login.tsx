import { useNavigate, Link } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { motion } from "motion/react";
import axios from "axios";

import google from "../assets/icons/google_login.svg";
import facebook from "../assets/icons/facebook_login.svg";
import instagram from "../assets/icons/instagram_login.svg";
import SocialAppButton from "../components/ui/SocialAppButton";
import LoginForm from "../components/LoginForm";
import Popup from "../components/ui/Popup";

import {
  LoginErrors,
  LoginUserDataTypes,
} from "../interfaces/loginContentTypes";

import { validateLoginData } from "../methods/inputsValidation";

import bot from "../assets/images/bot.png";
import { useTranslation, Trans } from "react-i18next";

export default function Login() {
  const navigate = useNavigate();

  const url = import.meta.env.VITE_LOGIN_URL;
  const { t } = useTranslation();

  const [inputsData, setInputsData] = useState<LoginUserDataTypes>({
    email: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState<LoginErrors>({});
  const [loginError, setLoginError] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputsData((data) => ({ ...data, [name]: value }));
    setValidationErrors((data) => ({ ...data, [name]: "" }));
  };

  const handleLogIn = async (e: FormEvent) => {
    e.preventDefault();
    const errors = validateLoginData(inputsData, t);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    await axios
      .post(url, {
        email: inputsData.email,
        password: inputsData.password,
      })
      .then((res) => {
        document.cookie = `token=${JSON.stringify(res.data.token)}; path=/`;
        navigate("/");
      })
      .catch((e) => {
        setLoginError(e.message);
        setShowPopup(true);
      });
  };

  useEffect(() => {
    const topContainer = document.getElementById("app-container");

    if (topContainer) {
      if (showPopup) {
        topContainer.style.height = "100vh";
      } else {
        topContainer.style.height = "auto";
      }
    }

    return () => {
      if (topContainer) topContainer.style.height = "auto";
    };
  }, [showPopup]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row h-[calc(100vh-var(--navbar-height))] justify-center"
    >
      <div className="hidden lg:flex flex-[1.5] w-full h-[calc(100vh-80px)] p-2 pb-4">
        <div
          className="relative flex justify-center items-end w-full h-full bg-[var(--navbar-clr)] 
        rounded-xl overflow-hidden border-2 border-[var(--border-clr)]"
        >
          <p
            className="absolute xl:text-[150px] text-start lg:text-[110px] leading-[80%] xl:leading-[90%] font-black
           text-[var(--bg-clr)] uppercase top-5 left-5 z-0 break-words"
          >
            Learn.it Learn.it Learn.it Learn.it Learn.it Learn.it Learn.it
            Learn.it Learn.it Learn.it Learn.it
          </p>
          <img
            src={bot}
            alt="Bot image"
            className="z-10 h-auto xl:w-[75%] lg:w-[100%]"
          />
        </div>
      </div>
      <div
        className="flex flex-1 flex-col gap-10 justify-center items-center w-full
                  px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]"
      >
        {showPopup && (
          <Popup
            params={{
              type: "error",
              content: loginError,
              onClickFunction: () => setShowPopup(false),
            }}
          />
        )}
        <h1 className="text-4xl">{t("account:login.title")}</h1>
        <LoginForm
          params={{
            inputsData: inputsData,
            handleLogIn: handleLogIn,
            handleChange: handleInputChange,
            loginErrors: validationErrors,
          }}
        />
        <p className="text-[var(--input-text-clr)]">
          <Trans
            i18nKey={t("account:login.link")}
            values={{
              channel: "RoadsideCoder",
            }}
            components={{
              1: <Link to="/signup" className="underline" />,
              2: <b />,
            }}
          />
        </p>
        <div className="flex flex-row gap-6 mx-auto mt-4">
          <SocialAppButton params={{ content: google }} />
          <SocialAppButton params={{ content: facebook }} />
          <SocialAppButton params={{ content: instagram }} />
        </div>
      </div>
    </motion.div>
  );
}
