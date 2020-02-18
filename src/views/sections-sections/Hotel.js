import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import image from 'assets/img/presentation-page/SMOKE3.jpg'
import Hotels1 from "./HotelStay/Hotels1";
import Hotels2 from "./HotelStay/Hotels2.js";

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

export default function Hotel (){
    const classes = useStyles();

    return(
        <div className={classes.root} >
            <div className="features-2">
                <Hotels1 />
                <Hotels2 />
            </div>
        </div>
    )
}