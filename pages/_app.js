import React from 'react';
import Head from 'next/head';
import { useRouter } from "next/router"

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';

import "/styles/globals.css";
import theme from '../styles/theme';//Selecciona los colores elegidos para el diseño.

import Header from "@components/Header";
import Footer from "@components/Footer";
import { ProviderUsuario } from "@components/ContextoUsuario";
//import { LanguageProvider } from "@components/LanguageProvider";

import useTranslation from  "../hooks/useTranslation";
import { Paper } from '@mui/material';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


export default function MyApp(props) {
    /**Llama a labels par obtener todas la leyendas de la página */
    const { label } = useTranslation();
   
    const headTitle =  label("app", "headTitle");//Recupera el nombre de la barra del navegador por defecto
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{headTitle}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>

        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header/>
        <Component {...pageProps} />
        <Footer/>

      </ThemeProvider>
    </CacheProvider>
  );
}