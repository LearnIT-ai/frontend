import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

import { subjects } from "../../../lib/subjects";
import { years } from "../../../lib/years";

import SectionHeading from "../../../components/ui/SectionHeading";
import SectionDescription from "../../../components/ui/SectionDescription";
import Button from "../../../components/ui/Button";
import Tab from "../../../components/ui/Tab";
import CourseCard from "../../../components/CourseCard";
import { useTranslation } from "react-i18next";

export default function CoursesSection() {
  const navigate = useNavigate();

  type Years = keyof typeof years;

  const [tab, setTab] = useState<Years>("first-year");
  const [bounce, setBounce] = useState(false);
  const [cardSlice, setCardSlice] = useState<number>(
    window.innerWidth >= 768 && window.innerWidth < 1024 ? 4 : 3
  );

  const yearNumber = years[tab as keyof typeof years].number;

  useEffect(() => {
    setBounce(true);
    const timeout = setTimeout(() => setBounce(false), 500);
    return () => clearTimeout(timeout);
  }, [tab]);

  useEffect(() => {
    const handleResize = () => {
      setCardSlice(
        window.innerWidth >= 768 && window.innerWidth < 1024 ? 4 : 3
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { t } = useTranslation();

  interface Tabs {
    title: string;
    link: string;
  }

  const tabs = t("CoursesSection.tabs", { returnObjects: true }) as Tabs[];

  function changeActiveTab(index: number) {
    switch (index) {
      case 0:
        setTab("first-year");
        break;
      case 1:
        setTab("second-year");
        break;
      case 2:
        setTab("third-year");
        break;
    }
  }

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
            content: t("CoursesSection.title"),
          }}
        />
        <SectionDescription
          params={{
            content: t("CoursesSection.description"),
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
        className="flex flex-col items-center w-full gap-12 md:gap-16"
      >
        <div className="flex flex-col w-full md:w-fit md:flex-row">
          {tabs.map((tabNav) => {
            return (
              <Tab
                key={tabNav.title}
                params={{
                  content: tabNav.title,
                  onClickFunction: () => changeActiveTab(tabs.indexOf(tabNav)),
                  isActive: tab === tabNav.link ? true : false,
                }}
              />
            );
          })}
        </div>
        <div className="courses w-full grid grid-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-10">
          {subjects
            .filter((subject) => subject.course === yearNumber)
            .slice(0, cardSlice)
            .map((subject) => (
              <CourseCard
                key={subject.id}
                params={{
                  heading: subject.fullName,
                  year: tab,
                  semester: `${subject.semester} semester`,
                  decoration: subject.name,
                  type: "lectures",
                  link: subject.fullName.toLowerCase().split(" ").join("-"),
                  className: `${bounce ? "animate-custom-bounce" : ""}`,
                }}
              />
            ))}
        </div>
        <Button
          params={{
            content: t("CoursesSection.button"),
            className: `${bounce ? "animate-custom-bounce" : ""} btn-primary`,
            onClickFunction: () => navigate(`academic-years/${tab}`),
          }}
        />
      </motion.div>
    </section>
  );
}
