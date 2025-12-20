import { createContext, useContext, useState, ReactNode } from "react";
import { translations, serviceTranslations, type Language } from "./translations";

type Translations = (typeof translations)["en"] | (typeof translations)["sv"];
type ServiceTranslations = (typeof serviceTranslations)["en"] | (typeof serviceTranslations)["sv"];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  st: ServiceTranslations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    st: serviceTranslations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}