import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
import image from 'assets/img/presentation-page/flying-pig.png'
import image2 from 'assets/img/presentation-page/AA-LOGO.JPG'
import image3 from 'assets/img/presentation-page/SW-LOGO.jpg'
import image4 from 'assets/img/presentation-page/ALASKA-LOGO.jpg'
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

const alStyles = makeStyles(theme => ({
    root: {
        //   flexGrow: 1,
        backgroundImage: `url(${image4})`,
        color: 'white',
        //   opacity: 0.7,
    },
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
                        <Col md="3">
                            <Link to="/american">
                                <div className="card-container first-card">
                                    <div className="card-component">

                                        <div className="front">
                                            <img
                                                alt="..."
                                                src={require("assets/img/presentation-page/aalogo.png")}
                                            ></img>
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md="3">
                            <Link to="/delta">
                                <div className="card-container second-card">
                                    <div className="card-component">
                                        <div className="front">
                                            <img
                                                alt="..."
                                                src={require("assets/img/presentation-page/dalogo.png")}
                                            >
                                            </img>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md="3">
                            <Link to="/southwest">
                            <div className="card-container third-card">
                                    <div className="card-component">
                                        <div className="front">
                                            <img
                                                alt="..."
                                                src={require("assets/img/presentation-page/swlogo.jpg")}
                                            >
                                            </img>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md="3">
                            <Link to="/alaska">
                            <div className="card-container fourth-card">
                                    <div className="card-component">
                                        <div className="front">
                                            <img
                                                alt="..."
                                                src={require("assets/img/presentation-page/allogo.jpg")}
                                            >
                                            </img>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>


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

function Delta() {
    return (
        <div>
            <h2>Delta info goes here</h2>
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