import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import image from 'assets/img/presentation-page/AIRLINEBG.jpg'
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
}));

export default function Flights (){
    const classes = useStyles();

    return(
        <div className={classes.root} id="flights" >
            <Airlines />
            <Airlines2 />
            <Airlines3 />
            <Airlines4 />
        </div>
    )
}