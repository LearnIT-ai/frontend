import { useParams } from "react-router-dom";
import { motion } from "motion/react";

import SectionHeading from "../../components/ui/SectionHeading";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import DocumentLink from "../../components/ui/DocumentLink";

export default function CoursePage() {
  const { courseName } = useParams();

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 60 }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]"
    >
      <div className="mt-[40px] h-[50vh] w-full flex items-start text-left flex-col">
        <Breadcrumbs />
        <SectionHeading
          params={{
            content: "Course: " + courseName?.split("-").join(" ") || "",
          }}
        />
        <ul className="text-left flex flex-col gap-4">
          <DocumentLink
            params={{
              content: "Basics of AI",
            }}
          />
        </ul>
      </div>
    </motion.div>
  );
}
