import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

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
      toolbarMargin:{
        ...theme.mixins.toolbarMargin
      }
    }
  ));

export default function Header(props){
  const classes = useStyles();
    return(
      <React.Fragment>
        <ElevationScroll>
        <AppBar position="fixed" color="primary">
            <Toolbar>
              <Typography variant="h3" >
                Arc Development
              </Typography>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        
        <div className={classes.toolbarMargin} />
         
        </React.Fragment>
    )

}