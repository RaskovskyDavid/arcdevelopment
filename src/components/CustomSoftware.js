import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core';
import { Grid } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import theme from './ui/Theme';
import BackArrow from '../assets/backArrow.svg';
import ForwardArrow from '../assets/forwardArrow.svg';
import Lightbulb from '../assets/bulb.svg';
import Cash from '../assets/cash.svg';
import Stopwatch from '../assets/stopwatch.svg';
import documentsAnimation from '../animations/documentsAnimation/data.js';
import scaleAnimation from '../animations/scaleAnimation/data.json';
import automationAnimation from '../animations/automationAnimation/data.json';
import uxAnimation from '../animations/uxAnimation/data';
import roots from '../assets/root.svg';

const useStyles = makeStyles(theme => ({
    heading:{
        maxWidth:"40em"
    },
    arrowContainer:{
        marginTop:"0.5em"
    },
    mainContainer:{
        paddingLeft: "5em",
        paddingRight: "5em",
        paaddingTop: "2em",
        paddingBottom: "10em"

    },
    itemContainer:{
        maxWidth: "40em"
    }
}));

export default function Customsoftware(props){
    const classes  = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const documentstOptions = {
        loop: true,
        autoplay: true, 
        animationData: documentsAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const scaletOptions = {
        loop: true,
        autoplay: true, 
        animationData: scaleAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const automationOptions = {
        loop: true,
        autoplay: true, 
        animationData: automationAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const uxtOptions = {
        loop: true,
        autoplay: true, 
        animationData: uxAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item container direction="row" justify={matchesMD ? "center": undefined } >
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} 
                        style={{marginRight:"1em", marginLeft:"3.5em"}}>
                        <IconButton component={Link} to="/Services"
                        onClick={() => props.setSelectedIndex(0)}
                        style={{backgroundColor:"transparent"}}>
                            <img src={BackArrow} alt="Back to Services Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
                
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item >
                        <Typography variant="h2"
                        align={matchesMD ? "center" : undefined} >
                            Custom Software Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph
                        align={matchesMD ? "center" : undefined} >
                        Whether we???re replacing old software or inventing new solutions,
                         Arc Development is here to help your business tackle technology.
                        </Typography>
                        <Typography variant="body1" paragraph
                        align={matchesMD ? "center" : undefined} >
                        Using regular commercial software leaves you with a lot of stuff you don???t need, without some of the stuff you do need, and ultimately controls the way you work.
                        Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.
                        </Typography>
                        <Typography variant="body1" paragraph
                        align={matchesMD ? "center" : undefined} >
                        Our custom solutions are designed from the ground up with your needs, 
                        wants, and goals at the core. 
                        This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.
                        </Typography>
                        <Typography variant="body1" paragraph
                        align={matchesMD ? "center" : undefined} >
                        We create exactly what you what, exactly how you want it.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton onClick={() => props.setSelectedIndex(2)}
                        component={Link} to="/mobileapps"
                        style={{backgroundColor:"transparent"}}>
                            <img src={ForwardArrow} alt="Forward to Services Page" />
                        </IconButton>
                    </Grid>
                </Hidden>

            </Grid>
            <Grid item container direction="row"
            style={{marginTop:"15em", marginBottom:"20em"}}
             justifyContent="center">
                <Grid item container direction="column" md
                alignItems="center"
                style={{maxWidth: "40em"}} >
                    <Grid item>
                        <Typography variant="h4">
                            Save Energy
                        </Typography>
                    </Grid>  
                    <Grid item>
                        <img src={Lightbulb} alt="lightbulb" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md
                alignItems="center"
                style={{maxWidth: "40em",
                 marginTop: matchesSM ? "10em": 0, 
                 marginBottom: matchesSM ? "10em": 0}} >
                    <Grid item>
                        <Typography variant="h4">
                            Save Time
                        </Typography>
                    </Grid>  
                    <Grid item>
                        <img src={Stopwatch} alt="stopwatch" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md 
                alignItems="center"
                style={{maxWidth: "40em"}} >
                    <Grid item>
                        <Typography variant="h4">
                            Save Money
                        </Typography>
                    </Grid>  
                    <Grid item>
                        <img src={Cash} alt="cash" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container
             alignItems={matchesMD ? "center": undefined}
             direction={matchesMD ? "column" : "row" } 
            justify="space-between" >
                <Grid item container className={classes.itemContainer}
                style={{marginBottom: matchesMD ? "15em": 0}} md>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" >
                                Digital Documents & Data
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                            Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                            Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                            By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={documentstOptions} 
                        style={{maxHeight: 275, maxWidth: 275, minHeight: 250 }} />
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer} md>
                <Grid item md>
                        <Lottie options={scaletOptions} 
                        style={{maxHeight: 260, maxWidth: 280 }} />
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align="right" >
                                Scale
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1"  align="right" paragraph>
                            Whether you???re a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.
                            </Typography>
                        </Grid>
                        
                    </Grid>
                   
                </Grid>
            </Grid>
            <Grid item container direction="row" 
            style={{marginTop: "20em", marginBottom: "20em"}}>
                <Grid item container direction="column" alignItems="center">
                    <Grid item>
                        <img src={roots} alt="tree with roots extending out"
                        height="450em" width="450em" />
                    </Grid>
                    <Grid item className={classes.itemContainer} >
                        <Typography variant="h4" guetterBottom> 
                            Root-Cause Analysis
                        </Typography>
                        <Typography variant="body1" paragraph> 
                            Many problems are merely symptoms of larger, underlying issues.
                        </Typography>
                        <Typography variant="body1" paragraph> 
                            We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container  justify="space-between" 
            alignItems={matchesMD ? "center": undefined}
             direction={matchesMD ? "column" : "row" } 
            style={{marginBottom: "10em"}} >
                <Grid item container className={classes.itemContainer}
                style={{marginBottom: matchesMD ? "15em": 0}} md>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" >
                               Automation
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                            Why waste time when you don???t have to?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                            We can help you identify processes with time or event based actions which can now easily be automated.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                            Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={automationOptions} 
                        style={{maxHeight: 290, maxWidth: 280 }} />
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer} md>
                <Grid item md>
                        <Lottie options={uxtOptions} 
                        style={{maxHeight: 310, maxWidth: 155 }} />
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align="right" >
                            User Experience Design
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1"  align="right" paragraph>
                            A good design that isn???t usable isn???t a good design.
                            </Typography>
                            <Typography variant="body1"  align="right" paragraph>
                            So why are so many pieces of software complicated, confusing, and frustrating?
                            </Typography>
                            <Typography variant="body1"  align="right" paragraph>
                            By prioritizing users and the real ways they interact with technology we???re able to develop unique, personable experiences that solve problems rather than create new ones.
                            </Typography>
                        </Grid>
                        
                    </Grid>
                   
                </Grid>
            </Grid>
        </Grid>
    )
}