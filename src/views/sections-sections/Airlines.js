import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import image from 'assets/img/presentation-page/DA-LOGO2.jpg'
import image2 from 'assets/img/presentation-page/AA-LOGO2.jpg'
import image3 from 'assets/img/presentation-page/SW-LOGO2.jpg'
import image4 from 'assets/img/presentation-page/ALASKA-LOGO2.jpg'
import image5 from 'assets/img/presentation-page/VA-LOGO.jpg'
import AAGold from '../sections-sections/Air-cards/American-Airlines/AAGold';
import AAPlatinum from '../sections-sections/Air-cards/American-Airlines/AAPlatinum.js';
import AAPlatinumPro from '../sections-sections/Air-cards/American-Airlines/AAPlatinumPro.js';
import AAExecutivePlat from '../sections-sections/Air-cards/American-Airlines/AAExecutivePlat.js';
import DASilver from '../sections-sections/Air-cards/Delta-Airlines/DASilver.js';
import DAGold from '../sections-sections/Air-cards/Delta-Airlines/DAGold.js';
import DAPlatinum from '../sections-sections/Air-cards/Delta-Airlines/DAPlatinum';
import DADiamond from '../sections-sections/Air-cards/Delta-Airlines/DADiamond.js'
import PromotionOne from '../sections-sections/Promotions/American-Airlines/PromotionOne.js';
import PromotionTwo from '../sections-sections/Promotions/American-Airlines/PromotionTwo.js';
import PromotionThree from '../sections-sections/Promotions/American-Airlines/PromotionThree.js';
// import PromotionFour from '../sections-sections/Promotions/American-Airlines/PromotionFour.js';
import JetBlue from '../sections-sections/Air-cards/JetBlue.js'
import United from '../sections-sections/Air-cards/United.js'
import Cathay from '../sections-sections/Air-cards/Cathay.js'
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
        backgroundImage: `url(${image2})`,
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


const daStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${image})`,
        color: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}));

const aaStyles = makeStyles(theme => ({
    root: {
        // flexGrow: 1,
        // width: '100%',
        backgroundImage: `url(${image2})`,
        color: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}));

const swStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${image3})`,
        color: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}));

const alStyles = makeStyles(theme => ({
    root: {
        //   flexGrow: 1,
        backgroundImage: `url(${image4})`,
        color: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));

const vaStyles = makeStyles(theme => ({
    root: {
          flexGrow: 1,
        backgroundImage: `url(${image5})`,
    /* Full height */
        height: '100%', 

    /* Center and scale the image nicely */
        //  backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white',
    },
}));

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
                            <Link to='/united' component={Link} {...a11yProps(5)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/ualogo.png")} />
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                            <Link to='/cathay' component={Link} {...a11yProps(5)}>
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/cplogo.png")} />
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
                </Switch>
            </div>
        </Router>
    );
}

// You can think of these components as "pages"
// in your app.

function American() {
    const aalogo = aaStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // const classes = useStyles();
    // const [expanded, setExpanded] = React.useState(false);
  
    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };
    return (
        <div className={aalogo.root}>
            <AppBar position="static" className="text-center">
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Loyalty" {...a11yProps(0)} />
                    <Tab label="Check-In" {...a11yProps(1)} />
                    <Tab label="Misc" {...a11yProps(2)} />
                    <Tab label="Promotions" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            
            <TabPanel value={value} index={0} className={aalogo.root}>
              <Row>
                <Col>
                    <AAGold />                
                </Col>
                <Col>
                    <AAPlatinum />
                </Col >
                <Col>
                    <AAPlatinumPro />
                </Col>
                <Col>
                    <AAExecutivePlat />
                </Col>
                </Row>
            </TabPanel>

            <TabPanel value={value} index={1} className={aalogo.root}>
                Qualify:
                  <ul>
                    <li>Elite Qualifying Miles (EQM) 25000</li>
                </ul>
                Benefits:
                  <ul>
                    <li>Complimentary same day standby</li>
                    <li>Exclusive Service desk
                    <Button
                            className="btn-round ml-1"
                            color="linkedin"
                            href="tel:877-208-1396"
                            // onClick={e => e.preventDefault()}
                            size="sm"
                        >
                            <i className="fa fa-phone"></i>
                        </Button>
                    </li>
                    <li>Preferred Seating</li>
                    <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                    <li> Award processing change waived</li>
                </ul>
            </TabPanel>

            <TabPanel value={value} index={2} className={aalogo.root}>
                Qualify:
                  <ul>
                    <li>Elite Qualifying Miles (EQM) 25000</li>
                    <li>Elite Qualifying Segments (EQS) 30</li>
                    <li>Elite Qualifying Dollars (EQD) $3000</li>
                </ul>
                Benefits:
                  <ul>
                    <li>Complimentary Space Available Upgrades for flights 500 miles or less 24 hours before departure</li>
                    <li>Earn/Purchase 500 mile upgrades</li>
                    <li>40% Elite Mile Bonus</li>
                    <li>Exclusive Service desk
                    <Button
                            className="btn-round ml-1"
                            color="linkedin"
                            href="tel:877-208-1396"
                            // onClick={e => e.preventDefault()}
                            size="sm"
                        >
                            <i className="fa fa-phone"></i>
                        </Button>
                    </li>
                    <li>Preferred Seating</li>
                    <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                    <li> Award processing change waived</li>
                </ul>
            </TabPanel>

            <TabPanel value={value} index={3} className={aalogo.root}>
            <Row>
                <Col>
                    <PromotionOne />                
                </Col>
                <Col>
                    <PromotionTwo />
                </Col>
                <Col>
                    <PromotionThree />
                </Col>
                {/* <Col>
                    <PromotionOne />
                </Col> */}
              </Row>
            </TabPanel>
        </div>
    );
}

