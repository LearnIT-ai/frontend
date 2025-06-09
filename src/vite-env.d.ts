/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_LOGIN_URL: string;
  readonly VITE_SIGNUP_URL: string;
  readonly VITE_CHATBOT_URL: string;
  readonly VITE_LECTURE_URL: string;
  readonly VITE_SYLLABUS_URL: string;
  readonly VITE_SEND_TEXT_URL: string;
  readonly VITE_SEND_FILE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
