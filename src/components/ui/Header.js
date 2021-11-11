import React, { useEffect, useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

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
      root: {      
        toolbarMargin:{
          ...theme.mixins.toolbarMargin,
          marginBottom: "3em"
        },
        logo:{
          height: "8em"
        },
        logoContainer: {
          padding: 0,
          "&:hover":{
            backgroundColor:"transparent"
          }
        },
        tabContainer: {
          marginLeft: "auto",
          indicatorColor: "white"
        },
        tab: {
          ...theme.typography.tab,
          minWidth: 10,
          marginLeft: "25px",
          color: "white"
        
        },
        buttonstyle:{
          ...theme.typography.estimate,
          borderRadius: "50px",
          marginLeft: "50px",
          height: "45px",
          color:"white"
        }
    },
  
    toolbarMargin:{
      ...theme.mixins.toolbarMargin,
      marginBottom: "3em"
    },
    logo:{
      height: "7em"
    },
    logoContainer: {
      padding: 0,
      "&:hover":{
        backgroundColor:"transparent"
      }
    },
    tabContainer: {
      marginLeft: "auto",
      indicatorColor: "white"
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px",
      color: "white"
    
    },
    buttonstyle:{
      ...theme.typography.estimate,
      borderRadius: "50px",
      marginLeft: "50px",
      height: "45px",
      color:"white"
    }
    }
  ));

export default function Header(props){
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen]  = useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleChange = (e, value) => {
    setValue(value);
  };
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0)
    {
      setValue(0)
    } else if (window.location.pathname === "/services" && value !== 1)
    {
      setValue(1)
    } else if (window.location.pathname === "/revolution" && value !== 2)
    {
      setValue(2)
    } else if (window.location.pathname === "/about" && value !== 3)
    {
      setValue(3)
    } else if (window.location.pathname === "/contact" && value !== 4)
    {
      setValue(4)
    }
    else if (window.location.pathname === "/estimate" && value !== 5)
    {
      setValue(5)
    }
  }, [value]);
    return(
      <React.Fragment>
        <ElevationScroll>
        <AppBar position="fixed"  >
            <Toolbar disableGutters>
            <Button component={Link} to="/" 
            disableRipple="true"
            className={classes.logoContainer} 
             onClick={() => setValue(0) } >
               <img alt="company logo" className={classes.logo} src={logo} />
               </Button>
               <Tabs value={value} onChange={handleChange} 
                className={classes.tabContainer}>
                 <Tab className={classes.tab} label="Home" component={Link} to="/" />
                 <Tab 
                 aria-owns={anchorEl ? "simple-menu" : undefined}
                 aria-haspopup={anchorEl ? "true" : undefined}
                 onMouseOver={(e) => handleClick(e)}
                 
                 className={classes.tab}  
                 label="Services"
                 component={Link}
                  to="/Services" />

                 <Tab className={classes.tab} label="The Revolution" component={Link} to="/revolution" />
                 <Tab className={classes.tab} label="About Us" component={Link} to="/about" />
                 <Tab className={classes.tab} label="Contact Us" component={Link} to="/contact" />
               </Tabs>
               <Button variant="contained" color="secondary" 
               component={Link} to="/estimate" 
               className={classes.buttonstyle} disableElevation>
                Free Estimate
              </Button>
              <Menu id="simple-menu"
                MenuListProps={{onMouseLeave: handleClose}}
               anchorEl={anchorEl} open={open}
              onClose={handleClose} >
              <MenuItem onClick={() => {handleClose(); setValue(1)}}
              component={Link} to="/services" >
                Services
              </MenuItem>
              <MenuItem onClick={() => {handleClose(); setValue(1)}} component={Link} to="/customsoftware" >
                Custom Software Development
              </MenuItem>
              <MenuItem onClick={() => {handleClose(); setValue(1)}}  component={Link} to="/mobileapps"  >
                Mobile App Development
              </MenuItem>
              <MenuItem onClick={() => {handleClose(); setValue(1)}}  component={Link} to="/websites"  >
                Web Site Development
              </MenuItem>
              </Menu>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
       
        <div className={classes.toolbarMargin} />
        
        </React.Fragment>
    )

}