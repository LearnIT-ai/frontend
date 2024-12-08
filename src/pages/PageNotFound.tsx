import { useNavigate } from "react-router-dom";

import Button from "../components/ui/Button";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="error-page flex flex-col items-center justify-center mb-[var(--navbar-height)] h-[calc(100vh-2*var(--navbar-height))] w-full">
      <div className="text-[200px] font-bold">404</div>
      <p>The page you are looking for was not found 😣</p>
      <Button
        params={{
          content: "Return to Home Page",
          onClickFunction: () => navigate("/"),
          className: "btn-primary mt-6",
        }}
      />
    </div>
  );
}
