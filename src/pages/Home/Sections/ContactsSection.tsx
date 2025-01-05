import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

import SectionHeading from "../../../components/ui/SectionHeading";
import SectionDescription from "../../../components/ui/SectionDescription";
import Button from "../../../components/ui/Button";

import bot from "../../../assets/images/bot_contact.png";
import circle from "../../../assets/images/ellipse-md.png";

export default function ContactsSection() {
  const navigate = useNavigate();
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="w-full flex flex-col lg:flex-row mt-24 gap-16 xl:gap-32"
    >
      <div className="flex flex-[1] relative order-2 lg:order-1">
        <div
          className="flex justify-center items-end w-full z-10
        rounded-xl overflow-hidden border-2 border-[var(--border-clr)] bg-[var(--navbar-clr)]"
        >
          <img
            src={bot}
            alt="Bot image"
            className="z-10 h-auto md:scale-[140%] md:w-[70%] lg:w-[100%] lg:scale-[100%]"
          />
        </div>
        <img
          className="animate-orbit transition-transform absolute z-0 h-auto 
                     top-[-20%] md:top-[-40%] lg:top-[-15%] right-[-50%] lg:right-[40%] 
                     w-[90%] md:w-[80%] lg:w-[90%]"
          src={circle}
          alt="Learn.it"
        />
        <img
          className="animate-orbit transition-transform absolute z-0 h-auto
                     bottom-[-10%] md:bottom-[-20%] lg:bottom-[10%] right-[70%] 
                     lg:right-[-10%] w-[40%] md:w-[40%]"
          src={circle}
          alt="Learn.it"
        />
      </div>
      <div className="flex flex-[1] xl:flex-[1.2] flex-col justify-center items-start z-10 gap-10 order-1 lg:order-2">
        <div className="flex flex-col items-start ">
          <SectionHeading
            params={{
              content: "Got any questions?",
            }}
          />
          <SectionDescription
            params={{
              content:
                "Feel free to reach out to us via email or give us a call. We're here to assist you with any questions or concerns you may have!",
              alignment: "text-left",
              className: "md:w-[80%] lg:w-[100%]",
            }}
          />
        </div>
        <div className="flex flex-col gap-6 items-start font-medium text-lg">
          <div className="flex flex-row gap-4 hover:translate-x-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-arrow-down-right-circle w-6 h-6 fill-[var(--input-clr)]"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
            <p>Lviv, st. Zamarstinivska, 83A</p>
          </div>
          <div className="flex flex-row gap-4 hover:translate-x-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-arrow-down-right-circle w-6 h-6 fill-[var(--input-clr)]"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
            <p>+(380) 73 610 73 88</p>
          </div>
          <div className="flex flex-row gap-4 hover:translate-x-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-arrow-down-right-circle w-6 h-6 fill-[var(--input-clr)]"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
            <p>contact@itstep.org</p>
          </div>
        </div>
        <Button
          params={{
            content: "Send an email 💬",
            className: "btn-primary mt-6 z-10 relative",
            onClickFunction: () => navigate("/contacts"),
          }}
        />
      </div>
    </motion.section>
  );
}
