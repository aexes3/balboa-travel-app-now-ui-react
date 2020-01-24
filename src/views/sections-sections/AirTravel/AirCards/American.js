import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AAGold from './American-Airlines/AAGold';
import AAPlatinum from './American-Airlines/AAPlatinum.js';
import AAPlatinumPro from './American-Airlines/AAPlatinumPro.js';
import AAExecutivePlat from './American-Airlines/AAExecutivePlat.js';
import {
    AppBar,
    Box,
    Fab,
    List,
    ListItem,
    Tab,
    Tabs,
    Typography
} from '@material-ui/core';
import ComputerIcon from '@material-ui/icons/Computer';
import {
    Container,
    Col,
    Row,
} from 'react-bootstrap';

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

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // backgroundImage: `url(${image})`,
        color: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        marginBottom: '20px',
    },
}));

export default function American() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div
            className={classes.root}
        >
            <AppBar position="static" className="text-center">
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Loyalty" {...a11yProps(0)} />
                    <Tab label="Check In" {...a11yProps(1)} />
                    <Tab label="Promotions" {...a11yProps(2)} />
                    <Tab label="Misc" {...a11yProps(3)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                <Row>
                    <Col lg="3" md="6" sm="12">
                        <AAGold />
                    </Col>
                    <Col lg="3" md="6" sm="12">
                        <AAPlatinum />
                    </Col >
                    <Col lg="3" md="6" sm="12">
                        <AAPlatinumPro />
                    </Col>
                    <Col lg="3" md="6" sm="12">
                        <AAExecutivePlat />
                    </Col>
                </Row>

                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="4">
                            <List component="nav" classname="justify-content-center">
                                <List component="nav" classname="justify-content-center">
                                    <ListItem>
                                        <Fab
                                            href="https://www.aa.com/reservation/flightCheckInViewReservationsAccess.do?anchorLocation=DirectURL&title=check-in"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            size="large"
                                            color="default"
                                            variant="fab">
                                            <ComputerIcon /> &nbsp; Check In
                                        </Fab>
                                    </ListItem>
                                </List>
                            </List>
                        </Col>
                    </Row>
                </Container>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="4">
                            <List component="nav" classname="justify-content-center">
                                <ListItem>
                                    <Fab href="https://www.aa.com/reservation/flightCheckInViewReservationsAccess.do" rel="noopener noreferrer" target="_blank" size="large" color="default" variant="fab">
                                        <ComputerIcon /> &nbsp; Check in for your flight now
                                    </Fab>
                                </ListItem>
                            </List>
                        </Col>
                    </Row>
                </Container>
            </TabPanel>

            <TabPanel value={value} index={2} >
                <a href="https://www.aa.com/loyalty/enrollment/enroll" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="..."
                        src={require("assets/img/presentation-page/promotions/promo2.png")}
                    />
                </a>
            </TabPanel>

            <TabPanel value={value} index={3} >
                <a href="https://www.aa.com/loyalty/enrollment/enroll" target="_blank" rel="noopener noreferrer">
                    <img
                        alt="..."
                        src={require("assets/img/presentation-page/promotions/promo2.png")}
                    />
                </a>
            </TabPanel>
        </div>
    );
}