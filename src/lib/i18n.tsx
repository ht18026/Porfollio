import React, { createContext, useContext, useState, useEffect } from 'react';

type Locale = 'en' | 'zh';

interface Translations {
  [key: string]: {
    [key in Locale]: string;
  };
}

const translations: Translations = {
  nav_home: { en: 'Home', zh: '首页' },
  nav_about: { en: 'About', zh: '关于' },
  nav_experience: { en: 'Experience', zh: '经历' },
  nav_projects: { en: 'Projects', zh: '项目' },
  nav_games: { en: 'Games', zh: '游戏' },
  nav_blog: { en: 'Blog', zh: '博客' },
  nav_media: { en: 'Media', zh: '媒体' },
  nav_contact: { en: 'Contact', zh: '联系' },
  hero_title: { en: 'Xijia Wang', zh: '王希佳' },
  hero_subtitle: { en: 'Software Engineer · Indie Studio Founder · LLM Researcher', zh: '软件工程师 · 独立游戏工作室创始人 · 大语言模型研究员' },
  cta_projects: { en: 'View Projects', zh: '查看项目' },
  cta_cv: { en: 'Download CV', zh: '下载简历' },
  about_title: { en: 'About Me', zh: '关于我' },
  exp_title: { en: 'Work & Experience', zh: '工作与经历' },
  projects_title: { en: 'Technical Projects', zh: '技术项目' },
  games_title: { en: 'Creative Projects', zh: '创意与游戏' },
  media_title: { en: 'Self-Media', zh: '自媒体' },
  blog_title: { en: 'Blog', zh: '文章' },
};

interface I18nContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('en');

  const t = (key: string) => {
    return translations[key]?.[locale] || key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
};
