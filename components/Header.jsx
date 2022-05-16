import React, { useContext } from 'react';

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";

import IconButton from "@mui/material/IconButton"
import Home from "@mui/icons-material/Home"
//@components es un compilerOptions agegado en jsconfig.json
import MuiNextLink from "@components/MuiNextLink";
import Navbar from "@components/Navbar";
import SideDrawer from "@components/SideDrawer";
import HideOnScroll from "@components/HideOnScroll";


import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "@components/BackToTop";





const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

//Son los links para la barra de navegación
export const navLinks = [
  { title: `home`, path: `/` },
  { title: `about us`, path: `/about-us` },
  { title: `menu`, path: `/menu` },
  { title: `catering`, path: `/catering` },
  { title: `contact`, path: `/contact` },
];

const Header = () => {
  
  return (
    <>
      <HideOnScroll>      
        <AppBar position="fixed">
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{ display: `flex`, justifyContent: `space-between` }}
            >
              <IconButton edge="start" aria-label="home">
                <MuiNextLink activeClassName="active" href="/">
                  <Home
                    sx={{
                    color: (theme) => theme.palette.common.white,
                    }}
                    fontSize="large"
                  />
                </MuiNextLink>
              </IconButton>
              <Navbar navLinks={navLinks}/>
              <SideDrawer navLinks={navLinks}/>
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
