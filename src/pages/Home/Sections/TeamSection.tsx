import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

import letters from "../../../assets/images/letters.svg";

import Button from "../../../components/ui/Button";
import TeamCard from "../../../components/TeamCard";
import SectionHeading from "../../../components/ui/SectionHeading";
import SectionDescription from "../../../components/ui/SectionDescription";
import { useTranslation } from "react-i18next";

interface TeamSectionProps {
  showButton: boolean;
}

export default function TeamSection({ showButton }: TeamSectionProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  interface Teammates {
    role: string;
    name: string;
  }

  const teammates = t("TeamSection.teammates", {
    returnObjects: true,
  }) as Teammates[];

  return (
    <section className="w-full flex flex-col mt-24 items-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <SectionHeading
          params={{
            content: t("TeamSection.title"),
          }}
        />
        <SectionDescription
          params={{
            content: t("TeamSection.description"),
            alignment: "text-center",
            className: "mb-12 md:mb-16",
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center"
      >
        <div
          className="relative team-cards grid grid-cols-1 grid-rows-auto md:grid-cols-2 
        lg:grid-cols-4 lg:grid-rows-3 w-full h-auto gap-x-4 lg:gap-x-6 xl:gap-x-10 
        gap-y-10 lg:gap-y-14"
        >
          <img
            className="animate-orbit transition-transform absolute 
                       top-[15%] right-[45%] md:right-[60%] lg:left-[5%] 
                       h-auto w-[100%] md:w-[60%] lg:w-[35%] xl:w-[25%]"
            src={letters}
            alt="Learn.it"
          />
          <img
            className="animate-orbit-reverse transition-transform absolute 
                       bottom-[10%] left-[35%] md:left-[60%] lg:left-[70%] xl:right-[10%]
                       h-auto w-[85%] md:w-[70%] lg:w-[45%] xl:w-[35%]"
            src={letters}
            alt="Learn.it"
          />
          <TeamCard
            params={{
              role: "Mentor",
              name: t(teammates[0].name),
              position:
                "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
              img: "bg-anastasia-img",
            }}
          />

          <TeamCard
            params={{
              role: "Mentor",
              name: t(teammates[1].name),
              position:
                "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4",
              img: "bg-denis-img",
            }}
          />

          <TeamCard
            params={{
              role: "Project Manager",
              name: t(teammates[2].name),
              position:
                "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
              img: "bg-ivanka-img",
            }}
          />

          <TeamCard
            params={{
              role: "NLP Engineer",
              name: t(teammates[3].name),
              position:
                "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
              img: "bg-roman-img",
            }}
          />

          <TeamCard
            params={{
              role: "Data Engineer",
              name: t(teammates[4].name),
              position:
                "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
              img: "bg-khrystyna-img",
            }}
          />

          <TeamCard
            params={{
              role: "Data Scientist",
              name: t(teammates[5].name),
              position:
                "lg:row-start-2 lg:row-end-3 lg:col-start-4 lg:col-end-5",
              img: "bg-maksym-img",
            }}
          />

          <TeamCard
            params={{
              role: "Designer",
              name: t(teammates[6].name),
              position:
                "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2",
              img: "bg-daryna-img",
            }}
          />

          <TeamCard
            params={{
              role: "Frontend Dev",
              name: t(teammates[7].name),
              position:
                "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3",
              img: "bg-liza-img",
            }}
          />

          <TeamCard
            params={{
              role: "Backend Dev",
              name: t(teammates[8].name),
              position:
                "lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-4",
              img: "bg-svyat-img",
            }}
          />

          <TeamCard
            params={{
              role: "Data Engineer",
              name: t(teammates[9].name),
              position:
                "lg:row-start-3 lg:row-end-4 lg:col-start-4 lg:col-end-5",
              img: "bg-oleksandr-img",
            }}
          />
        </div>
        {showButton && (
          <Button
            params={{
              content: t("TeamSection.button"),
              className: "mt-12 md:mt-16 btn-primary",
              onClickFunction: () => navigate("about-us"),
            }}
          />
        )}
      </motion.div>
    </section>
  );
}
