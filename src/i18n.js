import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import du from "./locals/du.json";
import en from "./locals/en.json";

const resources = {
  en: {
    translation: en,
  },
  du: {
    translation: du,
  },
};

const lang = localStorage.getItem("lang");

i18n.use(initReactI18next).init({
  resources,
  lng: lang ? lang : "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
