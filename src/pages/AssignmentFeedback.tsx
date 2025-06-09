import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import ReactLoading from "react-loading";
import axios from "axios";

import Popup from "../components/ui/Popup";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import SectionHeading from "../components/ui/SectionHeading";
import SectionDescription from "../components/ui/SectionDescription";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";

export default function AssignmentFeedback() {
  const url = import.meta.env.VITE_FEEDBACK_URL;
  const { t } = useTranslation();

  const [answer, setAnswer] = useState<string>("");
  const [task, setTask] = useState<string>("");
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const taskRef = useRef<HTMLTextAreaElement>(null);
  const answerRef = useRef<HTMLTextAreaElement>(null);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const handleTaskChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTask(e.target.value);
  };

  const submitAnswer = async () => {
    if (answer === "" || task === "") {
      alert(t("submitAssignment:submitText.popup"));
    } else {
      setIsWaiting(true);
      try {
        const response = await axios.post(url, {
          task: task,
          answer: answer,
        });
        setResponse(response.data.response);
        setShowPopup(true);
      } catch (error) {
        alert(error);
      } finally {
        setIsWaiting(false);
      }
    }
  };

  useEffect(() => {
    const topContainer = document.getElementById("app-container");

    if (topContainer) {
      if (showPopup) {
        topContainer.style.height = "100vh";
      } else {
        topContainer.style.height = "auto";
      }
    }

    return () => {
      if (topContainer) topContainer.style.height = "auto";
    };
  }, [showPopup]);

  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      {showPopup && (
        <Popup
          params={{
            type: "success",
            feedback: true,
            content: response,
            onClickFunction: () => setShowPopup(false),
          }}
        />
      )}
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
              className: "mb-6",
            }}
          />
          <div className="w-full flex justify-center items-start flex-row gap-6">
            <Textarea
              params={{
                ref: taskRef,
                handleChangeFunction: handleTaskChange,
                value: task,
                type: "text",
                disabled: isWaiting ? true : false,
                placeholder: t("submitAssignment:submitText.block.task"),
              }}
            />
            <Textarea
              params={{
                ref: answerRef,
                handleChangeFunction: handleAnswerChange,
                value: answer,
                type: "text",
                disabled: isWaiting ? true : false,
                placeholder: t("submitAssignment:submitText.block.answer"),
              }}
            />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Button
              params={{
                content: t("submitAssignment:submitText.submitBtn"),
                onClickFunction: submitAnswer,
                className: `border-2 mt-4 ${
                  answer && task && !isWaiting
                    ? "hover:ring-2 hover:ring-blue-300 border-[var(--primary-clr)]"
                    : "border-[var(--border-clr)] text-[var(--input-clr)] hover:none"
                }`,
                disabled: !answer || !task || isWaiting,
              }}
            />
            <ReactLoading
              className={`${isWaiting ? "" : "hidden"}`}
              type={"bars"}
              color={"white"}
              height={30}
              width={50}
              delay={0}
            />
          </div>
        </section>
      </motion.div>
    </div>
  );
}
