import { useRef, ChangeEventHandler, MouseEventHandler } from "react";
import { motion } from "motion/react";

import ChatButton from "../../../components/ui/chat_ui/ChatButton";
import ChatBotMessage from "../../../components/ui/chat_ui/ChatBotMessage";
import UserMessage from "../../../components/ui/chat_ui/UserMessage";

import { messagesArrayTypes } from "../../../interfaces/messagesArrayTypes";

interface ChatProps {
  params: {
    toggleChatBot: boolean;
    isWaitingForResponse: boolean;
    messages: messagesArrayTypes;
    messageData: string;
    textareaChange: ChangeEventHandler<HTMLTextAreaElement>;
    handleMessageSubmit: MouseEventHandler<HTMLButtonElement>;
  };
}

export default function Chat({ params }: ChatProps) {
  const {
    toggleChatBot,
    isWaitingForResponse,
    messages,
    messageData,
    textareaChange,
    handleMessageSubmit,
  } = params;

  const chatRef = useRef<HTMLInputElement>(null);
  const chatInputRef = useRef<HTMLTextAreaElement>(null);

  function autoResize() {
    if (chatInputRef.current) {
      chatInputRef.current.style.height = "48px";
      if (chatInputRef.current.scrollHeight > 200) {
        chatInputRef.current.style.height = "200px";
        chatInputRef.current.style.overflowY = "scroll";
      } else {
        chatInputRef.current.style.height = `${chatInputRef.current.scrollHeight}px`;
        chatInputRef.current.style.overflowY = "hidden";
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut", delay: 0.2 },
      }}
      viewport={{ once: true }}
      animate={{
        display: toggleChatBot ? "" : "none",
      }}
      transition={{ duration: 0.35 }}
      className="chat relative w-full lg:w-[80%] h-[80vh] lg:h-full bg-[var(--dark-clr)] border-2 border-[var(--border-clr)] 
          flex flex-col justify-end rounded-2xl z-0 gap-4 overflow-hidden"
      ref={chatRef}
    >
      <div className="messages-container p-4 pb-20 w-full h-full flex flex-col gap-4 overflow-y-auto rounded-2xl">
        {messages.map((msgObject) => {
          if (msgObject.type === "bot") {
            return (
              <ChatBotMessage
                key={msgObject.id}
                params={{
                  id: msgObject.id,
                  content: msgObject.message,
                }}
              />
            );
          } else {
            return (
              <UserMessage
                key={msgObject.id}
                params={{
                  id: msgObject.id,
                  content: msgObject.message,
                }}
              />
            );
          }
        })}
      </div>
      <div
        className="absolute px-4 pb-4 bg-[var(--dark-clr)] w-full flex flex-row justify-center items-end gap-4
            "
      >
        <textarea
          onInput={autoResize}
          value={messageData}
          className={`chat-textarea resize-none top- h-12 min-h-12 transition-none overflow-hidden bg-[var(--input-clr)] border-2 border-[var(--border-clr)] outline-none focus:border-[var(--input-focus-clr)]
                text-[var(--input-text-clr)] focus:text-[var(--input-text-focus-clr)] placeholder-[var(--input-text-clr)] text-sm rounded-xl block w-full duration-300 p-3`}
          placeholder="Ask something..."
          ref={chatInputRef}
          onChange={textareaChange}
        />
        <ChatButton
          params={{
            size: isWaitingForResponse ? 10 : 16,
            onClickFunction: handleMessageSubmit,
            className: "transition-none",
            path: isWaitingForResponse
              ? "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"
              : "m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z",
          }}
        />
      </div>
    </motion.div>
  );
}
