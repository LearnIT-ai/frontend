import { useRef, useState } from "react";
import { motion } from "motion/react";
import doc from "../../lib/testDocuments/IntroToBasicAI.pdf";

import Breadcrumbs from "../../components/ui/Breadcrumbs";

import ChatBotMessage from "../../components/ui/chat_ui/ChatBotMessage";
import UserMessage from "../../components/ui/chat_ui/UserMessage";
import ChatButton from "../../components/ui/chat_ui/ChatButton";

export default function TestDocumenPreview() {
  const chatInputRef = useRef<HTMLTextAreaElement>(null);
  const buttonsRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLInputElement>(null);
  const toggleChatRef = useRef<HTMLButtonElement>(null);

  const [toggleChatBot, setToggleChatBot] = useState<boolean>(true);

  function toggleChat() {
    setToggleChatBot(!toggleChatBot);

    if (toggleChatRef.current && chatRef.current) {
      if (toggleChatBot) toggleChatRef.current.style.background = "none";
      else toggleChatRef.current.style.background = "var(--primary-clr)";
    }
  }

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
    <div className="px-[var(--sm-px)] md:px-[var(--md-px)] lg:px-[var(--lg-px)]">
      <div className="mt-[40px] h-full w-full flex items-start text-left flex-col">
        <Breadcrumbs />
        <div className="w-full h-[80vh] flex flex-row overflow-x-hidden rounded-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            className="flex h-full w-fit bg-[var(--dark-clr)] border-2 border-[var(--border-clr)] p-4
          gap-4 flex-col rounded-2xl z-10 mr-4"
            ref={buttonsRef}
          >
            <ChatButton
              params={{
                size: 24,
                ref: toggleChatRef,
                path: "M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z",
                onClickFunction: toggleChat,
              }}
            />
            <ChatButton
              params={{
                size: 24,
                path: "M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2",
              }}
            />
            <ChatButton
              params={{
                size: 32,
                className: "rotate-45",
                path: "M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708",
              }}
            />
            <ChatButton
              params={{
                size: 24,
                path: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4, ease: "easeOut", delay: 0.2 },
            }}
            viewport={{ once: true }}
            animate={{
              width: toggleChatBot ? "60%" : "0",
              marginRight: toggleChatBot ? "16px" : "0",
              translateX: toggleChatBot ? "0" : "-1000px",
              opacity: toggleChatBot ? 1 : 0,
            }}
            exit={{ translateX: -50, marginRight: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="chat relative w-[60%] h-full bg-[var(--dark-clr)] border-2 border-[var(--border-clr)] 
          flex flex-col justify-end rounded-2xl z-0 gap-4 overflow-hidden"
            ref={chatRef}
          >
            <div className="p-4 pb-20 w-full h-full flex flex-col gap-4 overflow-y-auto rounded-2xl">
              <ChatBotMessage
                params={{
                  content:
                    "Hi, I am Learn.it bot 😎. How can I assist you with the document?",
                }}
              />
              <UserMessage params={{ content: "Hi, I am a student" }} />
            </div>
            <div
              className="absolute px-4 pb-4 bg-[var(--dark-clr)] w-full flex flex-row justify-center items-end gap-4
            "
            >
              <textarea
                onInput={autoResize}
                className={`chat-textarea resize-none h-12 min-h-12 transition-none overflow-hidden bg-[var(--input-clr)] border-2 border-[var(--border-clr)] outline-none focus:border-[var(--input-focus-clr)]
                text-[var(--input-text-clr)] focus:text-[var(--input-text-focus-clr)] placeholder-[var(--input-text-clr)] text-sm rounded-xl block w-full duration-300 p-3`}
                placeholder="Ask something..."
                ref={chatInputRef}
              />
              <ChatButton
                params={{
                  size: 16,
                  path: "m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z",
                }}
              />
            </div>
          </motion.div>

          <motion.iframe
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4, ease: "easeOut", delay: 0.4 },
            }}
            viewport={{ once: true }}
            src={doc}
            className="w-full h-full border-2 border-[var(--border-clr)] rounded-2xl"
            title="PDF Viewer"
          ></motion.iframe>
        </div>
      </div>
    </div>
  );
}
