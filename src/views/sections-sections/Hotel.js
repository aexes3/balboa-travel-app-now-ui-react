import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import image from 'assets/img/presentation-page/HOTELSTAY.jpeg'
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
}));

export default function Hotel (){
    const classes = useStyles();

    return(
        <div className={classes.root} >
            <Hotels1 />
            <Hotels2 />
        </div>
    )
}