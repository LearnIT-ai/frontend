import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Chat from "../layouts/Topic/Chat";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import { messagesArrayTypes } from "../../interfaces/messagesArrayTypes";

export default function ChatBot() {
  const url = import.meta.env.VITE_CHATBOT_URL;

  const { t } = useTranslation();

  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [messageData, setMessageData] = useState<string>("");
  const [messagesArray, setMessagesArray] = useState<messagesArrayTypes>([
    {
      id: 0,
      type: "bot",
      message: t("common:chat.common-chatbot-message"),
    },
  ]);

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

        const response = await axios.post(url, {
          user_message: messageData,
        });

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
          <Chat
            params={{
              type: "chatBot",
              isWaitingForResponse: isWaiting,
              messages: messagesArray,
              messageData: messageData,
              textareaChange: handleTextareaChange,
              handleMessageSubmit: handleSendMessage,
            }}
          />
        </div>
      </div>
    </div>
  );
}
