import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import image from 'assets/img/presentation-page/SMOKE2.jpg'
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
    paper: {
        padding: theme.spacing(2, 1),
        // backgroundImage: `url(${image})`,
    },
}));

export default function Flights() {
    const classes = useStyles();

    return (
        <div className={classes.root} id="flights" >
            <div className="features-2">
                <Rentals1 />
                <Rentals2 />
            </div>
        </div>
    )
}