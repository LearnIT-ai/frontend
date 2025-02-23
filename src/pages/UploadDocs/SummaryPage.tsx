import ReactLoading from "react-loading";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

import Breadcrumbs from "../../components/ui/Breadcrumbs";
import SectionDescription from "../../components/ui/SectionDescription";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function SummaryPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
              content: t("submitAssignment:summary.title"),
            }}
          />
          <SectionDescription
            params={{
              content: t("submitAssignment:summary.description"),
              alignment: "text-left",
              className: "mb-16",
            }}
          />
          <div className="flex flex-col items-center w-full">
            <div
              className="w-full rounded-xl border-2 border-[var(--border-clr)] bg-[var(--navbar-clr)]
                          flex justify-center items-center flex-col p-10 lg:p-20 h-[40vh]"
            >
              <ReactLoading type={"bars"} color={"white"} />
            </div>
            <Button
              params={{
                content: t("submitAssignment:summary.btn"),
                onClickFunction: () => navigate("/"),
                className: "btn-secondary mt-16",
              }}
            />
          </div>
        </section>
      </motion.div>
    </div>
  );
}
