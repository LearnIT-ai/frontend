import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import google from "../../assets/icons/google.svg";

import logo from "../../assets/logo_horizontal.svg";
import { Trans, useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div
      className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)] w-screen h-full 
    bg-[var(--dark-clr)] mt-32 border-t-2 border-[var(--border-clr)] py-14
    flex flex-col gap-10"
    >
      <div>
        <Link to="/">
          <img src={logo} className="h-16 mb-5" alt="LearnIT" />
        </Link>
        <div className="border-t-2 border-[var(--border-clr)]"></div>
      </div>
      <div className="flex gap-20 flex-col md:flex-row items-start">
        <div className="flex flex-1 flex-col gap-6 items-start text-left">
          <h3 className="uppercase font-semibold text-[var(--grey-clr)]">
            {t("common:footerLinks.info")}
          </h3>
          <div className="text-sm text-[var(--grey-clr)]">
            {t("common:footerDescription")}
          </div>
          <div className="flex flex-row gap-4">
            <Link to="https://www.facebook.com/ITSTEPUniversity/">
              <img src={facebook} alt="Facebook logo" />
            </Link>
            <Link to="https://www.instagram.com/it_university/">
              <img src={instagram} alt="Instagram logo" />
            </Link>
            <Link to="https://www.linkedin.com/company/it-step-university/posts/?feedView=all">
              <img src={linkedin} alt="Linkedin logo" />
            </Link>
            <Link to="https://itstep.edu.ua/">
              <img src={google} alt="Website" />
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex flex-col gap-6 items-start">
            <h3 className="uppercase font-semibold text-[var(--grey-clr)]">
              {t("common:footerLinks.navigation")}
            </h3>
            <ul className="list-none text-sm flex flex-col items-start gap-2">
              <li className="hover:text-white text-[var(--grey-clr)]">
                <Link to="/">{t("common:navbarLinks.services")}</Link>
              </li>
              <li className="hover:text-white text-[var(--grey-clr)]">
                <Link to="/">{t("common:navbarLinks.aboutUs")}</Link>
              </li>
              <li className="hover:text-white text-[var(--grey-clr)]">
                <Link to="/">{t("common:navbarLinks.documents")}</Link>
              </li>
              <li className="hover:text-white text-[var(--grey-clr)]">
                <Link to="/upload-files">{t("common:navbarLinks.upload")}</Link>
              </li>
              <li className="hover:text-white text-[var(--grey-clr)]">
                <Link to="/">{t("common:navbarLinks.contacts")}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6 items-start text-left">
          <h3 className="uppercase font-semibold text-[var(--grey-clr)]">
            {t("common:footerLinks.contacts")}
          </h3>
          <div className="flex flex-col gap-4 items-start text-sm">
            <p className="text-[var(--grey-clr)]">{t("common:street")}</p>
            <p className="text-[var(--grey-clr)]">+(380) 73 610 73 88</p>
            <p className="text-[var(--grey-clr)]">contact@itstep.org</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[var(--border-clr)]"></div>
      <div className="text-sm text-[var(--grey-clr)]">
        <Trans
          i18nKey={t("common:additional")}
          values={{
            channel: "RoadsideCoder",
          }}
          components={{
            1: <a href="https://leonardo.ai/" />,
          }}
        />
      </div>
    </div>
  );
}
