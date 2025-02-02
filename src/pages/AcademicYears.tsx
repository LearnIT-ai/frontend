import { motion } from "motion/react";

import Breadcrumbs from "../components/ui/Breadcrumbs";
import SectionHeading from "../components/ui/SectionHeading";

import AcademicYearCard from "../components/AcademicYearCard";

export default function AcademicYears() {
  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      <motion.div
        initial={{ opacity: 0, translateY: 60 }}
        whileInView={{
          opacity: 1,
          translateY: 0,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="mt-[40px] w-full flex flex-col 
      text-left items-start"
      >
        <Breadcrumbs />

        <SectionHeading params={{ content: "Academic Years" }} />

        <div
          className="courses w-full grid grid-rows-auto grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 gap-8 md:gap-4 lg:gap-10"
        >
          <AcademicYearCard
            params={{
              heading: "Freshman (1st year)",
              decoration: "1",
              link: "first-year",
            }}
          />
          <AcademicYearCard
            params={{
              heading: "Sophomore (2nd year)",
              decoration: "2",
              link: "second-year",
            }}
          />
          <AcademicYearCard
            params={{
              heading: "Junior (3rd year)",
              decoration: "3",
              link: "third-year",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
