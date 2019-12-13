import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import image from 'assets/img/presentation-page/HOTELSTAY.jpeg'
import Marriott from '../sections-sections/hotels/Marriott.js'
import Hilton from '../sections-sections/hotels/Hilton.js'
import Ihg from '../sections-sections/hotels/Ihg.js'
import Radisson from '../sections-sections/hotels/Radisson.js'
import Hyatt from '../sections-sections/hotels/Hyatt.js'
import Fairmont from '../sections-sections/hotels/Fairmont.js'

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
        backgroundColor: '#424242',
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
                                <Link to='/marriott' component={Link} {...a11yProps(0)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/marrlogo.JPG")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                                <Link to='/hilton' component={Link} {...a11yProps(1)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/hiltlogo.JPG")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/ihg' component={Link} {...a11yProps(2)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/interlogo.jpg")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/radisson' component={Link} {...a11yProps(3)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/radilogo.png")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/hyatt' component={Link} {...a11yProps(4)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/hyatlogo.png")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/fairmont' component={Link} {...a11yProps(5)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/fairlogo.jpg")} />
                                </Link>
                            </Grid>
                        </Grid>

                <Switch>
                    <Route path="/marriott">
                        <Marriott />
                    </Route>
                    <Route path="/hilton">
                        <Hilton />
                    </Route>
                    <Route path="/ihg">
                        <Ihg />
                    </Route>
                    <Route path="/radisson">
                        <Radisson />
                    </Route>
                    <Route path="/hyatt">
                        <Hyatt />
                    </Route>
                    <Route path="/fairmont">
                        <Fairmont />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}