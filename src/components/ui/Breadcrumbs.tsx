import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Breadcrumbs() {
  const { t } = useTranslation();
  const location = useLocation();

  const pathnames = decodeURIComponent(location.pathname)
    .split("/")
    .filter((x) => x);

  return (
    <ul className="mb-10 flex flex-wrap text-base gap-3 md:gap-4 uppercase md:text-xs font-medium">
      <li key={0}>
        <Link to="/">{t("common:breadcrumbs.home")}</Link>
      </li>
      {pathnames.map((path, index) => {
        const url = `/${pathnames.slice(0, index + 1).join("/")}`;

        const tpath = t(
          `common:breadcrumbs.${path}`,
          path.split("-").join(" ")
        );
        return (
          <li key={index} className="flex flex-row gap-4">
            <span>{"->"}</span>
            {index === pathnames.length - 1 ? (
              <div className="opacity-40">{tpath}</div>
            ) : (
              <Link to={url}>{tpath}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
