import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography'
import Stack from "@mui/material/Stack";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import MuiNextLink from "@components/MuiNextLink";


const Footer = () => {
  /* 
  !Cambiar las URL (href) de las redes sociales
  */
  return <Box component="footer" sx={{ py: 5, bgcolor: "primary.main" }}>
    <Stack
      direction="row"
      justifyContent="center"
      spacing={4}
      sx={{ mb: 5 }}
    >
      <MuiNextLink
        sx={{ textDecoration: "none", color: "common.white" }}
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        >
        <Facebook fontSize="large" />
      </MuiNextLink>  
      <MuiNextLink
        sx={{ textDecoration: "none", color: "common.white" }}
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter fontSize="large" />
      </MuiNextLink>
      <MuiNextLink
        sx={{ textDecoration: "none", color: "common.white" }}
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram fontSize="large" />
      </MuiNextLink>   
      <MuiNextLink
        sx={{ textDecoration: "none", color: "common.white" }}
        href="https://www.google.com/"
        target="_blank"
        rel="noo99pener noreferrer"
      >
        <YouTube fontSize="large" />
      </MuiNextLink>          
    </Stack>  
    <Typography align="center" color="common.white">
      © 1994 - {new Date().getFullYear()}, De West Sakura Restaurant
    </Typography>    
  </Box>;
};

export default Footer;