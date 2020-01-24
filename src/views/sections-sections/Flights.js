import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import { Grid, Paper, Typography, } from '@material-ui/core';
import image from 'assets/img/presentation-page/SMOKE1.jpg'
import Airlines from "./AirTravel/Airlines.js";
import Airlines2 from "./AirTravel/Airlines2.js";
import Airlines3 from './AirTravel/Airlines3.js';
import Airlines4 from "./AirTravel/Airlines4";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        backgroundImage: `url(${image})`,
        backgroundColor: '#d9dee1',
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    paper: {
        padding: theme.spacing(2, 1),
        // backgroundImage: `url(${image})`,
    },
}));

export default function Flights (){
    const classes = useStyles();

    return(
        <div className={classes.root} id="flights">
            {/* <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" component="h3">
                        Air Travel
                    </Typography>
                </Paper>
            </Grid> */}
            <div className="features-2">
                <Airlines />
                <Airlines2 />
                <Airlines3 />
                <Airlines4 />
            </div>
        </div>
    )
}