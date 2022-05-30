import { createTheme, responsiveFontSizes } from "@mui/material/styles";
/**Los colores de material ui palette
 * red; pink; purple; deepPurple; indigo; 
 * blue; lightBlue; cyan; teal; green; lightGreen; 
 * lime; yellow; amber; orange; deepOrange; brown;
 * grey; blueGrey.
 * Se importan los colores antes de usarlos.
 * */

import { deepPurple, amber, blue, lightBlue, lightGreen, pink} from "@mui/material/colors";
import { Typography } from "@mui/material";

// Create a theme instance.
let theme = createTheme({
  palette: {
    
    primary: {
      main: pink[500],
      light: "rgb(144,128,100)",
      contrastText: "#1565c0",
    },
    secondary: blue,
    text: {
      primary: "rgba(80,255,80,0.9)",
      secondary: "rgba(0,100,0,0.9)",
    },
  
  },
});

theme = responsiveFontSizes(theme);

export default theme;