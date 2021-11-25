import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ButtonArrow from '../ui/ButtonArrow.js';
import Background from '../../assets/background.jpg';
import MobileBackground from '../../assets/mobileBackground.jpg';
const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
          }
    },
    backgroundStyle: {
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment:"fixed",
        height: "60em",
        width:"100%",
        [theme.breakpoints.down("md")]: {
            backgroundAttachment:"inherit",
            backgroundImage: `url(${MobileBackground})`
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height:80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
          },
          [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            marginRight: 0
          }
    }
}))

export default function CallToAction(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <React.Fragment>
    <Grid container 
        alignItems="center"
        justify= {matchesSM ? "center" : "space-between"} 
        direction={matchesSM ? "column" : "row"} 
        className={classes.backgroundStyle} >
        <Grid item style={{ marginLeft: matchesSM ? "0" : "5em", textAlign: matchesSM ? "center" : "inherit" }}>
            <Grid container direction="column">
            <Grid item>
                <Typography variant="h2">
                    Simple Software.<br />Revolutionary Results.
                </Typography>
                <Typography variant="subtitle2" style={{fontSize: "1.5rem"}}>
                Take advantage of the 21st Century.
                </Typography>
                <Grid container 
                    justify={matchesSM ? "center" : undefined} item>
                    <Button  
                    onClick={ () =>{ props.setValue(2)}}
                            variant="outlined" className={classes.learnButton} >
                        <span style={{marginRight: 5}} >Learn More</span> 
                            <ButtonArrow 
                                 width={10} 
                                 height={10}
                                 fill= {theme.palette.common.blue} />
                            </Button>
                </Grid>
            </Grid>

            </Grid>
        </Grid>
        <Grid item justify="center" >
            <Button
            component={Link} to="/estimate"
            onClick={ () =>{ props.setValue(5)}}
             variant="contained" 
                className={classes.estimateButton} >
                Free Estimate
            </Button>
        </Grid>
        
    </Grid> 
    </React.Fragment>
    )
    
    
    
}