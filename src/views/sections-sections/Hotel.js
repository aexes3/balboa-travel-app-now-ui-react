import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, } from '@material-ui/core';
import { BrowserRouter as Router, } from "react-router-dom";
import image from 'assets/img/presentation-page/HOTELSTAY.jpeg'
import Marriott from '../sections-sections/hotels/Marriott.js'
import Hilton from '../sections-sections/hotels/Hilton.js'
import Ihg from '../sections-sections/hotels/Ihg.js'
import Radisson from '../sections-sections/hotels/Radisson.js'
import Hyatt from '../sections-sections/hotels/Hyatt.js'
import Fairmont from '../sections-sections/hotels/Fairmont.js'


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
        // color: "white",
    },
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
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" component="h3">
                                Hotels
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/fairlogo.jpg")}
                            onClick={() => handleChange("fairmont")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/hiltlogo.JPG")}
                            onClick={() => handleChange("hilton")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/hyatlogo.png")}
                            onClick={() => handleChange("hyatt")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/interlogo.jpg")}
                            onClick={() => handleChange("ihg")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} spacing={2}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/marrlogo.JPG")}
                            onClick={() => handleChange("marriott")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/radilogo.png")}
                            onClick={() => handleChange("radisson")} />
                    </Grid>
                </Grid>

                {renderHotel(hotel)}
            </div>
        </Router>
    );
}