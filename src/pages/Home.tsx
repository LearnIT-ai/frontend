import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center w-full flex-col gap-10">
      <h1 className="text-4xl">Home page</h1>
    </div>
  );
}
