import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, } from '@material-ui/core';
import { BrowserRouter as Router, } from "react-router-dom";
// import image from 'assets/img/presentation-page/HOTELSTAY.jpeg'
import Marriott from './HotelCards/Fairmont.js'
import Ihg from './HotelCards/Ihg.js'
import Radisson from './HotelCards/Radisson.js'

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
    return (
        <Router>
            <div className={classes.root}>

                <Grid container spacing={2}> {/*Spacing is from 0-10 ex. spacing={2} is 16px wide gap. ea. space = 8px */}
                    <Grid item xs={12} sm={12} md={4} className={classes.img}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/interlogo.jpg")}
                            onClick={() => handleChange("ihg")}
                            className={classes.img2}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} className={classes.img}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/marrlogo.JPG")}
                            onClick={() => handleChange("marriott")}
                            className={classes.img2}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} className={classes.img}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/radilogo.png")}
                            onClick={() => handleChange("radisson")}
                            className={classes.img2} />
                    </Grid>
                </Grid>
                {renderHotel(hotel)}
            </div>
        </Router>
    );
}