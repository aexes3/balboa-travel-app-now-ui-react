import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, } from '@material-ui/core';
import { BrowserRouter as Router, } from "react-router-dom";
// import image from 'assets/img/presentation-page/HOTELSTAY.jpeg'
import Marriott from './HotelCards/Fairmont.js'
import Hilton from './HotelCards/Hilton.js'
import Ihg from './HotelCards/Ihg.js'
import Radisson from './HotelCards/Radisson.js'
import Hyatt from './HotelCards/Hyatt.js'
import Fairmont from './HotelCards/Fairmont.js'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        // backgroundImage: `url(${image})`,
        // backgroundColor: '#d9dee1',
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    paper: {
        padding: theme.spacing(2, 1),
        // backgroundImage: `url(${image})`,
        // color: "white",
    },
    img:{
        transition: "all 0.2s",
        "&:hover": {
            transform: "scale(1.15)",
        }
    }
}));


export default function Hotel(props) {
    const [hotel, setHotel] = React.useState("");

    function handleChange(newHotel) {
        if (hotel === newHotel) {
            setHotel('');
        } else {
            setHotel(newHotel);
        }
    }
    function renderHotel(param) {
        switch (param) {
            case 'fairmont':
                return (<Fairmont />)
            case 'hilton':
                return (<div><Hilton /></div>)
            case 'hyatt':
                return (<div><Hyatt /></div>)
            case 'ihg':
                return (<div><Ihg /></div>)
            case 'marriott':
                return (<div><Marriott /></div>)
            case 'radisson':
                return (<div><Radisson /></div>)
            default:
                return (<div>
                </div>)
        }
    }
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}>

                <Grid container spacing={2}> {/*Spacing is from 0-10 ex. spacing={2} is 16px wide gap. ea. space = 8px */}
                   
                    {/* <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/fairlogo.jpg")}
                            onClick={() => handleChange("fairmont")}
                            className={classes.img} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/hiltlogo.JPG")}
                            onClick={() => handleChange("hilton")}
                            className={classes.img} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/hyatlogo.png")}
                            onClick={() => handleChange("hyatt")}
                            className={classes.img} />
                    </Grid> */}
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/interlogo.jpg")}
                            onClick={() => handleChange("ihg")}
                            className={classes.img} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} spacing={2}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/marrlogo.JPG")}
                            onClick={() => handleChange("marriott")}
                            className={classes.img} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/radilogo.png")}
                            onClick={() => handleChange("radisson")}
                            className={classes.img} />
                    </Grid>
                </Grid>

                {renderHotel(hotel)}
            </div>
        </Router>
    );
}