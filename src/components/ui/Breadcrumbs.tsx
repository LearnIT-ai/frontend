import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <ul className="mb-10 flex flex-wrap text-base gap-3 md:gap-4 uppercase md:text-xs font-medium">
      <li key={0}>
        <Link to="/">Home</Link>
      </li>
      {pathnames.map((path, index) => {
        const url = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <li key={index} className="flex flex-row gap-4">
            <span>{"->"}</span>
            {index === pathnames.length - 1 ? (
              <div className="opacity-40">{path.split("-").join(" ")}</div>
            ) : (
              <Link to={url}>{path.split("-").join(" ")}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
