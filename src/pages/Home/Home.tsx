import { motion } from "motion/react";

import ellipsLg from "../../assets/images/ellipse-lg.png";
import ellipsMd from "../../assets/images/ellipse-md.png";
import letters from "../../assets/images/letters.svg";

import HeroHeading from "../../components/ui/HeroHeading";
import Button from "../../components/ui/Button";

import FeaturesSection from "./Sections/FeaturesSection";
import CoursesSection from "./Sections/CoursesSection";
import TeamSection from "./Sections/TeamSection";

export default function Home() {
  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="flex w-full mt-[40px] h-[calc(100vh-var(--navbar-height)-80px)] mb-[40px]"
      >
        <div
          className="relative flex flex-col w-full justify-center items-center rounded-3xl border-2 
                        border-[var(--border-clr)]"
        >
          <img
            className="animate-orbit transition-transform opacity-[80%] absolute 
                       top-[2%] lg:top-[0%] xl:top-[-5%] left-[-25%] xl:left-[-15%] w-auto 
                       h-[18%] md:h-[30%] lg:h-[35%] xl:h-[45%]"
            src={ellipsLg}
            alt="Ellips Large"
          />
          <img
            className="animate-orbit-reverse transition-transform absolute 
                       bottom-[-5%] md:bottom-[2%] right-[-30%] md:right-[-25%] 
                       xl:right-[-10%] w-auto h-[25%] md:h-[30%] lg:h-[25%] xl:h-[45%]"
            src={ellipsMd}
            alt="Ellips Medium"
          />
          <img
            className="animate-orbit-reverse transition-transform absolute 
                       bottom-[75%] md:bottom-[55%] right-[-30%] md:right-[-35%] 
                       xl:right-[-12%] h-auto w-[45%] md:w-[40%] lg:w-[40%] xl:w-[10%]"
            src={letters}
            alt="Learn.it"
          />
          <img
            className="animate-orbit transition-transform absolute 
                       bottom-[15%] left-[-25%] xl:left-[-15%] 
                       h-auto w-[35%] md:w-[35%] lg:w-[35%] xl:w-[18%]"
            src={letters}
            alt="Learn.it"
          />
          <div className="flex flex-col gap-2 md:gap-4 justify-center items-center">
            <HeroHeading
              params={{
                content: "Learn more effectively with AI",
              }}
            />
            <p className="w-[80%] md:w-[70%] xl:w-[60%] text-sm md:text-base text-[var(--input-text-clr)]">
              Upload your work and get access to a wide range of study
              materials. Let AI guide your learning and help you excel in your
              studies
            </p>
            <Button
              params={{
                content: "Start working 👾",
                className: "mt-6 btn-primary",
              }}
            />
          </div>
        </div>
      </motion.section>

      <FeaturesSection />
      <CoursesSection />
      <TeamSection />
    </div>
  );
}
