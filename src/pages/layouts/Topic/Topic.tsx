import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import axios from "axios";

import Breadcrumbs from "../../../components/ui/Breadcrumbs";
import ChatButton from "../../../components/ui/chat_ui/ChatButton";

import { messagesArrayTypes } from "../../../interfaces/messagesArrayTypes";

import Chat from "./Chat";
import DocViewer from "./DocViewer";
import { useParams } from "react-router-dom";

export default function TestDocumentPreview() {
  const url = import.meta.env.VITE_LECTURE_URL;

  const { docName } = useParams();
  const fileUrl = `http://localhost:5000/file/${docName}`;

  const { t } = useTranslation();

  const buttonsRef = useRef<HTMLInputElement>(null);
  const toggleChatRef = useRef<HTMLButtonElement>(null);
  const [toggleChatBot, setToggleChatBot] = useState<boolean>(true);

  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [messageData, setMessageData] = useState<string>("");
  const [messagesArray, setMessagesArray] = useState<messagesArrayTypes>([
    {
      id: 0,
      type: "bot",
      message: t("common:chat.doc-preview-chatbot-message"),
    },
  ]);

  function toggleChat() {
    setToggleChatBot(!toggleChatBot);

    if (toggleChatRef.current) {
      if (toggleChatBot) toggleChatRef.current.style.background = "none";
      else toggleChatRef.current.style.background = "var(--primary-clr)";
    }
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageData(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!messageData.trim()) return;
    else {
      try {
        setMessagesArray((prev) => [
          ...prev,
          { id: prev.length, type: "student", message: messageData },
        ]);

        setMessageData("");
        setIsWaiting(true);

        const formData = new FormData();

        const file = await fetch(fileUrl);
        const blob = await file.blob();

        formData.append(
          "file",
          new File([blob], "test.pdf", { type: blob.type })
        );

        formData.append("question", messageData);
        const response = await axios.post(url, formData);

        const formattedResponse = response.data.response
          .replace(/---/g, "\n\n\n")
          .replace(/###/g, "\n\n\n")
          .replace(/\*/g, "");

        setMessagesArray((prev) => [
          ...prev,
          { id: prev.length, type: "bot", message: formattedResponse },
        ]);

        console.log("Response from server:", response.data);
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        setIsWaiting(false);
      }
    }
  };

  return (
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      <div className="mt-[40px] h-full w-full flex items-start text-left flex-col">
        <Breadcrumbs />
        <div className="w-full h-fit lg:h-[80vh] flex flex-col lg:flex-row overflow-x-hidden rounded-2xl gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            className="flex w-full h-fit lg:h-full lg:w-fit bg-[var(--dark-clr)] border-2 border-[var(--border-clr)] p-4 lg:p-3 xl:p-4
          gap-4 lg:gap-3 xl:gap-4 flex-row lg:flex-col rounded-2xl z-10"
            ref={buttonsRef}
          >
            <ChatButton
              params={{
                size: 24,
                className: "w-6 lg:w-4 xl:w-6",
                ref: toggleChatRef,
                path: "M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z",
                onClickFunction: toggleChat,
              }}
            />
            <ChatButton
              params={{
                size: 24,
                className: "w-6 lg:w-4 xl:w-6",
                path: "M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2",
              }}
            />
            <ChatButton
              params={{
                size: 32,
                className: "rotate-45 w-8 lg:w-6 xl:w-8",
                path: "M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708",
              }}
            />
            <ChatButton
              params={{
                size: 24,
                className: "w-6 lg:w-4 xl:w-6",
                path: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0",
              }}
            />
          </motion.div>

          <Chat
            params={{
              type: "docPreview",
              toggleChatBot: toggleChatBot,
              isWaitingForResponse: isWaiting,
              messages: messagesArray,
              messageData: messageData,
              textareaChange: handleTextareaChange,
              handleMessageSubmit: handleSendMessage,
            }}
          />
          <DocViewer />
        </div>
      </div>
    </div>
  );
}
