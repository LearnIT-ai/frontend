import { useState, useRef } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Breadcrumbs from "../../components/ui/Breadcrumbs";
import SectionHeading from "../../components/ui/SectionHeading";
import SectionDescription from "../../components/ui/SectionDescription";
import Textarea from "../../components/ui/Textarea";
import Button from "../../components/ui/Button";

export default function UploadText() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [comment, setComment] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const commentRef = useRef<HTMLTextAreaElement>(null);
  const answerRef = useRef<HTMLTextAreaElement>(null);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  function submitAnswer() {
    if (answer === "") {
      alert(t("submitAssignment:submitText.popup"));
    } else {
      // axios post request

      navigate("/submit-assignment/summary");
    }
  }

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
              content: t("submitAssignment:submitText.title"),
            }}
          />
          <SectionDescription
            params={{
              content: t("submitAssignment:submitText.description"),
              alignment: "text-left",
              className: "mb-16",
            }}
          />
          <div className="w-full flex justify-center items-start flex-row gap-6">
            <Textarea
              params={{
                ref: answerRef,
                handleChangeFunction: handleAnswerChange,
                value: answer,
                type: "text",
                placeholder: t("submitAssignment:submitText.block.answer"),
              }}
            />
            <Textarea
              params={{
                ref: commentRef,
                handleChangeFunction: handleCommentChange,
                value: comment,
                type: "text",
                placeholder: t("submitAssignment:submitFile.block.comment"),
              }}
            />
          </div>
          <Button
            params={{
              content: t("submitAssignment:submitText.submitBtn"),
              onClickFunction: submitAnswer,
              className: `border-2 mt-4 ${
                answer
                  ? "hover:ring-2 hover:ring-blue-300 border-[var(--primary-clr)]"
                  : "border-[var(--border-clr)] text-[var(--input-clr)] hover:none"
              }`,
              disabled: answer ? false : true,
            }}
          />
        </section>
      </motion.div>
    </div>
  );
}
