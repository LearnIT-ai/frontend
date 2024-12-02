import list from "../../assets/icons/list.svg";

import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import NavbarLink from "./NavbarLink";

import logo from "../../assets/logo_horizontal.svg";
import { useState } from "react";

export default function NavigationBar() {
  const navigate = useNavigate();

  const [sidebarVisibility, setSidebarVisibility] = useState<boolean>(false);

  return (
    <div
      className="h-[var(--navbar-height)] flex justify-center w-screen fixed 
                    backdrop-blur-md bg-[var(--navbar-clr)] top-0 left-0 text-white 
                    z-50 border-b-2 border-[var(--border-clr)] uppercase"
    >
      <div
        className="h-[var(--navbar-height)] flex justify-center items-center w-full 
                    px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]"
      >
        <div>
          <img
            src={list}
            className={`${
              sidebarVisibility ? "rotate-90" : ""
            } invert-[1] w-8 h-8 cursor-pointer`}
            onClick={() => setSidebarVisibility(!sidebarVisibility)}
          ></img>
        </div>
        <div
          className={`${
            sidebarVisibility
              ? "translate-x-0"
              : "translate-x-[-24rem] lg:translate-x-[-32rem]"
          } 
          duration-500 ease-in-out w-[24rem] lg:w-[32rem] flex absolute top-0 left-0 mt-[var(--navbar-height)] 
          bg-[var(--dark-clr)] pl-[var(--sm-px)] md:pl-[var(--md-px)] lg:pl-[var(--lg-px)]
          border-r-[var(--border-clr)] border-r-2 h-[calc(100vh-var(--navbar-height))]`}
        >
          <ul
            className={`flex flex-col gap-6 flex-2 text-left justify-start text-xs 
              font-medium mt-6`}
          >
            <NavbarLink
              params={{
                content: "About Us",
                link: "/",
                onClick: () => setSidebarVisibility(false),
              }}
            />
            <NavbarLink
              params={{
                content: "Our Services",
                link: "/",
                onClick: () => setSidebarVisibility(false),
              }}
            />
            <NavbarLink
              params={{
                content: "Courses",
                link: "/courses",
                onClick: () => setSidebarVisibility(false),
              }}
            />
            <NavbarLink
              params={{
                content: "Contacts",
                link: "/",
                onClick: () => setSidebarVisibility(false),
              }}
            />
          </ul>
        </div>
        <div className="text-lg font-bold flex-1 justify-center hover:text-xl duration-300 ease-in-out">
          <Link to="/">
            <img className="h-12 w-auto mx-auto" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex flex-row flex-2 gap-4 justify-end">
          <Button
            params={{
              content: "Log In",
              className: "hidden md:block text-xs btn-secondary",
              onClickFunction: () => navigate("login"),
            }}
          />
          <Button
            params={{
              content: "Sign Up",
              className: "hidden md:block text-xs btn-primary",
              onClickFunction: () => navigate("signup"),
            }}
          />
        </div>
      </div>
    </div>
  );
}
