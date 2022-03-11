import Container from "@mui/material/Container";
import Hero from '@components/Hero'

const Homepage = () => {
  return (
    <Container disableGutters = "true" maxWidth = "false">  
      <Hero
        imgSrc="/home-hero.jpg"
        imgAlt="satified woman eating in restaurant"
        title="The best of Italian food"
        subtitle="Best Italian Restaurant In Town"
      />
    </Container>
  );
};

export default Homepage;