function Delta() {
    const dalogo = daStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={dalogo.root}>
            <AppBar position="static" className="text-center">
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Loyalty" {...a11yProps(0)} />
                    <Tab label="Check-in" {...a11yProps(1)} />
                    <Tab label="Promotions" {...a11yProps(2)} />
                    <Tab label="Misc" {...a11yProps(3)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0} className={dalogo.root}>
                <Row>
                    <Col>
                        <DASilver />                
                    </Col>
                    <Col>
                        <DAGold />
                    </Col>
                    <Col>
                        <DAPlatinum />
                    </Col>
                    <Col>
                        <DADiamond />
                    </Col>
                </Row>
            </TabPanel>

            <TabPanel value={value} index={1} className={dalogo.root}>
                Qualify:
                  <ul>
                    <li>Elite Qualifying Miles (EQM) 25000</li>
                </ul>
                Benefits:
                  <ul>
                    <li>Complimentary same day standby</li>
                    <li>Exclusive Service desk
                    <Button
                            className="btn-round ml-1"
                            color="linkedin"
                            href="tel:877-208-1396"
                            // onClick={e => e.preventDefault()}
                            size="sm"
                        >
                            <i className="fa fa-phone"></i>
                        </Button>
                    </li>
                    <li>Preferred Seating</li>
                    <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                    <li> Award processing change waived</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={2} className={dalogo.root}>
            
            <Row>
                <Col>
                    <PromotionOne />                
                </Col>
                <Col>
                    <PromotionTwo />
                </Col>
                <Col>
                    <PromotionThree />
                </Col>
                {/* <Col>
                    <PromotionOne />
                </Col> */}
              </Row>
            
            </TabPanel>
            <TabPanel value={value} index={3} className={dalogo.root}>
              
            </TabPanel>
        </div>
    );
}

