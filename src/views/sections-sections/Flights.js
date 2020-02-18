import React from "react";
import { makeStyles } from '@material-ui/core/styles';
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
        color: '#FFF'
    },
    paper: {
        // padding: theme.spacing(2, 1),
        backgroundImage: `url(${image})`,
    },
    content:{
        paddingBottom: '1em',
    }
}));

export default function Flights (){
    const classes = useStyles();

    return(
        <div className={classes.root} id="flights">
        
            <div className="features-2">
                <div className={classes.content}>
                    <Airlines />
                </div>  
                <div className={classes.content}>
                    <Airlines2 />
                </div>
                <div className={classes.content}>
                    <Airlines3 />
                </div>
                <div className={classes.content}>
                    <Airlines4 />
                </div>
            </div>
        </div>
    )
}