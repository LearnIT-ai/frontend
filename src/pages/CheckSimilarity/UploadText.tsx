import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import ReactLoading from "react-loading";
import axios from "axios";

import Popup from "../../components/ui/Popup";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import SectionHeading from "../../components/ui/SectionHeading";
import SectionDescription from "../../components/ui/SectionDescription";
import Textarea from "../../components/ui/Textarea";
import Button from "../../components/ui/Button";

export default function UploadText() {
  const url = import.meta.env.VITE_SIMILARITY_TEXTS_URL;
  const { t } = useTranslation();

  const [answerUser, setAnswerUser] = useState<string>("");
  const [answerModel, setAnswerModel] = useState<string>("");
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const answerUserRef = useRef<HTMLTextAreaElement>(null);
  const answerModelRef = useRef<HTMLTextAreaElement>(null);

  const handleAnswerUserChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAnswerUser(e.target.value);
  };

  const handleAnswerModelChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAnswerModel(e.target.value);
  };

  const submitAnswer = async () => {
    if (answerUser === "" || answerModel === "") {
      alert(t("checkSimilarity:submitText.popup"));
    } else {
      setIsWaiting(true);
      try {
        const response = await axios.post(url, {
          user_answer: answerUser,
          model_answer: answerModel,
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
              content: t("checkSimilarity:submitText.title"),
            }}
          />
          <SectionDescription
            params={{
              content: t("checkSimilarity:submitText.description"),
              alignment: "text-left",
              className: "mb-6",
            }}
          />
          <div className="w-full flex justify-center items-start flex-row gap-6">
            <Textarea
              params={{
                ref: answerUserRef,
                handleChangeFunction: handleAnswerUserChange,
                value: answerUser,
                type: "text",
                disabled: isWaiting ? true : false,
                placeholder: t("checkSimilarity:submitText.block.answerFirst"),
              }}
            />
            <Textarea
              params={{
                ref: answerModelRef,
                handleChangeFunction: handleAnswerModelChange,
                value: answerModel,
                type: "text",
                disabled: isWaiting ? true : false,
                placeholder: t("checkSimilarity:submitText.block.answerSecond"),
              }}
            />
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Button
              params={{
                content: t("checkSimilarity:submitText.submitBtn"),
                onClickFunction: submitAnswer,
                className: `border-2 mt-4 ${
                  answerUser && answerModel && !isWaiting
                    ? "hover:ring-2 hover:ring-blue-300 border-[var(--primary-clr)]"
                    : "border-[var(--border-clr)] text-[var(--input-clr)] hover:none"
                }`,
                disabled: !answerUser || !answerModel || isWaiting,
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
