import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import MuiNextLink from "@components/MuiNextLink";



const SectionAbout = (props) => {

  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Image
            src={props.imgSrc}
            alt={props.imgAlt}
            layout="responsive"
            width={800}
            height={600}
          />
        </Grid>
        <Grid item xs={12} sm={6} container flexDirection="column" justifyContent="center" alignItems="center">
          <Typography component="h2" variant="h4" textAlign="center" gutterBottom>
            {props.title}
          </Typography>
          <Typography textAlign="center" sx={{ mb: 5 }}>
                    {props.pompadour}
          </Typography> 
          <MuiNextLink href={props.buttonHref} underline="none">
            <Button variant="outlined" size="large">
              {props.buttonCaption}
            </Button>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;
