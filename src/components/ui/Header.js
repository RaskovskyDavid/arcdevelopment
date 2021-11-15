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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
      marginBottom: "7em",
      [theme.breakpoints.down("md")] : {
        marginBottom:"6.5em"
      },
      [theme.breakpoints.down("xs")] : {
        marginBottom:"5.25em"
      }
    },
    logo:{
      height: "8em",
      [theme.breakpoints.down("md")] : {
        height:"7em"
      },
      [theme.breakpoints.down("xs")] : {
        height:"5.5em"
      }
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
    },
    drawerIconContainerClass:{
      height: "50px",
      width: "50px"
    },
    drawerIconContainer:{
      marginLeft: "auto",
      "&:hover":{
        backgroundColor: "transparent"
      }
    },
    drawer:{
      backgroundColor: theme.palette.common.blue
    },
    drawerItem:{
      ...theme.typography.tab,
      color: "white"
    },
    drawerItemEstimate:{
      backgroundColor: theme.palette.common.orange

    }
    }
  ));

export default function Header(props){
  const classes = useStyles();
  const theme = useTheme();

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrware] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu]  = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  const handleChange = (e, newValue) => {
    setValue(newValue);
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

  const tabs = (
    <React.Fragment>
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

                 <Tab className={classes.tab} label="The Revolution" 
                 component={Link} to="/revolution" />
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
                open={openMenu}
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
    </React.Fragment>
    );

    const drawer = (
      <React.Fragment>
        <SwipeableDrawer 
        classes={{paper: classes.drawer}}
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS}
        open={openDrawer} 
        onClose={() => setOpenDrware(false)}
        onOpen={() => setOpenDrware(true)} >

        <List disablePadding>
          <ListItem onClick={()=> setOpenDrware(false)} divider button component={Link} to="/">
            <ListItemText className={classes.drawerItem} disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem onClick={()=> setOpenDrware(false)} divider button component={Link} to="/Services">
            <ListItemText className={classes.drawerItem}  disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem onClick={()=> setOpenDrware(false)} divider button component={Link} to="/revolution">
            <ListItemText className={classes.drawerItem}  disableTypography>The Revolution</ListItemText>
          </ListItem>
          <ListItem onClick={()=> setOpenDrware(false)} divider button component={Link} to="/about">
            <ListItemText className={classes.drawerItem}  disableTypography>About Us</ListItemText>
          </ListItem>
          <ListItem onClick={()=> setOpenDrware(false)} divider button component={Link} to="/contact">
            <ListItemText className={classes.drawerItem}  disableTypography>Contact Us</ListItemText>
          </ListItem>
          <ListItem 
          className={classes.drawerItemEstimate}
          onClick={()=> setOpenDrware(false)}
           divider button component={Link} to="/estimate">
            <ListItemText className={classes.drawerItem}  
            disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
        </SwipeableDrawer>
        <IconButton 
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrware(!openDrawer)} 
        disableRipple    >
          <MenuIcon className={classes.drawerIconContainerClass} />
        </IconButton>
      </React.Fragment>
    );
  
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
               {matches ? drawer : tabs}
            </Toolbar>
        </AppBar>
        </ElevationScroll>
       
        <div className={classes.toolbarMargin} />
        
        </React.Fragment>
    )

}