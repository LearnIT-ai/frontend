import { motion } from "motion/react";
import Breadcrumbs from "../../../components/ui/Breadcrumbs";
import SectionHeading from "../../../components/ui/SectionHeading";
import Button from "../../../components/ui/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function CheckAssignment() {
  const { courseName, id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const action = searchParams.get("action");

  const [grade, setGrade] = useState<number>(0);
  const [finalGrade, setFinalGrade] = useState<number | null>(null);
  const [comment, setComment] = useState<boolean>(false);

  const changeGrade = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");

    if (val.length > 0) {
      if (val === "" || val === "0") {
        setGrade(parseInt(val));
        return;
      }

      if (val.length <= 2 || val === "100") {
        setGrade(parseInt(val));
      }
    } else {
      setGrade(0);
    }
  };

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
              content: "Check assignment",
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
                    Assigned:
                  </span>{" "}
                  Monday 3 February 2025 00:00 AM
                </p>
                <p className="text-[var(--input-text-clr)]">
                  <span className="font-bold text-[var(--input-text-clr)]">
                    Deadline:
                  </span>{" "}
                  Tuesday 18 February 2025 00:00 AM
                </p>
              </div>
              <p className="text-[var(--input-text-clr)] font-bold">
                ✅ Anti-plagiarism check
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
            <div
              className="w-full rounded-xl border-2 border-[var(--border-clr)] bg-[var(--dark-clr)]
                                    flex items-start flex-col p-10 lg:p-20 gap-6"
            >
              <p className="font-semibold">Student's Name</p>
              <div className="flex flex-col gap-2">
                <p className="text-[var(--input-text-clr)]">
                  <span className="font-bold text-[var(--input-text-clr)]">
                    Status:
                  </span>{" "}
                  {finalGrade ? "Graded ✔️" : "Not Reviewed ✖️"}
                </p>
                {finalGrade !== null && (
                  <p className="text-[var(--input-text-clr)]">
                    <span className="font-bold text-[var(--input-text-clr)]">
                      Grade:
                    </span>{" "}
                    {finalGrade}
                  </p>
                )}

                <p className="text-[var(--input-text-clr)]">
                  <span className="font-bold text-[var(--input-text-clr)]">
                    Submitted:
                  </span>{" "}
                  Tuesday 18 February 2025 00:00 AM
                </p>
                <p className="text-[var(--input-text-clr)]">
                  <span className="font-bold text-[var(--input-text-clr)]">
                    Timeliness:
                  </span>{" "}
                  Submitted on time
                </p>
                <p className="text-[var(--input-text-clr)]">
                  <span className="font-bold text-[var(--input-text-clr)]">
                    Similarity score:
                  </span>{" "}
                  75%
                </p>
              </div>
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
                <p>Completed_task.pdf</p>
              </div>
              <hr className="mb-4 border-[1.5px] border-[var(--border-clr)] w-full" />
              <div className="flex flex-col gap-4">
                <div
                  className="flex flex-row gap-4 items-center cursor-pointer"
                  onClick={() => setComment(!comment)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={`bi bi-caret-down-fill 
                  text-[var(--input-text-clr)] duration-300 fill-[var(--primary-clr)]
                  ${comment ? "rotate-180 text-[var(--primary-clr)]" : ""}`}
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                  <p>Comment for professor</p>
                </div>

                {comment && (
                  <p className="ml-8 text-[var(--input-text-clr)]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam feugiat nibh ligula, sollicitudin sagittis libero
                    varius id. Sed nisl velit, cursus a neque viverra, suscipit
                    tristique odio. Curabitur rutrum a turpis id tempor. Mauris
                    ac orci mi. Aliquam ac nisi suscipit, interdum lectus in,
                    dapibus turpis. Morbi nisi elit, tempus non pharetra at,
                    tristique vitae enim. Mauris auctor augue eget molestie
                    posuere. Mauris vel turpis viverra, gravida nulla sed,
                    tristique enim.
                  </p>
                )}
              </div>
            </div>
            {action === "review" && (
              <div
                className="mx-auto rounded-xl border-2 border-[var(--border-clr)] bg-[var(--dark-clr)]
                                    flex flex-row p-10 gap-2"
              >
                <input
                  type="text"
                  value={grade}
                  onChange={changeGrade}
                  placeholder="0"
                  className="bg-[var(--dark-clr)] w-10 text-right text-white outline-none"
                />
                <p className="text-[var(--input-text-clr)]">/</p>
                <p className="text-[var(--input-text-clr)] w-10">100</p>
              </div>
            )}
          </div>

          <div className="flex flex-row gap-6 w-full justify-center">
            <Button
              params={{
                content: action === "review" ? "Cancel" : "Review",
                className: "btn-primary mt-6",
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
            {action === "review" && (
              <Button
                params={{
                  content: "Grade",
                  className: "btn-primary mt-6",
                  onClickFunction: () => {
                    const currentParams = new URLSearchParams(location.search);
                    setFinalGrade(grade);

                    currentParams.delete("action");
                    navigate(`?${currentParams.toString()}`);
                  },
                }}
              />
            )}
            <Button
              params={{
                content: "Return Back",
                className: "btn-secondary mt-6",
                onClickFunction: () =>
                  navigate(`/all-assignments/${courseName}/${id}`),
              }}
            />
          </div>
        </section>
      </motion.div>
    </div>
  );
}
