import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import ReactLoading from "react-loading";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import SectionHeading from "../../components/ui/SectionHeading";
import SectionDescription from "../../components/ui/SectionDescription";
import Button from "../../components/ui/Button";
import ChatButton from "../../components/ui/chat_ui/ChatButton";
import Popup from "../../components/ui/Popup";
import axios from "axios";

export default function UploadFile() {
  const url = import.meta.env.VITE_SIMILARITY_FILES_URL;
  const { t } = useTranslation();

  const [showPopup, setShowPopup] = useState<
    [boolean, string: "error" | "success" | null]
  >([false, null]);

  const allowedFormats = ["pdf", "docx", "doc", "py"];

  const [fileFirst, setFileFirst] = useState<File | null>(null);
  const [fileSecond, setFileSecond] = useState<File | null>(null);
  const [clickedButton, setClickedButton] = useState<"first" | "second" | null>(
    null
  );
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  function triggerInput(id: "first" | "second") {
    if (!inputRef || !inputRef.current) return;
    setClickedButton(id);
    inputRef.current.click();
  }

  function selectDocument(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const selectedDocumentFormat =
        e.target.files[0]?.name.split(".").pop()?.toLowerCase() || "";
      if (!allowedFormats.includes(selectedDocumentFormat)) {
        setShowPopup([true, "error"]);
      } else {
        if (clickedButton === "first") {
          setFileFirst(e.target.files[0]);
          setClickedButton(null);
        }
        if (clickedButton === "second") {
          setFileSecond(e.target.files[0]);
          setClickedButton(null);
        }
      }
    }
  }

  useEffect(() => {
    const topContainer = document.getElementById("app-container");

    if (topContainer) {
      if (showPopup[0]) {
        topContainer.style.height = "100vh";
      } else {
        topContainer.style.height = "auto";
      }
    }

    return () => {
      if (topContainer) topContainer.style.height = "auto";
    };
  }, [showPopup]);

  const submitDocument = async () => {
    if (fileFirst && fileSecond) {
      setIsWaiting(true);
      const formData = new FormData();
      formData.append("user_file", fileFirst);
      formData.append("model_file", fileSecond);

      try {
        const response = await axios.post(url, formData);
        setResponse(response.data.response);
        setShowPopup([true, "success"]);
      } catch (error) {
        alert(error);
      } finally {
        setIsWaiting(false);
      }
    }
  };

  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      {showPopup[0] && (
        <Popup
          params={{
            type: showPopup[1] === "error" ? "error" : "success",
            content:
              showPopup[1] === "error"
                ? t("submitAssignment:submitFile.popup")
                : response,
            onClickFunction: () => setShowPopup([false, null]),
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
              content: t("submitAssignment:submitFile.title"),
            }}
          />
          <SectionDescription
            params={{
              content: t("submitAssignment:submitFile.description"),
              alignment: "text-left",
              className: "mb-16",
            }}
          />
          <div
            className="w-full rounded-xl border-2 border-[var(--border-clr)] bg-[var(--navbar-clr)]
                          flex justify-center items-center flex-col p-10 lg:p-20 gap-6"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cloud-plus w-20 h-20"
                viewBox="0 0 16 16"
              >
                <path d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5" />
                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
              </svg>
            </div>
            <p className="text-xl font-semibold uppercase w-[60%] text-center">
              {t("submitAssignment:submitFile.block.header")}
            </p>
            <p className="text-[var(--input-text-clr)]">
              {t("submitAssignment:submitFile.block.description")}
            </p>
            <div className="flex flex-row gap-4 items-center">
              <Button
                params={{
                  content: t("checkSimilarity:submitFile.block.uploadFirstBtn"),
                  onClickFunction: () => triggerInput("first"),
                  className: `border-2 mt-4 ${
                    !isWaiting && fileFirst === null
                      ? "hover:ring-2 hover:ring-blue-300 border-[var(--primary-clr)] bg-[var(--primary-clr)]"
                      : "border-[var(--border-clr)] text-[var(--input-clr)] bg-[var(--border-clr)] hover:none"
                  }`,
                  disabled: isWaiting || fileFirst !== null,
                }}
              />
              <Button
                params={{
                  content: t(
                    "checkSimilarity:submitFile.block.uploadSecondBtn"
                  ),
                  onClickFunction: () => triggerInput("second"),
                  className: `border-2 mt-4 ${
                    !isWaiting && fileSecond === null
                      ? "hover:ring-2 hover:ring-blue-300 border-[var(--primary-clr)] bg-[var(--primary-clr)]"
                      : "border-[var(--border-clr)] text-[var(--input-clr)] bg-[var(--border-clr)] hover:none"
                  }`,
                  disabled: isWaiting || fileSecond !== null,
                }}
              />
              <Button
                params={{
                  content: t("submitAssignment:submitFile.block.submitBtn"),
                  onClickFunction: submitDocument,
                  className: `border-2 mt-4 ${
                    fileFirst && fileSecond && !isWaiting
                      ? "hover:ring-2 hover:ring-blue-300 border-[var(--primary-clr)]"
                      : "border-[var(--border-clr)] text-[var(--input-clr)] hover:none"
                  }`,
                  disabled: !fileFirst || !fileSecond || isWaiting,
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
            <input
              ref={inputRef}
              id="file"
              type="file"
              hidden
              onChange={selectDocument}
            />
          </div>
          {fileFirst && (
            <div
              className="w-full rounded-xl border-2 border-[var(--border-clr)] bg-[var(--navbar-clr)]
                          flex flex-row p-6 gap-6 mt-6 items-center justify-between"
            >
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
                <div className="flex flex-row gap-2">
                  <p>{fileFirst.name}</p>
                  <p className="text-[var(--input-text-clr)]">
                    ({Math.round((fileFirst.size / 1000000) * 100) / 100} MB)
                  </p>
                </div>
              </div>
              <ChatButton
                params={{
                  size: 24,
                  onClickFunction: () => setFileFirst(null),
                  className: "w-6 lg:w-4 xl:w-6",
                  disabled: isWaiting,
                  path: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0",
                }}
              />
            </div>
          )}
          {fileSecond && (
            <div
              className="w-full rounded-xl border-2 border-[var(--border-clr)] bg-[var(--navbar-clr)]
                          flex flex-row p-6 gap-6 mt-6 items-center justify-between"
            >
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
                <div className="flex flex-row gap-2">
                  <p>{fileSecond.name}</p>
                  <p className="text-[var(--input-text-clr)]">
                    ({Math.round((fileSecond.size / 1000000) * 100) / 100} MB)
                  </p>
                </div>
              </div>
              <ChatButton
                params={{
                  size: 24,
                  onClickFunction: () => setFileSecond(null),
                  className: "w-6 lg:w-4 xl:w-6",
                  disabled: isWaiting,
                  path: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0",
                }}
              />
            </div>
          )}
        </section>
      </motion.div>
    </div>
  );
}
