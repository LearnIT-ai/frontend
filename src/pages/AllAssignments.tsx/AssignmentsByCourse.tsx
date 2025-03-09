import { useNavigate, useParams } from "react-router-dom";
import { motion } from "motion/react";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import SectionHeading from "../../components/ui/SectionHeading";
import DocumentLink from "../../components/ui/DocumentLink";
import Button from "../../components/ui/Button";

export default function AssignmentsByCourse() {
  const { courseName } = useParams();
  const navigate = useNavigate();

  const taskName = "Practical Work #1";

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
              content: `All assignments: ${courseName?.split("-").join(" ")}`,
            }}
          />
          <Button
            params={{
              content: "Upload assignment",
              className: "btn-primary mb-6",
              onClickFunction: () => navigate("upload-assignment"),
            }}
          />
          <div className="flex flex-col gap-4 w-full">
            <DocumentLink
              params={{
                content: taskName,
                link: taskName,
              }}
            />
          </div>
        </section>
      </motion.div>
    </div>
  );
}
