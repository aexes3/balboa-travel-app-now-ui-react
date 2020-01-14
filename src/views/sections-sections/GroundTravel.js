import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import image from 'assets/img/presentation-page/GROUNDTRAVEL.jpeg'
import Rentals1 from "./GroudTravel/Rentals1.js";
import Rentals2 from "./GroudTravel/Rentals2.js";

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
            <Rentals1 />
            <Rentals2 />
        </div>
    )
}