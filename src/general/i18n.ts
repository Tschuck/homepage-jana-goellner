import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import ChainedBackend from "i18next-chained-backend";

export const languageSessionKey = "session-lanuage";
export const languages = ["en", "de"];
let activeLanguage =
  window.sessionStorage.getItem(languageSessionKey) ||
  (window.navigator.language || "").toLowerCase().split("-")[0] ||
  "de";

if (!languages.includes(activeLanguage)) {
  activeLanguage = "de";
  window.sessionStorage.removeItem(languageSessionKey);
}

i18n
  .use(initReactI18next)
  .use(ChainedBackend)
  .init({
    backend: {
      backends: [LocalStorageBackend, HttpBackend],
      backendOptions: [
        {
          expirationTime: 1 * 24 * 60 * 60 * 1000, // 1 days
        },
        {
          loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
      ],
    },
    debug: true,
    fallbackLng: "de",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    lng: activeLanguage,
  });

export function setLanguage(language: string) {
  i18n.changeLanguage(language);
  window.sessionStorage.setItem(languageSessionKey, language);
}

export { i18n };
