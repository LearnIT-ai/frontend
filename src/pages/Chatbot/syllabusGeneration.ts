import axios from "axios";
import { Syllabus } from "../../interfaces/syllabusTypes";

export const syllabusGeneration = async (
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
) => {
  const setSyllabusData = (
    syllabusInfo: Partial<Syllabus>,
    message: string
  ) => {
    setSyllabus((prev) => ({
      ...prev,
      ...syllabusInfo,
    }));

    setMessageData("");

    setTimeout(() => {
      setMessagesArray((prev) => [
        ...prev,
        {
          id: prev.length,
          type: "bot",
          message: message,
        },
      ]);
    }, 100);
    setSyllabusStep(syllabusStep + 1);
  };

  if (syllabusType === "simple") {
    setIsWaiting(true);
    setSyllabusStep(null);
    setIsGeneratingSyllabus(false);
    setSyllabusType(null);

    setTimeout(() => {
      setMessagesArray((prev) => [
        ...prev,
        {
          id: prev.length,
          type: "bot",
          message: "Ваш силабус генерується...",
        },
      ]);
    }, 500);

    try {
      const response = await axios.post(urlSyllabusSimple, {
        subject: messageData,
      });

      const formattedResponse = response.data.pdf_file;

      setMessagesArray((prev) => [
        ...prev,
        {
          id: prev.length,
          type: "bot",
          message: formattedResponse,
        },
      ]);

      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsWaiting(false);
    }
  }

  if (syllabusType == "complex") {
    switch (syllabusStep) {
      case 1: {
        setSyllabusData(
          { subject: messageData },
          "Крок 2: вкажіть назву освітньої програми"
        );
        break;
      }

      case 2: {
        setSyllabusData(
          { educational_program: messageData },
          "Крок 3: вкажіть назву спеціальності"
        );
        break;
      }

      case 3: {
        setSyllabusData(
          { specialty: messageData },
          "Крок 4: вкажіть рівень освіти"
        );
        break;
      }

      case 4: {
        setSyllabusData(
          { level_of_education: messageData },
          "Крок 5: вкажіть мову викладання"
        );
        break;
      }

      case 5: {
        setSyllabusData(
          { language: messageData },
          "Крок 6: вкажіть анотацію дисципліни"
        );
        break;
      }

      case 6: {
        setSyllabusData(
          { abstract: messageData },
          "Крок 7: вкажіть мету навчальної дисципліни"
        );
        break;
      }

      case 7: {
        setSyllabusData(
          { goal: messageData },
          "Крок 8: вкажіть загальні та фахові компетентності"
        );
        break;
      }

      case 8: {
        setSyllabusData(
          { competencies: messageData },
          "Крок 9: вкажіть результати навчання"
        );
        break;
      }

      case 9: {
        setSyllabusData(
          { outcomes: messageData },
          "Крок 10: вкажіть зміст курсу з поділом на лекції та лабораторні заняття (теми)"
        );
        break;
      }

      case 10: {
        setSyllabusData(
          { content: messageData },
          "Крок 11: вкажіть методи навчання"
        );
        break;
      }

      case 11: {
        setSyllabusData(
          { methods: messageData },
          "Крок 12: вкажіть оцінювання (баланс по модулях, практичні, контроль)"
        );
        break;
      }

      case 12: {
        setSyllabusData(
          { evaluation: messageData },
          "Крок 13: вкажіть рекомендовану літературу"
        );
        break;
      }

      case 13: {
        setIsWaiting(true);
        setSyllabusStep(null);
        setIsGeneratingSyllabus(false);
        setSyllabusType(null);

        setTimeout(() => {
          setMessagesArray((prev) => [
            ...prev,
            {
              id: prev.length,
              type: "bot",
              message: "Ваш силабус генерується...",
            },
          ]);
        }, 500);

        try {
          const response = await axios.post(urlSyllabusComplex, {
            subject: syllabus.subject,
            educational_program: syllabus.educational_program,
            specialty: syllabus.specialty,
            level_of_education: syllabus.level_of_education,
            language: syllabus.language,
            abstract: syllabus.abstract,
            goal: syllabus.goal,
            competencies: syllabus.competencies,
            outcomes: syllabus.outcomes,
            content: syllabus.content,
            methods: syllabus.methods,
            evaluation: syllabus.evaluation,
            literature: messageData,
          });

          setMessageData("");
          const formattedResponse = response.data.pdf_file;

          setMessagesArray((prev) => [
            ...prev,
            {
              id: prev.length,
              type: "bot",
              message: formattedResponse,
            },
          ]);

          console.log("Response from server:", response.data);
        } catch (error) {
          console.error("Error sending message:", error);
        } finally {
          setIsWaiting(false);
        }
        break;
      }
    }
  }
};
