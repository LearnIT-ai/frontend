import Breadcrumbs from "../components/ui/Breadcrumbs";
import HeroHeading from "../components/ui/HeroHeading";
import SectionHeading from "../components/ui/SectionHeading";
import TeamSection from "./Home/Sections/TeamSection";
import ContactsSection from "./Home/Sections/ContactsSection";
import { motion } from "motion/react";

import aboutUsRobot from "../assets/images/about_us_robot.png";

export default function AboutUs() {
  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      <div
        className="mt-[40px] w-full flex flex-col 
          text-left items-start"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        >
          <Breadcrumbs />
          <HeroHeading params={{ content: "About Us 😎" }} />
          <p className="w-[80%] md:w-[70%] xl:w-[60%] text-sm md:text-lg text-[var(--input-text-clr)] mb-12">
            Our platform helps you manage assignments, access study materials,
            and collaborate with teachers—all in one smart and intuitive space.
          </p>
        </motion.div>
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        >
          <div className="flex flex-row gap-6 w-full">
            <div
              className="flex flex-col rounded-xl justify-center bg-[var(--dark-clr)]
                        items-start z-10 border-2 border-[var(--border-clr)] lg:flex-[1.2]
                        w-full p-6 hover:border-[var(--primary-clr)] cursor-pointer"
            >
              <SectionHeading
                params={{
                  content: "How do we work?",
                }}
              />
              <p className="w-[100%] xl:w-[80%] text-sm md:text-base text-[var(--input-text-clr)]">
                At LearnIT, we leverage AI to make studying more efficient. Our
                platform automates assignment processing, provides intelligent
                feedback, and ensures seamless communication between students
                and teachers—all in a user-friendly environment.
              </p>
            </div>
            <div className="flex flex-[1]">
              <div
                className="flex flex-[2] justify-center items-end w-full z-10 h-full hover:border-[var(--primary-clr)] cursor-pointer
        rounded-xl overflow-hidden border-2 border-[var(--border-clr)] bg-[var(--dark-clr)]"
              >
                <img
                  src={aboutUsRobot}
                  alt="Bot image"
                  className="z-10 h-auto"
                />
              </div>
            </div>
          </div>
        </motion.section>
        <TeamSection showButton={false} />
        <ContactsSection />
      </div>
    </div>
  );
}