function Southwest() {
    const swlogo = swStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={swlogo.root}>
            <AppBar position="static" className="text-center">
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab icon={<PhoneIcon />} label="Gold" {...a11yProps(0)} />
                    <Tab label="Platinum" {...a11yProps(1)} />
                    <Tab label="Platinum Pro" {...a11yProps(2)} />
                    <Tab label="Executive Platunum" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className={swlogo.root}>
                Qualify:
                  <ul>
                    <li>Elite Qualifying Miles (EQM) 25000</li>
                    <li>Elite Qualifying Segments (EQS) 30</li>
                    <li>Elite Qualifying Dollars (EQD) $3000</li>
                </ul>
                Benefits:
                  <ul>
                    <li>Complimentary Space Available Upgrades for flights 500 miles or less 24 hours before departure</li>
                    <li>Earn/Purchase 500 mile upgrades</li>
                    <li>40% Elite Mile Bonus</li>
                    <li>Priority Check in</li>
                    <li>1 free checked bag</li>
                    <li>Complimentary same day standby</li>
                    <li>Exclusive Service desk
                    <Button
                            className="btn-round ml-1"
                            color="linkedin"
                            href="tel:877-208-1396"
                            // onClick={e => e.preventDefault()}
                            size="sm"
                        >
                            <i className="fa fa-phone"></i>
                        </Button>
                    </li>
                    <li>Preferred Seating</li>
                    <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                    <li> Award processing change waived</li>
                </ul>
                <Button
                    className="btn-round ml-1"
                    color="linkedin"
                    href="tel:877-208-1396"
                    // onClick={e => e.preventDefault()}
                    size="sm"
                >
                    <i className="fa fa-phone"></i>
                </Button>
                <Button
                    className="btn-round mr-1"
                    color="facebook"
                    onClick={e => {
                        e.preventDefault();
                        window.location.href = "mailto: test@test.com";
                    }}
                    size="sm"
                >
                    <i className="fa fa-envelope" />
                </Button>
                <Button
                    className="btn-round ml-1"
                    color="linkedin"
                    href="tel:877-208-1396"
                    // onClick={e => e.preventDefault()}
                    size="sm"
                >
                    <i className="fa fa-phone"></i>
                </Button>
            </TabPanel>
            <TabPanel value={value} index={1} className={swlogo.root}>
                Qualify:
                  <ul>
                    <li>Elite Qualifying Miles (EQM) 25000</li>
                </ul>
                Benefits:
                  <ul>
                    <li>Complimentary same day standby</li>
                    <li>Exclusive Service desk
                    <Button
                            className="btn-round ml-1"
                            color="linkedin"
                            href="tel:877-208-1396"
                            // onClick={e => e.preventDefault()}
                            size="sm"
                        >
                            <i className="fa fa-phone"></i>
                        </Button>
                    </li>
                    <li>Preferred Seating</li>
                    <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                    <li> Award processing change waived</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={2} className={swlogo.root}>
                Qualify:
                  <ul>
                    <li>Elite Qualifying Miles (EQM) 25000</li>
                    <li>Elite Qualifying Segments (EQS) 30</li>
                    <li>Elite Qualifying Dollars (EQD) $3000</li>
                </ul>
                Benefits:
                  <ul>
                    <li>Complimentary Space Available Upgrades for flights 500 miles or less 24 hours before departure</li>
                    <li>Earn/Purchase 500 mile upgrades</li>
                    <li>40% Elite Mile Bonus</li>
                    <li>Exclusive Service desk
                    <Button
                            className="btn-round ml-1"
                            color="linkedin"
                            href="tel:877-208-1396"
                            // onClick={e => e.preventDefault()}
                            size="sm"
                        >
                            <i className="fa fa-phone"></i>
                        </Button>
                    </li>
                    <li>Preferred Seating</li>
                    <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                    <li> Award processing change waived</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={3} className={swlogo.root}>
                Qualify:
                  <ul>
                    <li>Elite Qualifying Miles (EQM) 25000</li>
                    <li>Elite Qualifying Segments (EQS) 30</li>
                    <li>Elite Qualifying Dollars (EQD) $3000</li>
                </ul>
                Benefits:
                  <ul>
                    <li>Complimentary Space Available Upgrades for flights 500 miles or less 24 hours before departure</li>
                    <li>Earn/Purchase 500 mile upgrades</li>
                    <li>40% Elite Mile Bonus</li>
                    <li>Priority Check in</li>
                    <li>1 free checked bag</li>
                    <li>Complimentary same day standby</li>
                    <li>Exclusive Service desk
                    <Button
                            className="btn-round ml-1"
                            color="linkedin"
                            href="tel:877-208-1396"
                            // onClick={e => e.preventDefault()}
                            size="sm"
                        >
                            <i className="fa fa-phone"></i>
                        </Button>
                    </li>
                </ul>
            </TabPanel>
        </div>
    );
}

