import { createTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import blue from '@material-ui/core/colors/blue';

const arcBlue ="#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686"
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
          main: arcOrange
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
      subtitle1: {
        fontSize:"1.75rem",
        fontWeight: 300,
        color: `${arcGrey}`,
      },
      estimate:{
        fontFamily: "Pacifico",
        fontSize: "1rem",
        textTransform: "none",
        color:"white"
      },
      learnButton: {
          borderColor: arcBlue,
          color: arcBlue,
          borderwidth: 2,
          borderRadius: 50,
          fontFamily: "Roboto",
          fontWeight: "bold",
          textTransform: "none"
      }
    }
  });

  export default theme;