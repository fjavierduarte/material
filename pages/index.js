import { useRouter } from 'next/router'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Hero from '@components/Hero'
import SectionAbout from "@components/SectionAbout";
import SectionImage from "@components/SectionImage";
import NavigationCard from "@components/NavigationCard";

import en from '../public/locales/en'
import es from '../public/locales/es'
import it from '../public/locales/it'


const Homepage = () => {
  return (
    <Container disableGutters = "true" maxWidth = "false">  
      <Hero
        imgSrc="/home-hero.jpg"
        imgAlt="satified woman eating in restaurant"
        title="The best of Italian food"
        subtitle="Best Italian Restaurant In Town"
      />
      <SectionAbout />
      <SectionImage imgSrc="/fusion-food.jpg" imgAlt="fusion foof" />
      <Container maxWidth="md" sx={{ my: 15 }}>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <NavigationCard
              imgSrc="/menu.jpg"
              imgAlt="food menu"
              title="Menu"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
              pagePath="./menu"
              ctaText="Check Out"
            />
          </Grid>
          <Grid container item justifyContent="center" xs={12} md={6}>
          <NavigationCard
              imgSrc="/catering.jpg"
              imgAlt="catering"
              title="Catering"
              desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minus."
              pagePath="./catering"
              ctaText="Find Out"
            />            
          </Grid>
        </Grid>
      </Container>      
    </Container>
  );
};

export default Homepage;
