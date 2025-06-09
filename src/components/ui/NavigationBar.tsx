import list from "../../assets/icons/list.svg";

import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import NavbarLink from "./NavbarLink";

import bot from "../../assets/images/bot.png";

import { navLinkTypes } from "../../interfaces/navLinkTypes";

import { getToken } from "../../methods/getUserData";

import logo from "../../assets/logo_horizontal.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function NavigationBar() {
  const navigate = useNavigate();

  const [sidebarVisibility, setSidebarVisibility] = useState<boolean>(false);

  const token = getToken();

  const { i18n, t } = useTranslation();

  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }

  const navLinks: navLinkTypes[] = [
    { id: 0, content: t("common:navbarLinks.aboutUs"), link: "/about-us" },
    {
      id: 1,
      content: t("common:navbarLinks.documents"),
      link: "/academic-years",
    },
    {
      id: 2,
      content: t("common:navbarLinks.upload"),
      link: "/submit-assignment",
    },
    {
      id: 3,
      content: t("common:navbarLinks.assignment-feedback"),
      link: "/assignment-feedback",
    },
    {
      id: 4,
      content: t("common:navbarLinks.check-similarity"),
      link: "/check-similarity",
    },
    {
      id: 5,
      content: t("common:navbarLinks.chatbot"),
      link: "/chatbot",
    },
    { id: 6, content: t("common:navbarLinks.contacts"), link: "/contacts" },
  ];

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
        <div className="flex flex-1 gap-6 flew-row items-center">
          <img
            src={list}
            className={`${
              sidebarVisibility ? "rotate-90 filter-yellow" : ""
            } invert-[1] w-8 h-8 cursor-pointer`}
            onClick={() => setSidebarVisibility(!sidebarVisibility)}
          ></img>
          <div className="hidden md:flex gap-4 flew-row">
            <button
              onClick={() => changeLanguage("en")}
              className={`${
                i18n.language === "en"
                  ? "bg-[var(--yellow-clr)] text-black"
                  : "border-2 border-white text-white"
              } flex font-semibold justify-center items-center text-xs w-7 h-7 rounded-lg`}
            >
              en
            </button>
            <button
              onClick={() => changeLanguage("ua")}
              className={`${
                i18n.language === "ua"
                  ? "bg-[var(--yellow-clr)] text-black"
                  : "border-2 border-white text-white"
              } flex font-semibold justify-center items-center text-xs w-7 h-7 rounded-lg`}
            >
              ua
            </button>
          </div>
        </div>
        <div
          className={`${
            sidebarVisibility
              ? "translate-x-0"
              : "translate-x-[-100vw] lg:translate-x-[-50vw] xl:translate-x-[-40vw]"
          } 
          duration-500 ease-in-out w-[100vw] lg:w-[50vw] xl:w-[40vw] flex absolute top-0 left-0 mt-[var(--navbar-height)] 
          bg-[var(--dark-clr)] pl-[var(--sm-px)] md:pl-[var(--md-px)] lg:pl-[var(--lg-px)]
          border-r-[var(--border-clr)] border-r-2 h-[calc(100vh-var(--navbar-height))]
          flex-col gap-10 pt-14`}
        >
          <ul
            className="flex flex-col gap-6 flex-2 text-left justify-start text-xs 
              font-medium"
          >
            {navLinks.map((link) => (
              <NavbarLink
                params={{
                  content: link.content,
                  link: link.link,
                  onClick: () => setSidebarVisibility(false),
                }}
                key={link.id}
              />
            ))}
          </ul>
          <div className="md:hidden border-b-2 border-[var(--border-clr)] w-[16rem]"></div>
          <div className="md:hidden flex gap-4 flew-row">
            <button
              onClick={() => changeLanguage("en")}
              className={`${
                i18n.language === "en"
                  ? "bg-[var(--yellow-clr)] text-black"
                  : "border-2 border-white text-white"
              } flex font-semibold justify-center items-center text-xs w-7 h-7 rounded-lg`}
            >
              en
            </button>
            <button
              onClick={() => changeLanguage("ua")}
              className={`${
                i18n.language === "ua"
                  ? "bg-[var(--yellow-clr)] text-black"
                  : "border-2 border-white text-white"
              } flex font-semibold justify-center items-center text-xs w-7 h-7 rounded-lg`}
            >
              ua
            </button>
          </div>
          <div className="border-b-2 border-[var(--border-clr)] w-[16rem]"></div>
          {token && (
            <Button
              params={{
                content: t("common:navbar.logoutButton"),
                className: "btn-primary",
                onClickFunction: () => {
                  document.cookie = "token=; path=/";
                  window.location.reload();
                },
              }}
            />
          )}
          {!token && (
            <ul
              className="flex flex-col gap-6 flex-2 text-left justify-start text-xs 
              font-medium"
            >
              <Button
                params={{
                  content: t("common:navbar.loginButton"),
                  className: "btn-secondary",
                  onClickFunction: () => navigate("login"),
                }}
              />
              <Button
                params={{
                  content: t("common:navbar.signupButton"),
                  className: "btn-primary",
                  onClickFunction: () => navigate("signup"),
                }}
              />
            </ul>
          )}
        </div>

        <div className="text-lg font-bold flex-1 justify-center hover:text-xl duration-300 ease-in-out">
          <Link to="/">
            <img
              className="h-10 w-auto mx-auto"
              src={logo}
              alt="logo"
              onClick={() => setSidebarVisibility(false)}
            />
          </Link>
        </div>

        {token && (
          <div className="flex flex-1 justify-end">
            <div
              className="border-2 border-[var(--border-clr)] w-10 h-10 bg-[var(--primary-clr)] overflow-hidden rounded-full cursor-pointer"
              onClick={() => navigate("/personal-profile")}
            >
              <img src={bot} alt="" />
            </div>
          </div>
        )}
        {!token && (
          <div className="flex flex-row flex-1 gap-4 justify-end">
            <Button
              params={{
                content: t("common:navbar.loginButton"),
                className: "hidden md:block text-xs btn-secondary",
                onClickFunction: () => {
                  navigate("login");
                  setSidebarVisibility(false);
                },
              }}
            />
            <Button
              params={{
                content: t("common:navbar.signupButton"),
                className: "hidden md:block text-xs btn-primary",
                onClickFunction: () => {
                  navigate("signup");
                  setSidebarVisibility(false);
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
