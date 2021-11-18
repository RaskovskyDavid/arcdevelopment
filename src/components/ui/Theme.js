import { createTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';
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
      },
      h2:{
        fontFamily:"Raleway",
        fontWeight: 700,
        fontSize:"2.5rem",
        color: blue[500],
        lineHeight: "1.5"
      },
      h3:{
        fontFamily:"Pacifico",
        fontSize:"2.5rem",
        color: blue[500]
      },
      h4:{
        fontFamily:"Raleway",
        fontSize:"1.75rem",
        color: blue[500],
        fontWeight: 700
      },
      estimate:{
        fontFamily: "Pacifico",
        fontSize: "1rem",
        textTransform: "none",
        color:"white"
      }
    }
  });

  export default theme;