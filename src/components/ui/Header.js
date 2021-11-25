import React, { useEffect, useMemo, useState } from "react";
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
// import ListItemIcon from '@material-ui/core/ListItemIcon';
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
      color:"white",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light
      }
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
    },
    drawerItemSelectedStyle:{
      "& .MuiListItemText-root": {
        opacity: 1
      }
    },
    appbar:{
      zIndex: theme.zIndex.modal + 1
    }
    }
  ));

export default function Header(props){
  const classes = useStyles(props);
  const theme = useTheme();

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrware] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  // change to work in to app.js
  // const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu]  = useState(false);
  // change to work into app.js
  // const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };
  const menuOptions =useMemo( () => [
    {name: "Services", link: "/Services", activeIndex: 1, selectedIndex: 0},
    {name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1},
    {name: "iOS/Android App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2},
    {name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3} 
  ], []);
  const routes =  useMemo( (anchorEl) =>[
    {name: "Home", link: "/", activeIndex: 0}, 
    {name: "Services", link: "/Services", activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined, 
      ariapopup: anchorEl ? "true" : undefined ,
      onMouseOver:(e) => handleClick(e)
    },
    {name: "The Revolution", link: "/revolution", activeIndex: 2},
    {name: "About Us", link: "/about", activeIndex: 3}, 
    {name: "Contact Us", link: "/contact", activeIndex: 4}
    ],[]);
  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname){
        case `${route.link}`:
          if (props.value !== route.activeIndex){
            props.setValue(route.activeIndex)
            if (route.selectedIndex && route.selectedIndex !== props.selectedIndex){
              props.setSelectedIndex(route.selectedIndex)
            }
          }
          break;
        case "/estimate"  : 
          props.setValue(5);
          break;
        default:
          break;
      }
    })
    
  }, [props.value, menuOptions, props.selectedIndex, routes, props]);

  const tabs = (
    <React.Fragment>
      <Tabs value={props.value} 
      onChange={handleChange} 
                className={classes.tabContainer}
                indicatorColor="primary">
                {routes.map((route, index) =>(
                  <Tab key={`${route}${index}`}
                  className={classes.tab} component={Link}
                  to={route.link} label={route.name}
                  aria-owns={route.ariaOwns}
                  aria-haspopup={route.ariapopup}
                  onMouseOver={route.onMouseOver} />
                ))}                    
                 
               </Tabs>
               <Button variant="contained" color="secondary" 
               component={Link} to="/estimate" 
               className={classes.buttonstyle}
                disableElevation
                onClick={() => props.setValue(5)} >
                Free Estimate
              </Button>
              <Menu id="simple-menu"
                style={{zIndex: 1302}}
                classes={{paper: classes.menuStyle}}
                MenuListProps={{onMouseLeave: handleClose}}
                anchorEl={anchorEl} 
                open={openMenu}
                elevation={0}
                onClose={handleClose} >
              {menuOptions.map((option, i) => (
                <MenuItem 
                keepMounted
                key={`${option}`}
                component={Link} 
                classes={{root: classes.menuItemStyle}}
                onClick={(event) => {handleMenuItemClick(event, i); handleClose(); 
                props.setValue(1)}}
                selected={i === props.selectedIndex && props.value === 1}
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
        <div className={classes.toolbarMargin} />
        <List disablePadding>
        {routes.map(route => (
          <ListItem
          key={`${route}${route.activeIndex}`}
           divider button component={Link} to={route.link}
          selected={props.value === route.activeIndex}
          classes={{selected: classes.drawerItemSelectedStyle}}
           onClick={() => {setOpenDrware(false); props.setValue(route.activeIndex)}}>
            <ListItemText 
            className={ classes.drawerItem} 
            disableTypography>
              {route.name}
            </ListItemText>
          </ListItem>
        ))}
          
          <ListItem selected={props.value === 5} 
          className={classes.drawerItemEstimate}
          onClick={()=> {setOpenDrware(false);  props.setValue(5)}}
           divider button component={Link} to="/estimate">
            <ListItemText 
            className={ {root: classes.drawerItemEstimate, selected: classes.drawerItemSelectedStyle}}  
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
        <AppBar className={classes.appbar} position="fixed"  >
            <Toolbar disableGutters>
            <Button component={Link} to="/" 
            disableRipple="true"
            className={classes.logoContainer} 
             onClick={() => props.setValue(0) } >
               <img alt="company logo" className={classes.logo} src={logo} />
               </Button>
               {matches ? drawer : tabs}
            </Toolbar>
        </AppBar>
        </ElevationScroll>
       
        <div className={classes.toolbarMargin} />
        
        </React.Fragment>
    );

}