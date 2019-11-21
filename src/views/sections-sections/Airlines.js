import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import image from 'assets/img/presentation-page/DA-LOGO2.jpg'
import image2 from 'assets/img/presentation-page/AA-LOGO2.jpg'
import image3 from 'assets/img/presentation-page/SW-LOGO2.jpg'
import image4 from 'assets/img/presentation-page/ALASKA-LOGO2.jpg'
import image5 from 'assets/img/presentation-page/VA-LOGO.jpg'
import { red } from '@material-ui/core/colors';
import Gold from '../sections-sections/Air-cards/American-Airlines/Gold.js';
import Platinum from '../sections-sections/Air-cards/American-Airlines/Platinum.js';
import PlatinumPro from '../sections-sections/Air-cards/American-Airlines/PlatinumPro.js';
import ExecutivePlat from '../sections-sections/Air-cards/American-Airlines/ExecutivePlat.js';
import PromotionOne from '../sections-sections/Promotions/American-Airlines/PromotionOne.js';
import PromotionTwo from '../sections-sections/Promotions/American-Airlines/PromotionTwo.js';
import PromotionThree from '../sections-sections/Promotions/American-Airlines/PromotionThree.js';
// import PromotionFour from '../sections-sections/Promotions/American-Airlines/PromotionFour.js';
import {
    AppBar,
    // Button,
    Box,
    Tab,
    Tabs,
    Typography,
} 
from '@material-ui/core';
import {
    Button,
    Col,
    Container,
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
    card: {
      maxWidth: 345,
    },
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
    avatar: {
      backgroundColor: red[500],
    },
  }));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const daStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${image})`,
        color: 'white'
    }
}));

const aaStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${image2})`,
        color: 'white'
    }
}));

const swStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${image3})`,
        color: 'white'
    }
}));

const alStyles = makeStyles(theme => ({
    root: {
        //   flexGrow: 1,
        backgroundImage: `url(${image4})`,
        color: 'white',
        //   opacity: 0.7,
    },
}));

const vaStyles = makeStyles(theme => ({
    root: {
        //   flexGrow: 1,
        backgroundImage: `url(${image5})`,
        color: 'white',
        //   opacity: 0.7,
    },
}));

export default function Airlines(props) {
    const [collapses, setCollapses] = React.useState([1]);
    const changeCollapse = collapse => {
        if (collapses.includes(collapse)) {
            setCollapses(collapses.filter(prop => prop !== collapse));
        } else {
            setCollapses([...collapses, collapse]);
        }
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Router>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Link to="/american">
                                <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/aalogo.png")}
                                ></img>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/delta">
                                <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/dalogo.png")}
                                >
                                </img>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/southwest">
                                <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/swlogo.jpg")}
                                >
                                </img>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/alaska">
                                <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/allogo.jpg")}
                                >
                                </img>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/virgin">
                                <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/valogo.png")}
                                ></img>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                
                            <hr />

                <Switch>
                    <Route path="/american">
                        <American />
                    </Route>
                    <Route path="/Delta">
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
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
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
                    <Gold />                
                </Col>
                <Col>
                    <Platinum />
                </Col>
                <Col>
                    <PlatinumPro />
                </Col>
                <Col>
                    <ExecutivePlat />
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
                    <Tab icon={<PhoneIcon />} label="Gold" {...a11yProps(0)} />
                    <Tab label="Platinum" {...a11yProps(1)} />
                    <Tab label="Platinum Pro" {...a11yProps(2)} />
                    <Tab label="Executive Platunum" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className={dalogo.root}>
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
            <TabPanel value={value} index={3} className={dalogo.root}>
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