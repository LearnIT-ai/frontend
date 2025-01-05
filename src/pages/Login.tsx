import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { motion } from "motion/react";

import LoginForm from "../components/LoginForm";

import { LoginUserDataTypes } from "../interfaces/loginContentTypes";

import bot from "../assets/images/bot.png";

export default function Login() {
  const navigate = useNavigate();

  const url = "http://localhost:8080/";

  const [inputsData, setInputsData] = useState<LoginUserDataTypes>({
    email: "",
    password: "",
  });

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
        <h1 className="text-4xl">Log In</h1>
        <LoginForm
          params={{
            inputsData: inputsData,
            handleLogIn: handleLogIn,
            handleChange: handleInputChange,
          }}
        />
        <p className="text-[var(--input-text-clr)]">
          Don't have an account? <span> </span>
          <Link to="/signup" className="underline">
            <b>Sign Up</b>
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
