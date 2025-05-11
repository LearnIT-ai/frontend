import { motion } from "motion/react";
import Button from "./Button";
import { t } from "i18next";
import ReactMarkdown from "react-markdown";

interface PopupTypes {
  params: {
    type: "error" | "success";
    content: string;
    onClickFunction: () => void;
  };
}

export default function Popup({ params }: PopupTypes) {
  return (
    <div
      className={`w-[100vw] h-[100vh] absolute top-0 left-0 ${
        params.type === "error"
          ? "bg-[var(--popup-screen-clr)]"
          : "bg-[var(--popup-screen-full-clr)]"
      } z-50 backdrop-blur-sm flex justify-center items-center`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="w-[40vw] h-fit bg-[var(--bg-clr)] text-white rounded-xl border-2 border-[var(--border-clr)] 
                            overflow-hidden relative p-6 text-center flex flex-col gap-6 items-center"
      >
        <div
          className={`absolute w-full h-2 top-0 left-0 ${
            params.type === "error"
              ? "bg-[var(--yellow-clr)]"
              : "bg-[var(--green-clr)]"
          }`}
        ></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-exclamation-triangle w-12 h-12 mt-2"
          viewBox="0 0 16 16"
        >
          {params.type === "error" && (
            <>
              <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
              <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
            </>
          )}
          {params.type === "success" && (
            <>
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </>
          )}
        </svg>
        <ReactMarkdown>{params.content}</ReactMarkdown>
        <Button
          params={{
            content: t("submitAssignment:submitFile.block.errorBtn"),
            onClickFunction: params.onClickFunction,
            className: "btn-primary",
          }}
        />
      </motion.div>
    </div>
  );
}
