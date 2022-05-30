import React, { useContext } from 'react';

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton"
import Home from "@mui/icons-material/Home"
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

//@components es un compilerOptions agegado en jsconfig.json
import MuiNextLink from "@components/MuiNextLink";
import Navbar from "@components/Navbar";
import SideDrawer from "@components/SideDrawer";
import HideOnScroll from "@components/HideOnScroll";
import BackToTop from "@components/BackToTop";

import useTranslation from  "../hooks/useTranslation";
import LocaleSelector from './LocaleSelector';


const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);



const Header = () => {
  /**Llama a labels par obtener todas la leyendas de la página */
  const { label } = useTranslation();
  /**Recupera los menu items */
  const navLinks =  label("menuOptions", "menu");
  /**Establec desde donde se deslizara el menu*/
  const menuOrientation = "left";

  return (
    <>
      <HideOnScroll>      
        <AppBar position="fixed">
          <Toolbar>
            <Container maxWidth="lg" sx={{ display: `flex`, justifyContent: `space-between` }}>
              <Navbar navLinks={navLinks}/>
              <SideDrawer navLinks={navLinks} menuOrientation={menuOrientation}/>
              <LocaleSelector/>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>  

      <Offset id="back-to-top-anchor"/>
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
