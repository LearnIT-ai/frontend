import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/Button";

export default function NavigationBar() {
  const navigate = useNavigate();
  return (
    <div className="h-16 flex justify-center w-full fixed bg-[#343d49] top-0 left-0 text-white">
      <div className="h-16 flex justify-center items-center w-full px-20">
        <ul className="flex flex-row gap-4 flex-1 justify-start">
          <li className="hover:font-medium duration-300 ease-in-out text-sm">
            <Link to="/">Про нас</Link>
          </li>
          <li className="hover:font-medium duration-300 ease-in-out text-sm">
            <Link to="/">Наші послуги</Link>
          </li>
          <li className="hover:font-medium duration-300 ease-in-out text-sm">
            <Link to="/">Контакти</Link>
          </li>
        </ul>
        <div className="text-lg font-bold flex-1 justify-center hover:text-xl duration-300 ease-in-out">
          <Link to="/">LearnIT</Link>
        </div>
        <div className="flex flex-row flex-1 gap-4 justify-end">
          <Button
            params={{
              content: "Увійти",
              className: "text-sm",
              onClickFunction: () => navigate("login"),
            }}
          />
          <Button
            params={{
              content: "Створити профіль",
              className: "text-sm",
              onClickFunction: () => navigate("signup"),
            }}
          />
        </div>
      </div>
    </div>
  );
}
