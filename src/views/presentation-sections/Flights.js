import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import image from 'assets/img/presentation-page/AIRLINEBG.jpg'
import Airlines from "../sections-sections/AirTravel/Airlines";
import Airlines2 from "../sections-sections/AirTravel/Airlines2";
import Airlines3 from '../sections-sections/AirTravel/Airlines3';
import Airlines4 from "../sections-sections/AirTravel/Airlines4";

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
        
        <div className="cd-section" id="pricing">
            <div className={classes.root} id="qflights" >
                <Airlines />
                <Airlines2 />
                <Airlines3 />
                <Airlines4 />
            </div>
        </div>
    )
}

