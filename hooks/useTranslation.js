//import { useContext } from "react"

import { useContext, createContext, useState } from "react"
//import { LanguageContext } from "@components/LanguageProvider";
import { useRouter} from 'next/router'

import en from "@locales/en";
import es from "@locales/es";
import it from "@locales/it";


export default function useTranslation() {
  //let [currentLocale] = useContext(LanguageContext);
  const { locale, locales, defaultLocale } = useRouter();
  let currentLocale = locale;

/*
  function changeLocale(newLocale){
    [currentLocale, setLocale] = useState(newLocale);  
  }
*/
  function label(page, key){
    let language;

    switch (currentLocale) {
      case 'en':
        //Localización Ingles
        language = en;
        break;
      case 'es':
        //Localización Español
        language = es;
        break;
      case 'it':
        //Localización Italiano
        language = it;
        break;
      default:
        language = en;
        break;
    }
    
    if (typeof language[page] === 'undefined'){
      console.warn(`The page '${page}' in the locale '${currentLocale}' not exist`);
      return "Error";   
    } else {
      if (typeof language[page][key] === 'undefined') {
        return "Error";      }
    }
    /**Si existe la pagina y la clave la muestra */
    return language[page][key];
  }

 

  return { label, locale, locales, defaultLocale }
}


