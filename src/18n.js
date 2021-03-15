import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { default as english } from './translations/translation-en.json';
import { default as croatian } from './translations/translation-hr.json';

function buildResource(language) {
  return {
    translation: language
  }
}

const DEFAULT_LANGUAGE = "hr";
export const resources = {
  en: buildResource(english),
  hr: buildResource(croatian)
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;