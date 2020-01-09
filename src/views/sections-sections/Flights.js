import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import image from 'assets/img/presentation-page/AIRLINEBG.jpg'
import Airlines2 from "./Airlines2.js";
import Airlines from "./Airlines.js";

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
        <div className={classes.root}>
            <Airlines />
            <Airlines2 />
        </div>
    )
}