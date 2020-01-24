import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid,} from '@material-ui/core';
import { BrowserRouter as Router, } from "react-router-dom";
import AirCanada from './AirCards/AirCanada.js'
import Alaska from './AirCards/Alaska.js'
import American from './AirCards/American.js'

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
            case 'aircananda':
                return (<div><AirCanada /></div>)
            case 'alaska':
                return (<div><Alaska /></div>)
            case 'american':
                return (<American />)
            default:
                return (<div>
                </div>)
        }
    }

    return (
        <Router>
            <div className={classes.root}>
                <Grid container spacing={3}> {/*Spacing is from 0-10 ex. spacing={3} is 16px wide gap. ea. space = 8px */}
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/aclogo.png")}
                            onClick={() => handleChange("aircananda")} 
                            className={classes.img}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/allogo.jpg")}
                            onClick={() => handleChange("alaska")} 
                            className={classes.img}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/aalogo.png")}
                            onClick={() => handleChange("american")} 
                            className={classes.img}/>
                    </Grid>
                </Grid>
            {renderAirline(airline)}
            </div>

        </Router>
    );
}