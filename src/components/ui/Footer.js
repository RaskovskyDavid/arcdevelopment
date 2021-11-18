import React from  'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import footerAdornment from '../../assets/Footer Adornment.svg';
import { Link } from "react-router-dom";
const useStyles = makeStyles( theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]:{
            width: "21em"
        },
        [theme.breakpoints.down("xs")]:{
            width: "15em"
        }
    },
    mainContainer:{
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem:{
        margin:"3em"
    }
}));
export default function Footer(props) {
    const classes = useStyles()
    return (<footer className={classes.footer}>
    <Grid container justify="center" className={classes.mainContainer}>
        <Grid item  className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
                <Grid item component={Link} to="/" 
                onClick={() => props.setValue(0)}
                className={classes.link}> 
                Home
                </Grid>
            </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
                <Grid component={Link} to="/Services" item 
                onClick={() => {props.setValue(1); props.setSelectedIndex(0)}}
                className={classes.link} >
                    Services
                </Grid>
                <Grid component={Link} to="/customsoftware" item
                 onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}
                 className={classes.link} >
                    Custom Software Development
                </Grid>
                <Grid item component={Link} to="/mobileapps"
                    onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}
                 className={classes.link} >
                    Mobile App Development
                </Grid>
            
                <Grid item component={Link} to="/websites"
                    onClick={() =>{props.setValue(1); props.setSelectedIndex(3)}}
                    className={classes.link} >
                    Website Development
                </Grid>
            </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
                <Grid item component={Link} to="/revolution"
                    onClick={() => props.setValue(2)}
                    className={classes.link} >
                    The Revolution
                </Grid>
                <Grid item component={Link} to="/revolution"
                    onClick={() => props.setValue(2)}
                    className={classes.link} >
                    Vision
                </Grid>
                <Grid item component={Link} to="/revolution"
                    onClick={() => props.setValue(2)}
                    className={classes.link} >
                    Technology
                </Grid>
                <Grid item component={Link} to="/revolution" 
                    onClick={() => props.setValue(2)}
                    className={classes.link} >
                    Process
                </Grid>
            </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
                <Grid item component={Link} to="/about"
                    onClick={() => props.setValue(3)} 
                    className={classes.link} >
                    About Us
                </Grid>
                <Grid item component={Link} to="/about"
                    onClick={() => props.setValue(3)} 
                    className={classes.link} >
                    History
                </Grid>
                <Grid item component={Link} to="/about" 
                    onClick={() => props.setValue(3)} 
                    className={classes.link} >
                    Team
                </Grid>
            </Grid>
        </Grid>
        <Grid item  className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
                <Grid item component={Link} to="/contact" 
                    onClick={() => props.setValue(4)} 
                    className={classes.link} >
                    Contact Us
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    <img alt="black decorative slash" src={footerAdornment} className={classes.adornment} />
    </footer>);
}