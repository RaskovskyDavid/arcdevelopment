import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  } 
  const useStyles = makeStyles( theme => (
    {
      root:{
        textTransform: "none"
      },
      toolbarMargin:{
        ...theme.mixins.toolbarMargin,
        marginBottom: "3em"
      },
      logo:{
        height: "7em"
      },
      tabContainer: {
        marginLeft: "auto"
      },
      tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
        color: "white"
       
      }
    }
  ));

export default function Header(props){
  const classes = useStyles();
    return(
      <React.Fragment>
        <ElevationScroll>
        <AppBar position="fixed">
            <Toolbar disableGutters>
               <img alt="company logo" className={classes.logo} src={logo} />
               <Tabs className={classes.tabContainer}>
                 <Tab className={classes.tab} label="Home" />
                 <Tab className={classes.tab} label="Services" />
                 <Tab className={classes.tab} label="The Revolution" />
                 <Tab className={classes.tab} label="About Us" />
                 <Tab className={classes.tab} label="Contact Us" />
               </Tabs>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
       
        <div className={classes.toolbarMargin} />
        
        </React.Fragment>
    )

}