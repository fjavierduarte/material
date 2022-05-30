import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import MuiNextLink from "./MuiNextLink";
import { useState } from "react";

import theme from '../styles/theme';//Selecciona los colores elegidos para el diseño.

const SideDrawer = ({ navLinks, menuOrientation }) => {
  const menuDisplayDirection = menuOrientation; //Es la dirección en la cual se desplegará el menu
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, marginTop: `auto`, marginBottom: `auto` }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      theme={ theme }
    >
      {navLinks.map(({ title, path }, i) => (
        <Typography
          variannt="button"
          key={`${title}${i}`}
          sx={{
            ml: 5,
            my: 2,
            textTransform: `uppercase`,
          }}
        >
          <MuiNextLink sx={{ color: "common.white" }}  href={path}>
            {title}
          </MuiNextLink>
        </Typography>
      ))}
    </Box>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer(menuDisplayDirection, true)}
        sx={{
          color: `common.white`,
          display: { xs: `inline`, md: `none` },
        }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        anchor={menuDisplayDirection}
        open={state[menuDisplayDirection]}
        onClose={toggleDrawer(menuDisplayDirection, false)}
        sx={{
          ".MuiDrawer-paper": {
            bgcolor: "primary.main",
          },
        }}
      >
        {list(menuDisplayDirection)}
      </Drawer>
    </>
  );
};

export default SideDrawer;
