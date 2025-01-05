import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

import letters from "../../../assets/images/letters.svg";

import Button from "../../../components/ui/Button";
import TeamCard from "../../../components/TeamCard";
import SectionHeading from "../../../components/ui/SectionHeading";
import SectionDescription from "../../../components/ui/SectionDescription";

export default function TeamSection() {
  const navigate = useNavigate();
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
            content: "Our Team",
          }}
        />
        <SectionDescription
          params={{
            content:
              "Meet our team! Together, we are dedicated to building the platform and implementing innovative solutions to enhance your learning experience. With passion and expertise, we are eager to make your education process more engaging, accessible, and personalized.",
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
              name: "Anastasia Deineko",
              position:
                "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
              img: "bg-anastasia-img",
            }}
          />

          <TeamCard
            params={{
              role: "Mentor",
              name: "Denis Savenkov",
              position:
                "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4",
              img: "bg-denis-img",
            }}
          />

          <TeamCard
            params={{
              role: "Project Manager",
              name: "Ivanka Chuliy",
              position:
                "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
              img: "bg-ivanka-img",
            }}
          />

          <TeamCard
            params={{
              role: "NLP Engineer",
              name: "Roman Lapiuk",
              position:
                "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
              img: "bg-roman-img",
            }}
          />

          <TeamCard
            params={{
              role: "Data Engineer",
              name: "Khrystyna Savchyn",
              position:
                "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
              img: "bg-khrystyna-img",
            }}
          />

          <TeamCard
            params={{
              role: "Data Scientist",
              name: "Maksym Kahadii",
              position:
                "lg:row-start-2 lg:row-end-3 lg:col-start-4 lg:col-end-5",
              img: "bg-maksym-img",
            }}
          />

          <TeamCard
            params={{
              role: "Designer",
              name: "Daryna Mamokina",
              position:
                "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2",
              img: "bg-daryna-img",
            }}
          />

          <TeamCard
            params={{
              role: "Frontend Dev",
              name: "Liza Humnytska",
              position:
                "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3",
              img: "bg-liza-img",
            }}
          />

          <TeamCard
            params={{
              role: "Backend Dev",
              name: "Svyatoslav Strubitskiy",
              position:
                "lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-4",
              img: "bg-svyat-img",
            }}
          />

          <TeamCard
            params={{
              role: "Data Engineer",
              name: "Oleksandr Prosymiak",
              position:
                "lg:row-start-3 lg:row-end-4 lg:col-start-4 lg:col-end-5",
              img: "bg-oleksandr-img",
            }}
          />
        </div>
        <Button
          params={{
            content: "More about us 😎",
            className: "mt-12 md:mt-16 btn-primary",
            onClickFunction: () => navigate("about-us"),
          }}
        />
      </motion.div>
    </section>
  );
}
