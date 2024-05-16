// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import thTranslation from './th.json';
import enTranslation from './en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      th: {
        translation: thTranslation,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
