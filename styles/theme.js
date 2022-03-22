import { createTheme, responsiveFontSizes } from "@mui/material/styles";
/**Los colores de material ui palette
 * red; pink; purple; deepPurple; indigo; 
 * blue; lightBlue; cyan; teal; green; lightGreen; 
 * lime; yellow; amber; orange; deepOrange; brown;
 * grey; blueGrey.
 * Se importan los colores antes de usarlos.
 * */

import { deepPurple, amber, blue, darkBlue} from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: blue,
    secondary: amber,
  },
});

theme = responsiveFontSizes(theme);

export default theme;