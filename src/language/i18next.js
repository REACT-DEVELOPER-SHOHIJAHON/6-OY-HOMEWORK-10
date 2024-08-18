import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import i18n from "i18next";

const languages = ["uz", "ru", "en"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    supportedLngs: languages,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["cookie", "localStorage", "sessionStorage", "navigator"],
      caches: ["cookie", "localStorage"],
      lookupCookie: "lang",
      lookupLocalStorage: "lang",
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
