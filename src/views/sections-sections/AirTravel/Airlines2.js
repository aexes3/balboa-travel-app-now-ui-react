import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid,} from '@material-ui/core';
import { BrowserRouter as Router, } from "react-router-dom";
import Cathay from './AirCards/Cathay.js'
import Delta from './AirCards/Delta.js'
import Emirates from './AirCards/Emirates.js'

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

export default function Airlines(props) {
    const [airline, setAirline] = React.useState("");
    const classes = useStyles();

    function handleChange(newAirline) {
        if (airline === newAirline) {
            setAirline('');
        } else {
            setAirline(newAirline);
        }
    }

    function renderAirline(param) {
        switch (param) {
            case 'cathay':
                return (<div><Cathay /></div>)
            case 'delta':
                return (<div><Delta /></div>)
            case 'emirates':
                return (<div><Emirates /></div>)
            default:
                return (<div>
                </div>)
        }
    }

    return (
        <Router>
            <div className={classes.root}>
                <Grid container spacing={3}> {/*Spacing is from 0-10 ex. spacing={2} is 16px wide gap. ea. space = 8px */}
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/cplogo.png")}
                            onClick={() => handleChange("cathay")} 
                            className={classes.img}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/dalogo.png")}
                            onClick={() => handleChange("delta")} 
                            className={classes.img}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/emlogo.png")}
                            onClick={() => handleChange("emirates")} 
                            className={classes.img}/>
                    </Grid>
                </Grid>
            {renderAirline(airline)}
            </div>
            
        </Router>
    );
}