function Alaska() {
    const aalogo = alStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={aalogo.root}>
            <AppBar position="static" className="text-center">
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab icon={<PhoneIcon />} label="Gold" {...a11yProps(0)} />
                    <Tab label="Platinum" {...a11yProps(1)} />
                    <Tab label="Platinum Pro" {...a11yProps(2)} />
                    <Tab label="Executive Platunum" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className={aalogo.root}>
                Qualify:
                  <ul>
                    <li>Elite Qualifying Miles (EQM) 25000</li>
                    <li>Elite Qualifying Segments (EQS) 30</li>
                    <li>Elite Qualifying Dollars (EQD) $3000</li>
                </ul>
                Benefits:
                  <ul>
                    <li>Complimentary Space Available Upgrades for flights 500 miles or less 24 hours before departure</li>
                    <li>Earn/Purchase 500 mile upgrades</li>
                    <li>40% Elite Mile Bonus</li>
                    <li>Priority Check in</li>
                    <li>1 free checked bag</li>
                    <li>Complimentary same day standby</li>
                    <li>Exclusive Service desk
                    <Button
                            className="btn-round ml-1"
                            color="linkedin"
                            href="tel:877-208-1396"
                            // onClick={e => e.preventDefault()}
                            size="sm"
                        >
                            <i className="fa fa-phone"></i>
                        </Button>
                    </li>
                    <li>Preferred Seating</li>
                    <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                    <li> Award processing change waived</li>
                </ul>
                <Button
                    className="btn-round ml-1"
                    color="linkedin"
                    href="tel:877-208-1396"
                    // onClick={e => e.preventDefault()}
                    size="sm"
                >
                    <i className="fa fa-phone"></i>
                </Button>
                <Button
                    className="btn-round mr-1"
                    color="facebook"
                    onClick={e => {
                        e.preventDefault();
                        window.location.href = "mailto: test@test.com";
                    }}
                    size="sm"
                >
                    <i className="fa fa-envelope" />
                </Button>
                <Button
                    className="btn-round ml-1"
                    color="linkedin"
                    href="tel:877-208-1396"
                    // onClick={e => e.preventDefault()}
                    size="sm"
                >
                    <i className="fa fa-phone"></i>
                </Button>
            </TabPanel>
            <TabPanel value={value} index={1} className={aalogo.root}>
                Qualify:
                  <ul>
                    <li>Elite Qualifying Miles (EQM) 25000</li>
                </ul>
                Benefits:
                  <ul>
                    <li>Complimentary same day standby</li>
                    <li>Exclusive Service desk
                    <Button
                            className="btn-round ml-1"
                            color="linkedin"
                            href="tel:877-208-1396"
                            // onClick={e => e.preventDefault()}
                            size="sm"
                        >
                            <i className="fa fa-phone"></i>
                        </Button>
                    </li>
                    <li>Preferred Seating</li>
                    <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                    <li> Award processing change waived</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={2} className={aalogo.root}>
                Qualify:
                  <ul>
                    <li>Elite Qualifying Miles (EQM) 25000</li>
                    <li>Elite Qualifying Segments (EQS) 30</li>
                    <li>Elite Qualifying Dollars (EQD) $3000</li>
                </ul>
                Benefits:
                  <ul>
                    <li>Complimentary Space Available Upgrades for flights 500 miles or less 24 hours before departure</li>
                    <li>Earn/Purchase 500 mile upgrades</li>
                    <li>40% Elite Mile Bonus</li>
                    <li>Exclusive Service desk
                    <Button
                            className="btn-round ml-1"
                            color="linkedin"
                            href="tel:877-208-1396"
                            // onClick={e => e.preventDefault()}
                            size="sm"
                        >
                            <i className="fa fa-phone"></i>
                        </Button>
                    </li>
                    <li>Preferred Seating</li>
                    <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                    <li> Award processing change waived</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={3} className={aalogo.root}>
                Qualify:
                  <ul>
                    <li>Elite Qualifying Miles (EQM) 25000</li>
                    <li>Elite Qualifying Segments (EQS) 30</li>
                    <li>Elite Qualifying Dollars (EQD) $3000</li>
                </ul>
                Benefits:
                  <ul>
                    <li>Complimentary Space Available Upgrades for flights 500 miles or less 24 hours before departure</li>
                    <li>Earn/Purchase 500 mile upgrades</li>
                    <li>40% Elite Mile Bonus</li>
                    <li>Priority Check in</li>
                    <li>1 free checked bag</li>
                    <li>Complimentary same day standby</li>
                    <li>Exclusive Service desk
                    <Button
                            className="btn-round ml-1"
                            color="linkedin"
                            href="tel:877-208-1396"
                            // onClick={e => e.preventDefault()}
                            size="sm"
                        >
                            <i className="fa fa-phone"></i>
                        </Button>
                    </li>
                </ul>
            </TabPanel>
        </div>
    );
}

