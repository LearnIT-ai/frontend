import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: false,
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    ns: [
      "common",
      "translation",
      "account",
      "submitAssignment",
      "errors",
      "checkSimilarity",
    ],
    defaultNS: "translation",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });
