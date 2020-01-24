import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, } from '@material-ui/core';
import Southwest from './AirCards/Southwest.js'
import United from './AirCards/United.js'
import Virgin from './AirCards/Virgin.js'

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

export default function Airlines4 (props) {
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
            case 'southwest':
                return (<div><Southwest /></div>)
            case 'united':
                return (<div><United /></div>)
            case 'virgin':
                return (<div><Virgin /></div>)
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
                            src={require("assets/img/presentation-page/swlogo.jpg")}
                            onClick={() => handleChange("southwest")} 
                            className={classes.img}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/ualogo.png")}
                            onClick={() => handleChange("united")} 
                            className={classes.img} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/valogo.png")}
                            onClick={() => handleChange("virgin")} 
                            className={classes.img} />
                    </Grid>
                </Grid>
            {renderAirline(airline)}
            </div>

    );
}