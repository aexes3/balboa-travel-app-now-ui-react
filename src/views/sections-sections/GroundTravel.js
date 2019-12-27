import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, } from '@material-ui/core';
import { BrowserRouter as Router, } from "react-router-dom";
import image from 'assets/img/presentation-page/GROUNDTRAVEL.jpeg'
import Avis from '../sections-sections/ground-travel/Avis.js'
import Budget from '../sections-sections/ground-travel/Budget.js'
import Hertz from '../sections-sections/ground-travel/Hertz.js'
import National from '../sections-sections/ground-travel/National.js'
import Alamo from '../sections-sections/ground-travel/Alamo.js'
import Enterprise from '../sections-sections/ground-travel/Enterprise.js'

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


export default function GroundTravel(props) {
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
            case 'alamo':
                return (<Alamo />)
            case 'avis':
                return (<div><Avis /></div>)
            case 'budget':
                return (<div><Budget /></div>)
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
            <div className={classes.root}>


                <Grid container spacing={2}> {/*Spacing is from 0-10 ex. spacing={2} is 16px wide gap. ea. space = 8px */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" component="h3">
                                Ground Transportation
                                    </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/alamlogo.png")}
                            onClick={() => handleChange("alamo")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/avislogo.png")}
                            onClick={() => handleChange("avis")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/budglogo.png")}
                            onClick={() => handleChange("budget")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/entelogo.jpg")}
                            onClick={() => handleChange("enterprise")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/hertlogo.jpg")}
                            onClick={() => handleChange("hertz")} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/natilogo.jpg")}
                            onClick={() => handleChange("national")} />
                    </Grid>
                </Grid>

                {renderDealer(dealer)}
            </div>
        </Router>
    );
}