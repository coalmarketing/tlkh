import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import LanguageDetector from "i18next-browser-languagedetector";
// add lang detector later on if needed

import translationEN from "../locales/en.json";
import translationCZ from "../locales/cz.json";

const SUPPORTED_LANGUAGES = {
  "en": {
    translation: translationEN,
    code: "en-US",
  },
  "cs-CZ": {
    translation: translationCZ,
    code: "cs-CZ",
  },
  "cs": {
    translation: translationCZ,
    code: "cs",
  },
};

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    resources: SUPPORTED_LANGUAGES,
    react: {
      useSuspense: false,
    },
    fallbackLng: "en",
  });

export default i18n;