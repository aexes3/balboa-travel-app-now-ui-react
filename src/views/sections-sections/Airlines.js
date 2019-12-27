import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, } from '@material-ui/core';
import { BrowserRouter as Router, } from "react-router-dom";
import image from 'assets/img/presentation-page/AIRLINEBG.jpg'
import AirCanada from '../sections-sections/Air-cards/AirCanada.js'
import Alaska from '../sections-sections/Air-cards/Alaska.js'
import American from '../sections-sections/Air-cards/American.js'
import Cathay from '../sections-sections/Air-cards/Cathay.js'
import Delta from '../sections-sections/Air-cards/Delta.js'
import Emirates from '../sections-sections/Air-cards/Emirates.js'
import JetBlue from '../sections-sections/Air-cards/JetBlue.js'
import Lufthansa from '../sections-sections/Air-cards/Lufthansa.js'
import Singapore from '../sections-sections/Air-cards/Singapore.js'
import Southwest from '../sections-sections/Air-cards/Southwest.js'
import United from '../sections-sections/Air-cards/United.js'
import Virgin from '../sections-sections/Air-cards/Virgin.js'



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


export default function Airlines(props) {
    // const [american, setAmerican] = React.useState("");
    const [airline, setAirline] = React.useState("");
    const classes = useStyles();

    function handleChange(newAirline) {
        if (airline === newAirline) {
            setAirline('');
        } else {
            setAirline(newAirline);
        }
    }

    // function handleAmerican(newAmerican){
    //     if(american === newAmerican){
    //         setAmerican('');
    //     }
    //     else{
    //         setAmerican (newAmerican);
    //     }
    // }

    function renderAirline(param) {
        switch (param) {
            case 'american':
                return (<American />)
            case 'delta':
                return (<div><Delta /></div>)
            case 'southwest':
                return (<div><Southwest /></div>)
            case 'alaska':
                return (<div><Alaska /></div>)
            case 'virgin':
                return (<div><Virgin /></div>)
            case 'jetblue':
                return (<div><JetBlue /></div>)
            case 'united':
                return (<div><United /></div>)
            case 'cathay':
                return (<div><Cathay /></div>)
            case 'lufthansa':
                return (<div><Lufthansa /></div>)
            case 'emirates':
                return (<div><Emirates /></div>)
            case 'singapore':
                return (<div><Singapore /></div>)
            case 'aircananda':
                return (<div><AirCanada /></div>)
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
                                Air Travel
                                    </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/aclogo.png")}
                            onClick={() => handleChange("aircananda")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/allogo.jpg")}
                            onClick={() => handleChange("alaska")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/aalogo.png")}
                            onClick={() => handleChange("american")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/cplogo.png")}
                            onClick={() => handleChange("cathay")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/dalogo.png")}
                            onClick={() => handleChange("delta")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/emlogo.png")}
                            onClick={() => handleChange("emirates")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/jblogo.JPG")}
                            onClick={() => handleChange("jetblue")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/lflogo.png")}
                            onClick={() => handleChange("lufthansa")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/sglogo.png")}
                            onClick={() => handleChange("singapore")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/swlogo.jpg")}
                            onClick={() => handleChange("southwest")} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/ualogo.png")}
                            onClick={() => handleChange("united")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/valogo.png")}
                            onClick={() => handleChange("virgin")} />
                    </Grid>
                </Grid>
            </div>

            {renderAirline(airline)}
            
        </Router>
    );
}