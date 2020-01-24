import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, } from '@material-ui/core';
import { BrowserRouter as Router, } from "react-router-dom";
import Alamo from './GroundCards/Alamo'
import Avis from './GroundCards/Avis'
import Budget from './GroundCards/Budget'

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

export default function Rentals1(props) {
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
            default:
                return (<div>
                </div>)
        }
    }

    return (
        <Router>
            <div className={classes.root} >
                <Grid container spacing={3} >  {/*Spacing is from 0-10 ex. spacing={2} is 16px wide gap. ea. space = 8px */}
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/alamlogo.png")}
                            onClick={() => handleChange("alamo")}
                            className={classes.img} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/avislogo.png")}
                            onClick={() => handleChange("avis")}
                            className={classes.img} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <img
                            alt="..."
                            src={require("assets/img/presentation-page/budglogo.png")}
                            onClick={() => handleChange("budget")}
                            className={classes.img} />
                    </Grid>
                </Grid>
                {renderDealer(dealer)}
            </div>

        </Router>
    );
}