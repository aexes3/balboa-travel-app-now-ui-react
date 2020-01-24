import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, } from '@material-ui/core';
import JetBlue from './AirCards/JetBlue.js'
import Lufthansa from './AirCards/Lufthansa.js'
import Singapore from './AirCards/Singapore.js'

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

export default function Airlines3 (props) {
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
            case 'jetblue':
                return (<div><JetBlue /></div>)
            case 'lufthansa':
                return (<div><Lufthansa /></div>)
            case 'singapore':
                return (<div><Singapore /></div>)
            default:
                return (<div>
                </div>)
        }
    }

    return (
            <div className={classes.root}>
                <Grid container spacing={2}> {/*Spacing is from 0-10 ex. spacing={2} is 16px wide gap. ea. space = 8px */}
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/jblogo.JPG")}
                            onClick={() => handleChange("jetblue")} 
                            className={classes.img}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/lflogo.png")}
                            onClick={() => handleChange("lufthansa")} 
                            className={classes.img}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/sglogo.png")}
                            onClick={() => handleChange("singapore")} 
                            className={classes.img}/>
                    </Grid>
                </Grid>
            {renderAirline(airline)}
            </div>

    );
}