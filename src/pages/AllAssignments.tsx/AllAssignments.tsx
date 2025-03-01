import { motion } from "motion/react";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import SectionHeading from "../../components/ui/SectionHeading";

import { subjects } from "../../lib/subjects";
import CourseCard from "../../components/CourseCard";

export default function AllAssignments() {
  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="mt-[40px] w-full flex flex-col 
          text-left items-start"
      >
        <Breadcrumbs />
        <section className="w-full flex flex-col items-start">
          <SectionHeading
            params={{
              content: "All assignments",
            }}
          />
          <div className="courses w-full grid grid-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-10">
            <CourseCard
              key={subjects[7].id}
              params={{
                heading: subjects[7].fullName,
                year: "2nd Year",
                semester: `${subjects[7].semester} semester`,
                decoration: subjects[7].name,
                type: "assignments",
                link: subjects[7].fullName.toLowerCase().split(" ").join("-"),
              }}
            />
          </div>
        </section>
      </motion.div>
    </div>
  );
}
