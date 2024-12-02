import { Link } from "react-router-dom";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import google from "../../assets/icons/google.svg";

import geo from "../../assets/icons/geo.svg";
import email from "../../assets/icons/email.svg";

import logo from "../../assets/logo_horizontal.svg";

export default function Footer() {
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
      <div className="flex gap-20">
        <div className="flex flex-1 flex-col gap-6 items-start text-left">
          <h3 className="uppercase font-semibold">Information</h3>
          <div className="text-sm">
            LearnIT - upload your work and get access to a wide range of study
            materials. Let AI guide your learning and help you excel in your
            studies.
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
        <div className="flex flex-1 flex-col gap-6 items-center">
          <h3 className="uppercase font-semibold">Navigation</h3>
          <ul className="list-disc text-sm flex flex-col items-start gap-2">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Our Services</Link>
            </li>
            <li>
              <Link to="/">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 flex-col gap-6 items-start text-left">
          <h3 className="uppercase font-semibold">Contact Us</h3>
          <div className="flex flex-col gap-2 items-start">
            <div className="flex flex-row gap-4">
              <img src={geo} alt="Geolocation icon" />
              <p>Lviv, st. Zamarstinivska, 83A</p>
            </div>
            <div className="flex flex-row gap-4">
              <img src={email} alt="Email icon" />
              <p>contact@itstep.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
