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
    },
    menuStyle:{
      backgroundColor: theme.palette.common.blue,
      color: "white",
      borderRadius: "0px"
    },
    menuItemStyle:{
      ...theme.typography.tab,
      opacity:0.7,
      "&:hover":{
        opacity: 1
      }

    }
    }
  ));

export default function Header(props){
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen]  = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleChange = (e, value) => {
    setValue(value);
  };
  const menuOptions = [{name: "Services", link: "/"}, 
  {name: "Custom Software Development", link: "/customsoftware"},
  {name: "Mobile App Development", link: "/mobileapps"},
  {name: "Website Development", link: "/websites"} 
  ]

  useEffect(() => {
    
    switch (window.location.pathname) {
      case "/":
         {
        if(value !== 0){
          setValue(0);
        }
        break;
      }
      
      case "/services":{
        if(value !== 1){
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      }
      case "/customsoftware":{
        if(value !== 1){
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      }
      case "/mobileapps":{
        if(value !== 1){
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      }
      case "/websites":{
        if(value !== 1){
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      }

      case "/revolution":{
        if(value !== 2){
          setValue(2);
       }
       break;
      }
    case "/about":{
      if(value !== 3){
        setValue(3);
      }    
      break;
    }
    case "/contact":{
      if(value !== 4){
       setValue(4);
     }     
     break;
    }
    case "/estimate":{
      if(value !== 5){
       setValue(5);
     }    
     break;    
    }
      default:{
        break;
      }
        
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
                classes={{paper: classes.menuStyle}}
                MenuListProps={{onMouseLeave: handleClose}}
                anchorEl={anchorEl} 
                open={open}
                elevation={0}
                onClose={handleClose} >
              {menuOptions.map((option, i) => (
                <MenuItem 
                key={option}
                component={Link} 
                classes={{root: classes.menuItemStyle}}
                onClick={(event) => {handleMenuItemClick(event, i); handleClose(); setValue(1)}}
                selected={i === selectedIndex && value === 1}
                to={option.link}>
                {
                  option.name
                }
                </MenuItem>
                )
              )}
              </Menu>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
       
        <div className={classes.toolbarMargin} />
        
        </React.Fragment>
    )

}