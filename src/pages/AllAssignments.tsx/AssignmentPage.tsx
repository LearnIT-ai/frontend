import { useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "motion/react";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import ReviewList from "./ReviewList";
import { useTranslation } from "react-i18next";

export default function AssignmentPage() {
  const { t } = useTranslation();
  const { courseName } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const action = searchParams.get("action");

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
              content: `${t("common:breadcrumbs.all-assignments")}: ${courseName
                ?.split("-")
                .join(" ")}`,
            }}
          />
          <div className="flex flex-col gap-6">
            <div
              className="w-full rounded-xl border-2 border-[var(--border-clr)] bg-[var(--dark-clr)]
                                    flex items-start flex-col p-10 lg:p-20 gap-6"
            >
              <div className="text-xl uppercase font-semibold">
                Practical work No. 2 - Multilayer perceptron. Learning algorithm
              </div>
              <div className="text-[var(--input-text-clr)]">
                In this practical work, we explore the Multilayer Perceptron
                (MLP). The focus is on its learning algorithm, including forward
                propagation, backpropagation, and weight updates using gradient
                descent. By implementing and training an MLP, we analyze its
                ability to learn complex patterns from data.
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[var(--input-text-clr)]">
                  <span className="font-bold text-[var(--input-text-clr)]">
                    {t("common:assignment.assigned")}:
                  </span>{" "}
                  Monday 3 February 2025 00:00 AM
                </p>
                <p className="text-[var(--input-text-clr)]">
                  <span className="font-bold text-[var(--input-text-clr)]">
                    {t("common:assignment.deadline")}:
                  </span>{" "}
                  Tuesday 18 February 2025 00:00 AM
                </p>
              </div>
              <p className="text-[var(--input-text-clr)] font-bold">
                ✅ {t("common:assignment.plagiarism")}
              </p>
              <hr className="mt-4 border-[1.5px] border-[var(--border-clr)] w-full" />
              <div className="flex flex-row gap-6 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-file-earmark-pdf-fill w-8 h-8 fill-[var(--yellow-clr)]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z" />
                  </svg>
                </div>
                <p>Practical_work_No.2.pdf</p>
              </div>
            </div>
            <Button
              params={{
                content:
                  action === "review"
                    ? t("common:assignment.close")
                    : t("common:assignment.review"),
                className: "btn-primary mx-auto",
                onClickFunction: () => {
                  const currentParams = new URLSearchParams(location.search);
                  if (currentParams.get("action") === "review") {
                    currentParams.delete("action");
                    navigate(`?${currentParams.toString()}`);
                  } else {
                    navigate("?action=review");
                  }
                },
              }}
            />
            {action === "review" && <ReviewList />}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
