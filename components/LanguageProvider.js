import { createContext, useState } from "react"
import { useRouter} from 'next/router'

/**
     * Ver https://www.youtube.com/watch?v=-_XZCUIX284
     * vídeo sobre internacionalización y localización
     * y ver el archivo next.config.js
     */
export const LanguageContext = createContext([])

export const LanguageProvider = ({ children }) => {
  const { router } = useRouter();
  const { locale, locales, defaultLocale } = useRouter();

  /**
   * Setea currentLocale a defaultLocale, pero si locale se encuentra dentro de la 
   * lista de locales setea currentLocale a locale.
   * Baiscamente si tiene traducción la utiliza sino usa el ingles.
   */
  let [currentLocale, setLocale] = useState(defaultLocale);
  if(locales.includes(locale)){
    [currentLocale, setLocale] = useState(locale);  
  } 
  
  return (
    <LanguageContext.Provider value={[currentLocale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  )
}
