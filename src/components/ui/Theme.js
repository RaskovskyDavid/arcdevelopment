import { createTheme } from '@mui/material/styles';
import { orange, blue } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      common: {
          blue: blue[500],
          orange: orange[500]
      },
      primary: {
          main: blue[500]
        },
      secondary: {
          main: orange[500]
        },
    },
    typography: {
      tab: {
        fontFamily: "Raleway",
        textTransform: "none",
        fontWeight: 700,
        fontSize: "1rem"
      }
    }
  });

  export default theme;