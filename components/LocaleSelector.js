
import * as React from 'react';
//import { useContext } from "react"
import { useRouter } from 'next/router'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import useTranslation from  "../hooks/useTranslation";
/**
 * @see https://mui.com/material-ui/react-select/
 */
export default function LocaleSelector(props) {
  const { push , pathname } = useRouter(); //ver https://nextjs.org/docs/api-reference/next/router
  const { label, locale, locales, defaultLocale } = useTranslation();//Es la función de traducción
  
  //const currentLanguage = label("localeSelector", "currentLanguage");
  //let locale = label("localeSelector", "currentLocale");
  //console.log("Primera carga del lenguaje actual " + currentLanguage);
  //console.log("Primera carga del locale actual " + currentLocale);
  const formHelperText =  label("localeSelector", "formHelperText");//Texto de ayuda
  const languages = label("localeSelector", "languages");
  //console.log("languages " + languages);
  

  const handleChange = (event) => {
    //console.log("value es " + event.target.value);
    //setLanguage(event.target.value);//Cambia el valor del locale
    //updateLocale(event.target.value);
    push(pathname, pathname, {locale: event.target.value});
    //props.onChange();
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={locale}
          onChange={handleChange}
          displayEmpty
          variant='filled'
          inputProps={{ 'aria-label': 'Without label' }} 
        >
          {languages.map(({locale, language }) => (         
            <MenuItem value={locale}>{language}</MenuItem>
          ))}
        </Select>
        <FormHelperText>{formHelperText}</FormHelperText>
      </FormControl>
    </div>
  );
}
