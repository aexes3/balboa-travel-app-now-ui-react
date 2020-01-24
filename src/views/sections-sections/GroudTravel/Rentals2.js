import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, } from '@material-ui/core';
import { BrowserRouter as Router, } from "react-router-dom";
import Enterprise from './GroundCards/Enterprise'
import Hertz from './GroundCards/Hertz.js'
import National from './GroundCards/National.js'

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
    },
    img:{
        transition: "all 0.2s",
        "&:hover": {
            transform: "scale(1.15)",
        },
        borderRadius: "15px",
    },
}));

export default function Rentals2(props) {
    const [dealer, setDealer] = React.useState("");
    const classes = useStyles();

    function handleChange(newDealer) {
        if (dealer === newDealer) {
            setDealer('');
        } else {
            setDealer(newDealer);
        }
    }

    function renderDealer(param) {
        switch (param) {
            case 'enterprise':
                return (<div><Enterprise /></div>)
            case 'hertz':
                return (<div><Hertz /></div>)
            case 'national':
                return (<div><National /></div>)
            default:
                return (<div>
                </div>)
        }
    }

    return (
        <Router>
            <div className={classes.root} >
                <Grid container spacing={2}> {/*Spacing is from 0-10 ex. spacing={2} is 16px wide gap. ea. space = 8px */}
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/entelogo.jpg")}
                            onClick={() => handleChange("enterprise")}
                            className={classes.img} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/hertlogo.jpg")}
                            onClick={() => handleChange("hertz")}
                            className={classes.img} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/natilogo.jpg")}
                            onClick={() => handleChange("national")}
                            className={classes.img} />
                    </Grid>
                </Grid>
                {renderDealer(dealer)}
            </div>

        </Router>
    );
}