import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import image from 'assets/img/presentation-page/GROUNDTRAVEL.jpeg'
import Avis from '../sections-sections/ground-travel/Avis.js'
import Budget from '../sections-sections/ground-travel/Budget.js'
import Hertz from '../sections-sections/ground-travel/Hertz.js'
import National from '../sections-sections/ground-travel/National.js'
import Alamo from '../sections-sections/ground-travel/Alamo.js'
import Enterprise from '../sections-sections/ground-travel/Enterprise.js'

import {
    AppBar,
    Box,
    Grid,
    Paper,
    Tab,
    Tabs,
    Typography,
} 
from '@material-ui/core';
import {
    Button,
    Col,
    Row,
}
    from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        height: '100%',
        // backgroundImage: `url(${image})`,
        backgroundColor: '#9b9c9d',
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
    paper: {
        padding: theme.spacing(3, 2),
        // backgroundImage: `url(${image3})`,
    },  
  }));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
    >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

export default function GroundTravel(props) {
    // const [collapses, setCollapses] = React.useState([1]);
    // const changeCollapse = collapse => {
    //     if (collapses.includes(collapse)) {
    //         setCollapses(collapses.filter(prop => prop !== collapse));
    //     } else {
    //         setCollapses([...collapses, collapse]);
    //     }
    // };
    // const [value, setValue] = React.useState(0);
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}>
                
                
                        <Grid container spacing={2}> {/*Spacing is from 0-10 ex. spacing={2} is 16px wide gap. ea. space = 8px */}
                            
                            <Grid item xs={4} spacing={2}>
                                <Link to='/avis' component={Link} {...a11yProps(0)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/avislogo.png")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                                <Link to='/budget' component={Link} {...a11yProps(1)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/budglogo.png")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/hertz' component={Link} {...a11yProps(2)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/hertlogo.jpg")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/national' component={Link} {...a11yProps(3)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/natilogo.jpg")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/alamo' component={Link} {...a11yProps(4)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/alamlogo.png")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/enterprise' component={Link} {...a11yProps(5)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/entelogo.jpg")} />
                                </Link>
                            </Grid>
                        </Grid>

                <Switch>
                    <Route path="/avis">
                        <Avis />
                    </Route>
                    <Route path="/budget">
                        <Budget />
                    </Route>
                    <Route path="/hertz">
                        <Hertz />
                    </Route>
                    <Route path="/national">
                        <National />
                    </Route>
                    <Route path="/alamo">
                        <Alamo />
                    </Route>
                    <Route path="/enterprise">
                        <Enterprise />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}