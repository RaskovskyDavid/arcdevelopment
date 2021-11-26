import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useMediaQuery } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import ButtonArrow from "./ui/ButtonArrow";
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("xs")]: {
            marginButton: "2em"
        }
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subtitle: {
        marginButton: "1em"
    },
    icon:{
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: "0"
        }
    },
    serviceContainer: {
        marginTop:"12em",
        [theme.breakpoints.down("xs")]: {
            padding: "25"
        }
    }
}))

export default function Services(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction="column">
        <Grid item > {/*-----iOS/Android Block -----*/}
                <Grid container direction="row"
                justify={matchesSM ? "center" : "flex-end"}
                 className={classes.serviceContainer}>
                    <Grid item style={{ textAlign: matchesSM ? "center": undefined}}>
                        <Typography variant="h4">
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle} >
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1" >
                            Integrate your web experience or create a standalone
                            app{matchesSM ? null: <br />}with either mobile platform.
                        </Typography>
                        <Button variant="outlined" 
                        component={Link} to="/mobileapps"
                        onClick={ () =>{ props.setValue(1); props.setSelectedIndex(2)}}
                        className={classes.learnButton}>
                        <span style={{marginRight: 10}} >Learn More</span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img className={classes.icon} alt="mobile phone icon" src={mobileAppsIcon} />
                    </Grid>
                </Grid>

            </Grid>
             <Grid item > {/*-----Custom Software development Block -----*/}
                <Grid container direction="row"
                justify={matchesSM ? "center" : undefined}
                 className={classes.serviceContainer}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center": undefined}}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle} >
                            Save Energy. Save Money.
                        </Typography>
                        <Typography variant="subtitle1" >
                            Complete digital solutions, from investigation to {" "}
                            <span className={classes.specialText}>celebration.</span>
                        </Typography>
                        <Button component={Link} to="/customsoftware"
                        onClick={ () => {props.setValue(1); props.setSelectedIndex(1)}}
                        variant="outlined" className={classes.learnButton}>
                        <span style={{marginRight: 10}} >Learn More</span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="custom software icon" src={customSoftwareIcon} />
                    </Grid>
                </Grid>

            </Grid>
            
            
            <Grid item > {/*----- Website  Block -----*/}
                <Grid container direction="row"
                justify={matchesSM ? "center" : "flex-end"}
                 className={classes.serviceContainer}>
                    <Grid item style={{ textAlign: matchesSM ? "center": undefined}}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle} >
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1" >
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button variant="outlined" 
                        component={Link} to="/websites"
                        onClick={ () =>{ props.setValue(1); props.setSelectedIndex(3)}}
                        className={classes.learnButton}>
                        <span style={{marginRight: 10}} >Learn More</span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img className={classes.icon} alt="website icon" src={websiteIcon} />
                    </Grid>
                </Grid>

            </Grid>
            
        </Grid>
    )
}