import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, } from '@material-ui/core';
import { BrowserRouter as Router, } from "react-router-dom";
// import image from 'assets/img/presentation-page/HOTELSTAY.jpeg'
import Fairmont from './HotelCards/Fairmont.js'
import Hilton from './HotelCards/Hilton.js'
import Hyatt from './HotelCards/Hyatt.js'

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
    img: {
        transition: "all 0.2s",
        "&:hover": {
            transform: "scale(1.15)",
        },
    },
    img2:{
        borderRadius: '15px',
        marginBottom: '.5em',
    },
}));

export default function Hotel(props) {
    const [hotel, setHotel] = React.useState("");
    const classes = useStyles();

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
            default:
                return (<div>
                </div>)
        }
    }
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
                    <Grid item xs={12} sm={12} md={4} className={classes.img}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/fairlogo.jpg")}
                            onClick={() => handleChange("fairmont")}
                            className={classes.img2} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} className={classes.img}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/hiltlogo.JPG")}
                            onClick={() => handleChange("hilton")}
                            className={classes.img2} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} className={classes.img}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/hyatlogo.png")}
                            onClick={() => handleChange("hyatt")}
                            className={classes.img2} />
                    </Grid>
                </Grid>
                {renderHotel(hotel)}
            </div>
        </Router>
    );
}