import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Chat from "../layouts/Topic/Chat";
import Breadcrumbs from "../../components/ui/Breadcrumbs";
import { messagesArrayTypes } from "../../interfaces/messagesArrayTypes";
import { Syllabus } from "../../interfaces/syllabusTypes";
import { syllabusGeneration } from "./syllabusGeneration";

export default function ChatBot() {
  const urlSimple = import.meta.env.VITE_CHATBOT_URL;
  const urlSyllabusSimple = import.meta.env.VITE_SYLLABUS_URL;
  const urlSyllabusComplex = import.meta.env.VITE_SYLLABUS_COMPLEX_URL;

  const { t } = useTranslation();

  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [isGeneratingSyllabus, setIsGeneratingSyllabus] =
    useState<boolean>(false);
  const [syllabusType, setSyllabusType] = useState<"simple" | "complex" | null>(
    null
  );
  const [syllabusStep, setSyllabusStep] = useState<number>(0);
  const [messageData, setMessageData] = useState<string>("");
  const [syllabus, setSyllabus] = useState<Syllabus>({
    subject: "",
    educational_program: "",
    specialty: "",
    level_of_education: "",
    language: "",
    abstract: "",
    goal: "",
    competencies: "",
    outcomes: "",
    content: "",
    methods: "",
    evaluation: "",
    literature: "",
  });
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

    let detectedSyllabusType: "simple" | "complex" | null = null;

    if (/^\s*(simple syllabus|простий силабус)\s*$/i.test(messageData)) {
      setSyllabusType("simple");
      detectedSyllabusType = "simple";
      setIsGeneratingSyllabus(true);
    } else if (/^\s*(complex syllabus|повний силабус)\s*$/i.test(messageData)) {
      setSyllabusType("complex");
      detectedSyllabusType = "complex";
      setIsGeneratingSyllabus(true);
    }

    setMessageData("");

    try {
      setMessagesArray((prev) => [
        ...prev,
        { id: prev.length, type: "student", message: messageData },
      ]);

      if (detectedSyllabusType) {
        setSyllabusType(detectedSyllabusType);
        setIsGeneratingSyllabus(true);
      }

      if (detectedSyllabusType !== null) {
        setTimeout(() => {
          setMessagesArray((prev) => [
            ...prev,
            {
              id: prev.length,
              type: "bot",
              message:
                "Для генерації силабусу Вам необхідно буде вказати певну інформацію",
            },
          ]);
        }, 500);

        if (detectedSyllabusType === "simple") {
          setTimeout(() => {
            setMessagesArray((prev) => [
              ...prev,
              {
                id: prev.length,
                type: "bot",
                message: "Вкажіть назву дисципліни:",
              },
            ]);
          }, 1000);
        }

        if (detectedSyllabusType === "complex") {
          setTimeout(() => {
            setMessagesArray((prev) => [
              ...prev,
              {
                id: prev.length,
                type: "bot",
                message: "Крок 1: вкажіть назву дисципліни",
              },
            ]);
          }, 1000);
        }

        setSyllabusStep(syllabusStep + 1);
      }

      syllabusGeneration(
        syllabusType,
        setIsWaiting,
        setSyllabusStep,
        setIsGeneratingSyllabus,
        setSyllabusType,
        setMessagesArray,
        urlSyllabusSimple,
        messageData,
        syllabusStep,
        setSyllabus,
        urlSyllabusComplex,
        syllabus,
        setMessageData
      );

      if (detectedSyllabusType === null && !isGeneratingSyllabus) {
        setIsWaiting(true);

        const response = await axios.post(urlSimple, {
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
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsWaiting(false);
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
