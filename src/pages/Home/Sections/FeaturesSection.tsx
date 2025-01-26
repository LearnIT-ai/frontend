import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import SectionHeading from "../../../components/ui/SectionHeading";
import SectionDescription from "../../../components/ui/SectionDescription";
import FeatureCard from "../../../components/FeatureCard";
import Button from "../../../components/ui/Button";

export default function FeaturesSection() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  interface Features {
    heading: string;
    description: string;
    img: string;
  }

  const features = t("featuresSection.features", {
    returnObjects: true,
  }) as Features[];

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
            content: t("featuresSection.title"),
          }}
        />
        <SectionDescription
          params={{
            content: t("featuresSection.description"),
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
          {features.map((feature) => {
            return (
              <FeatureCard
                params={{
                  heading: feature.heading,
                  content: feature.description,
                  logo: feature.img,
                  delay: 0.2,
                }}
              />
            );
          })}
        </div>
        <Button
          params={{
            content: t("featuresSection.button"),
            className: "mt-12 md:mt-16 btn-primary",
            onClickFunction: () => navigate("our-services"),
          }}
        />
      </motion.div>
    </section>
  );
}
