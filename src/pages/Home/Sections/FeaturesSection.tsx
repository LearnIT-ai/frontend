import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

import SectionHeading from "../../../components/ui/SectionHeading";
import SectionDescription from "../../../components/ui/SectionDescription";
import FeatureCard from "../../../components/FeatureCard";
import Button from "../../../components/ui/Button";

import lecturesIcon from "../../../assets/icons/lectures-icon.svg";
import plagiarismIcon from "../../../assets/icons/plagiarism-icon.svg";
import homeworkCheckIcon from "../../../assets/icons/homework-check-icon.svg";

export default function FeaturesSection() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-start mt-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        viewport={{ once: true }}
        className="flex flex-col items-center md:items-start"
      >
        <SectionHeading
          params={{
            content: "Why LearnIT platform is useful?",
          }}
        />
        <SectionDescription
          params={{
            content:
              "LearnIT is a platform designed specifically for students. Thanks to the capabilities of Artificial Intelligence, we help students upload and check their assignments, access study materials and collaborate more effectively with teachers.",
            alignment: "text-center md:text-left",
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
        className="flex flex-col items-center md:items-left"
      >
        <div className="feature-card-container flex flex-col md:flex-row w-full gap-8 md:gap-4 lg:gap-10">
          <FeatureCard
            params={{
              heading: "Lectures explanation",
              content:
                "Get detailed explanations of lecture materials with the help of an intelligent assistant.",
              logo: lecturesIcon,
              delay: 0.2,
            }}
          />
          <FeatureCard
            params={{
              heading: "Review of tasks",
              content:
                "A quick and accurate review of your completed tasks with recommendations for improvement.",
              logo: homeworkCheckIcon,
              delay: 0.4,
            }}
          />
          <FeatureCard
            params={{
              heading: "Plagiarism detection",
              content:
                "A tool for automatic analysis and detection of plagiarism in your works.",
              logo: plagiarismIcon,
              delay: 0.6,
            }}
          />
        </div>
        <Button
          params={{
            content: "More about Learn.it 🍀",
            className: "mt-12 md:mt-16 btn-primary",
            onClickFunction: () => navigate("our-services"),
          }}
        />
      </motion.div>
    </section>
  );
}