function Virgin() {
    const valogo = vaStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={valogo.root}>
            <AppBar position="static" className="text-center">
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab icon={<PhoneIcon />} label="Gold" {...a11yProps(0)} />
                    <Tab label="Platinum" {...a11yProps(1)} />
                    <Tab label="Platinum Pro" {...a11yProps(2)} />
                    <Tab label="Executive Platunum" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className={valogo.root}>
                Qualify:
                  <ul>
                    <li>Elite Qualifying Miles (EQM) 25000</li>
                    <li>Elite Qualifying Segments (EQS) 30</li>
                    <li>Elite Qualifying Dollars (EQD) $3000</li>
                </ul>
                Benefits:
                  <ul>
                    <li>Complimentary Space Available Upgrades for flights 500 miles or less 24 hours before departure</li>
                    <li>Earn/Purchase 500 mile upgrades</li>
                    <li>40% Elite Mile Bonus</li>
                    <li>Priority Check in</li>
                    <li>1 free checked bag</li>
                    <li>Complimentary same day standby</li>
                    <li>Exclusive Service desk
                    <Button
                            className="btn-round ml-1"
                            color="linkedin"
                            href="tel:877-208-1396"
                            // onClick={e => e.preventDefault()}
                            size="sm"
                        >
                            <i className="fa fa-phone"></i>
                        </Button>
                    </li>
                    <li>Preferred Seating</li>
                    <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                    <li> Award processing change waived</li>
                </ul>
                <Button
                    className="btn-round ml-1"
                    color="linkedin"
                    href="tel:877-208-1396"
                    // onClick={e => e.preventDefault()}
                    size="sm"
                >
                    <i className="fa fa-phone"></i>
                </Button>
                <Button
                    className="btn-round mr-1"
                    color="facebook"
                    onClick={e => {
                        e.preventDefault();
                        window.location.href = "mailto: test@test.com";
                    }}
                    size="sm"
                >
                    <i className="fa fa-envelope" />
                </Button>
                <Button
                    className="btn-round ml-1"
                    color="linkedin"
                    href="tel:877-208-1396"
                    // onClick={e => e.preventDefault()}
                    size="sm"
                >
                    <i className="fa fa-phone"></i>
                </Button>
            </TabPanel>
            <TabPanel value={value} index={1} className={valogo.root}>
                Qualify:
                  <ul>
                    <li>Elite Qualifying Miles (EQM) 25000</li>
                </ul>
                Benefits:
                  <ul>
                    <li>Complimentary same day standby</li>
                    <li>Exclusive Service desk
                    <Button
                            className="btn-round ml-1"
                            color="linkedin"
                            href="tel:877-208-1396"
                            // onClick={e => e.preventDefault()}
                            size="sm"
                        >
                            <i className="fa fa-phone"></i>
                        </Button>
                    </li>
                    <li>Preferred Seating</li>
                    <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                    <li> Award processing change waived</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={2} className={valogo.root}>
                Qualify:
                  <ul>
                    <li>Elite Qualifying Miles (EQM) 25000</li>
                    <li>Elite Qualifying Segments (EQS) 30</li>
                    <li>Elite Qualifying Dollars (EQD) $3000</li>
                </ul>
                Benefits:
                  <ul>
                    <li>Complimentary Space Available Upgrades for flights 500 miles or less 24 hours before departure</li>
                    <li>Earn/Purchase 500 mile upgrades</li>
                    <li>40% Elite Mile Bonus</li>
                    <li>Exclusive Service desk
                    <Button
                            className="btn-round ml-1"
                            color="linkedin"
                            href="tel:877-208-1396"
                            // onClick={e => e.preventDefault()}
                            size="sm"
                        >
                            <i className="fa fa-phone"></i>
                        </Button>
                    </li>
                    <li>Preferred Seating</li>
                    <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                    <li> Award processing change waived</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={3} className={valogo.root}>
                Qualify:
                  <ul>
                    <li>Elite Qualifying Miles (EQM) 25000</li>
                    <li>Elite Qualifying Segments (EQS) 30</li>
                    <li>Elite Qualifying Dollars (EQD) $3000</li>
                </ul>
                Benefits:
                  <ul>
                    <li>Complimentary Space Available Upgrades for flights 500 miles or less 24 hours before departure</li>
                    <li>Earn/Purchase 500 mile upgrades</li>
                    <li>40% Elite Mile Bonus</li>
                    <li>Priority Check in</li>
                    <li>1 free checked bag</li>
                    <li>Complimentary same day standby</li>
                    <li>Exclusive Service desk
                    <Button
                            className="btn-round ml-1"
                            color="linkedin"
                            href="tel:877-208-1396"
                            // onClick={e => e.preventDefault()}
                            size="sm"
                        >
                            <i className="fa fa-phone"></i>
                        </Button>
                    </li>
                </ul>
            </TabPanel>
        </div>
    );
}

