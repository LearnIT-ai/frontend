import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

export default function NavigationBar() {
  const navigate = useNavigate();
  return (
    <div
      className="h-[var(--navbar-height)] flex justify-center w-screen fixed 
                    backdrop-blur-md bg-[var(--navbar-clr)] top-0 left-0 text-white 
                    z-50 border-b-2 border-[var(--border-clr)]"
    >
      <div
        className="h-[var(--navbar-height)] flex justify-center items-center w-full 
                    px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]"
      >
        <div className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
        <ul className="hidden md:flex flex-row gap-4 flex-2 justify-start">
          <li className="hover:font-medium duration-300 ease-in-out text-sm">
            <Link to="/">Про нас</Link>
          </li>
          <li className="hover:font-medium duration-300 ease-in-out text-sm">
            <Link to="/">Наші послуги</Link>
          </li>
          <li className="hover:font-medium duration-300 ease-in-out text-sm">
            <Link to="/">Контакти</Link>
          </li>
          <li className="hover:font-medium duration-300 ease-in-out text-sm">
            <Link to="/document">Документ</Link>
          </li>
        </ul>
        <div className="text-lg font-bold flex-1 justify-center hover:text-xl duration-300 ease-in-out">
          <Link to="/">LearnIT</Link>
        </div>
        <div className="flex flex-row flex-2 gap-4 justify-end">
          <Button
            params={{
              content: "Увійти",
              className: "hidden md:block text-sm",
              onClickFunction: () => navigate("login"),
            }}
          />
          <Button
            params={{
              content: "Створити профіль",
              className: "hidden md:block text-sm",
              onClickFunction: () => navigate("signup"),
            }}
          />
        </div>
      </div>
    </div>
  );
}
