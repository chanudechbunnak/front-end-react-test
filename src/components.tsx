// MyComponent.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const MyComponent: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('hello')}</h1>
      <p>{t('welcome')}</p>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('th')}>TH</button>
    </div>
  );
};

export default MyComponent;
