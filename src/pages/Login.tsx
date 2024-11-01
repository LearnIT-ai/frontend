import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import LoginForm from "../components/ui/LoginForm";

import { LoginUserDataTypes } from "../interfaces/loginContentTypes";

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
    <div className="flex flex-col md:flex-row h-[calc(100vh-var(--navbar-height))] mt-[var(--navbar-height)] justify-center">
      <div className="hidden lg:flex flex-[1.5] w-full h-[calc(100vh-80px)]">
        <div className="w-full h-full bg-[var(--primary-clr)] "></div>
      </div>
      <div
        className="flex flex-1 flex-col gap-10 justify-center items-center w-full
                  px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]"
      >
        <h1 className="text-4xl">Увійти</h1>
        <LoginForm
          params={{
            inputsData: inputsData,
            handleLogIn: handleLogIn,
            handleChange: handleInputChange,
          }}
        />
        <p className="text-[var(--input-text-clr)]">
          Не маєте створеного профілю? <span> </span>
          <Link to="/signup" className="underline">
            <b>Зареєструйтеся</b>
          </Link>
        </p>
      </div>
    </div>
  );
}
