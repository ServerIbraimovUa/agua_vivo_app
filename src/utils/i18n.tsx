import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import translationEN from "../locales/en/translation.json";
import translationUA from "../locales/ua/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ua: {
    translation: translationUA,
  },
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  resources,
  lng: "ua",
});
export default i18n;
