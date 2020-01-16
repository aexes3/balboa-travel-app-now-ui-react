import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, } from '@material-ui/core';
import { BrowserRouter as Router, } from "react-router-dom";
// import image from 'assets/img/presentation-page/AIRLINEBG.jpg'
import AirCanada from './AirCards/AirCanada.js'
import Alaska from './AirCards/Alaska.js'
import American from './AirCards/American.js'
import Cathay from './AirCards/Cathay.js'
import Delta from './AirCards/Delta.js'
import Emirates from './AirCards/Emirates.js'
import JetBlue from './AirCards/JetBlue.js'
import Lufthansa from './AirCards/Lufthansa.js'
import Singapore from './AirCards/Singapore.js'
import Southwest from './AirCards/Southwest.js'
import United from './AirCards/United.js'
import Virgin from './AirCards/Virgin.js'



const useStyles = makeStyles(theme => ({
    root: {
    //     flexGrow: 1,
    //     height: '100%',
    //     // backgroundImage: `url(${image})`,
    //     // backgroundColor: '#d9dee1',
        textAlign: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
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
        },
        borderRadius: "15px",
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


    function renderAirline(param) {
        switch (param) {
            case 'aircananda':
                return (<div><AirCanada /></div>)
            case 'alaska':
                return (<div><Alaska /></div>)
            case 'american':
                return (<American />)
            case 'cathay':
                return (<div><Cathay /></div>)
            case 'delta':
                return (<div><Delta /></div>)
            case 'emirates':
                return (<div><Emirates /></div>)
            case 'jetblue':
                return (<div><JetBlue /></div>)
            case 'lufthansa':
                return (<div><Lufthansa /></div>)
            case 'singapore':
                return (<div><Singapore /></div>)
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
        <Router>
            <div className={classes.root}>


                <Grid container spacing={3}> {/*Spacing is from 0-10 ex. spacing={3} is 16px wide gap. ea. space = 8px */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" component="h3">
                                Air Travel
                            </Typography>
                        </Paper>
                    </Grid>
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
                    {/*<Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/cplogo.png")}
                            onClick={() => handleChange("cathay")} 
                            className={classes.img}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/dalogo.png")}
                            onClick={() => handleChange("delta")} 
                            className={classes.img}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/emlogo.png")}
                            onClick={() => handleChange("emirates")} 
                            className={classes.img}/>
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
                    </Grid> */}
                </Grid>
            {renderAirline(airline)}
            </div>

            
        </Router>
    );
}