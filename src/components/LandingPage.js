import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import animationData from '../animations/landinganimation/data.js';

import ButtonArrow from './ui/ButtonArrow.js';

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21en",
        marginTop: "2em",
        marginLeft: "10%"
    }
}) );

export default function LandingPage() {
    const classes  = useStyles();
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="column">
            <Grid item>
                <Grid container justify="flex-end" alignItems="center" direcction="row">
                    <Grid sm item>
                        <Typography align="center" variant="h2">
                        Bringing west Coast Technology<br />
                         to the Midewest</Typography>
                        <Grid container>
                            <Grid item>
                                <Button variant="contained">
                                    Free Estimate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined">
                                    Learn More
                                    <ButtonArrow width={15} height={15}
                                    fill="red" />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie  options={defaultOptions} height={"100%"} width={"100%"} /> 
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        );
}