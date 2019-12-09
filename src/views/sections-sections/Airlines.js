import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import image from 'assets/img/presentation-page/AA-LOGO2.jpg'
import JetBlue from '../sections-sections/Air-cards/JetBlue.js'
import United from '../sections-sections/Air-cards/United.js'
import Cathay from '../sections-sections/Air-cards/Cathay.js'
import American from '../sections-sections/Air-cards/American.js'
import Delta from '../sections-sections/Air-cards/Delta.js'
import Southwest from '../sections-sections/Air-cards/Southwest.js'
import Alaska from '../sections-sections/Air-cards/Alaska.js'
import Virgin from '../sections-sections/Air-cards/Virgin.js'
import Lufthansa from '../sections-sections/Air-cards/Lufthansa.js'
import Emirates from '../sections-sections/Air-cards/Emirates.js'
import Singapore from '../sections-sections/Air-cards/Singapore.js'
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
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    root: {
        flexGrow: 1,
        height: '100%',
        backgroundImage: `url(${image})`,
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
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tabpanel-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
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
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

export default function Airlines(props) {
    // const [collapses, setCollapses] = React.useState([1]);
    // const changeCollapse = collapse => {
    //     if (collapses.includes(collapse)) {
    //         setCollapses(collapses.filter(prop => prop !== collapse));
    //     } else {
    //         setCollapses([...collapses, collapse]);
    //     }
    // };
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const classes = useStyles();
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
                            <Grid item xs={4} spacing={2}>
                                <Link to='/american' component={Link} {...a11yProps(0)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/aalogo.png")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                                <Link to='/delta' component={Link} {...a11yProps(1)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/dalogo.png")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/southwest' component={Link} {...a11yProps(2)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/swlogo.jpg")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/alaska' component={Link} {...a11yProps(3)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/allogo.jpg")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/virgin' component={Link} {...a11yProps(4)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/valogo.png")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/jetblue' component={Link} {...a11yProps(5)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/jblogo.JPG")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/united' component={Link} {...a11yProps(6)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/ualogo.png")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/cathay' component={Link} {...a11yProps(7)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/cplogo.png")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/lufthansa' component={Link} {...a11yProps(8)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/lflogo.png")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/emirates' component={Link} {...a11yProps(9)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/emlogo.png")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/singapore' component={Link} {...a11yProps(10)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/sglogo.png")} />
                                </Link>
                            </Grid>
                        </Grid>

                <Switch>
                    <Route path="/american">
                        <American />
                    </Route>
                    <Route path="/delta">
                        <Delta />
                    </Route>
                    <Route path="/southwest">
                        <Southwest />
                    </Route>
                    <Route path="/alaska">
                        <Alaska />
                    </Route>
                    <Route path="/virgin">
                        <Virgin />
                    </Route>
                    <Route path="/jetblue">
                        <JetBlue />
                    </Route>
                    <Route path="/united">
                        <United />
                    </Route>
                    <Route path="/cathay">
                        <Cathay />
                    </Route>
                    <Route path="/lufthansa">
                        <Lufthansa />
                    </Route>
                    <Route path="/emirates">
                        <Emirates />
                    </Route>
                    <Route path="/singapore">
                        <Singapore />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}