// function Jetblue() {
//     const jblogo = jbStyles();
//     const [value, setValue] = React.useState(0);
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//     return (
//         <div className={jblogo.root}>
//             <AppBar position="static" className="text-center">
//                 <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
//                     <Tab label="Loyalty" {...a11yProps(0)} />
//                     <Tab label="Check-In" {...a11yProps(1)} />
//                     <Tab label="Misc" {...a11yProps(2)} />
//                     <Tab label="Promotions" {...a11yProps(3)} />
//                 </Tabs>
//             </AppBar>
            
//             <TabPanel value={value} index={0} className={jblogo.root}>
//               <Row>
//                 <Col>
//                     <JBTrueBlue />                
//                 </Col>
                
//                 </Row>
//             </TabPanel>

//             <TabPanel value={value} index={1} className={jblogo.root}>
//                 Qualify:
//                   <ul>
//                     <li>Elite Qualifying Miles (EQM) 25000</li>
//                 </ul>
//                 Benefits:
//                   <ul>
//                     <li>Complimentary same day standby</li>
//                     <li>Exclusive Service desk
//                     <Button
//                             className="btn-round ml-1"
//                             color="linkedin"
//                             href="tel:877-208-1396"
//                             // onClick={e => e.preventDefault()}
//                             size="sm"
//                         >
//                             <i className="fa fa-phone"></i>
//                         </Button>
//                     </li>
//                     <li>Preferred Seating</li>
//                     <li>Complimentary Main Cabin Extra 24 hours before departure</li>
//                     <li> Award processing change waived</li>
//                 </ul>
//             </TabPanel>

//             <TabPanel value={value} index={2} className={jblogo.root}>
//                 Qualify:
//                   <ul>
//                     <li>Elite Qualifying Miles (EQM) 25000</li>
//                     <li>Elite Qualifying Segments (EQS) 30</li>
//                     <li>Elite Qualifying Dollars (EQD) $3000</li>
//                 </ul>
//                 Benefits:
//                   <ul>
//                     <li>Complimentary Space Available Upgrades for flights 500 miles or less 24 hours before departure</li>
//                     <li>Earn/Purchase 500 mile upgrades</li>
//                     <li>40% Elite Mile Bonus</li>
//                     <li>Exclusive Service desk
//                     <Button
//                             className="btn-round ml-1"
//                             color="linkedin"
//                             href="tel:877-208-1396"
//                             // onClick={e => e.preventDefault()}
//                             size="sm"
//                         >
//                             <i className="fa fa-phone"></i>
//                         </Button>
//                     </li>
//                     <li>Preferred Seating</li>
//                     <li>Complimentary Main Cabin Extra 24 hours before departure</li>
//                     <li> Award processing change waived</li>
//                 </ul>
//             </TabPanel>

//             <TabPanel value={value} index={3} className={jblogo.root}>
//             <Row>
//                 <Col>
//                     <PromotionOne />                
//                 </Col>
//                 <Col>
//                     <PromotionTwo />
//                 </Col>
//                 <Col>
//                     <PromotionThree />
//                 </Col>
//                 {/* <Col>
//                     <PromotionOne />
//                 </Col> */}
//               </Row>
//             </TabPanel>
//         </div>
//     );
// }
