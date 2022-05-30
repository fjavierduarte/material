import React, { useContext } from 'react';


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//@components es un compilerOptions agegado en jsconfig.json
import Hero from '@components/Hero'
import SectionAbout from "@components/SectionAbout";
import SectionImage from "@components/SectionImage";
import NavigationCard from "@components/NavigationCard";
import ContextoUsuario from "@components/ContextoUsuario";

import useTranslation from  "../hooks/useTranslation";

const Homepage = () => {

  const { label } = useTranslation();

  return (
    <Container disableGutters = "true" maxWidth = "false">  
      <Hero
        imgSrc={label("index","heroImgSrc")}
        imgAlt={label("index","heroImgAlt")}
        title={label("index","heroTitle")}
        subtitle={label("index","heroSubtitle")}
      />
      <SectionAbout    
        imgSrc={label("index","SectionAboutImgSrc")}
        imgAlt={label("index","SectionAboutImgAlt")}
        title={label("index","SectionAboutTitle")}
        pompadour={label("index","SectionAboutPompadour")}
        buttonCaption={label("index","SectionAboutButtonCaption")}
        buttonHref={label("index","SectionAboutButtonHref")}           
      />
      <SectionImage 
        imgSrc={label("index","SectionImageImgSrc")}  
        imgAlt={label("index","SectionImgAlt")} 
      />
      <Container maxWidth="md" sx={{ my: 15 }}>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <NavigationCard
              imgSrc={label("index","Card01ImgSrc")}
              imgAlt={label("index","Card01ImgAlt")}
              title={label("index","Card01Title")}
              desc={label("index","Card01Desc")}
              pagePath={label("index","Card01PagePath")}
              ctaText={label("index","Card01CtaText")}
            />
          </Grid>
          <Grid container item justifyContent="center" xs={12} md={6}>
          <NavigationCard
              imgSrc={label("index","Card02ImgSrc")}
              imgAlt={label("index","Card02ImgAlt")}
              title={label("index","Card02Title")}
              desc={label("index","Card02Desc")}
              pagePath={label("index","Card02PagePath")}
              ctaText={label("index","Card02CtaText")}
            />            
          </Grid>
        </Grid>
      </Container>      
    </Container>
  );
};

export default Homepage;
