import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Prestige25k from './AirCanada/Prestige25k';
import Elite35k from './AirCanada/Elite35k.js';
import Elite50k from './AirCanada/Elite50k.js';
import Elite75k from './AirCanada/Elite75k.js';
import SuperElite100k from './AirCanada/SuperElite100k.js'
import image from 'assets/img/presentation-page/AC-LOGO.jpeg'
import PromotionOne from '../Promotions/American-Airlines/PromotionOne';
import PromotionTwo from '../Promotions/American-Airlines/PromotionTwo';
import PromotionThree from '../Promotions/American-Airlines/PromotionThree';
import {
    AppBar,
    Box,
    Fab,
    List,
    ListItem,
    ListItemText,
    Tab,
    Tabs,
    Typography
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import ComputerIcon from '@material-ui/icons/Computer';
import {
    Button,
    Container,
    Col,
    Row,
} from 'react-bootstrap';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

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

const swStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${image})`,
        color: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}));

export default function AirCanada() {
    const swlogo = swStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={swlogo.root}>
            <AppBar position="static" className="text-center">
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Loyalty" {...a11yProps(0)} />
                    <Tab label="Check-in" {...a11yProps(1)} />
                    <Tab label="Promotions" {...a11yProps(2)} />
                    <Tab label="Misc" {...a11yProps(3)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0} className={swlogo.root}>
                <Container>
                    <Row >
                        <Col lg="4" md="6" sm="6">
                            <Prestige25k />
                        </Col>
                        <Col lg="4" md="6" sm="6">
                            <Elite35k />
                        </Col>
                        <Col lg="4" md="6" sm="6">
                            <Elite50k />
                        </Col>
                        <Col lg="4" md="6" sm="6">
                            <Elite75k />
                        </Col>
                        <Col lg="8" md="6" sm="6">
                            <SuperElite100k />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="4">
                            <List component="nav" classname="justify-content-center">
                                <ListItem>
                                    <ListItemLink href="www.aircanada.com" rel="noopener noreferrer" target="_blank">
                                        <Fab size="large" color="primary" variant="fab">
                                            <ComputerIcon />
                                            <ListItemText primary=" &nbsp; More Info" />
                                        </Fab>
                                    </ListItemLink>
                                </ListItem>
                                <ListItem>
                                    <ListItemLink href="tel:888-247-2262" rel="noopener noreferrer">
                                        <Fab size="large" color="primary" variant="fab">
                                            <PhoneIcon />
                                            <ListItemText primary=" &nbsp; 888-247-2262" />
                                        </Fab>
                                    </ListItemLink>
                                </ListItem>
                            </List>
                        </Col>
                    </Row>
                </Container>
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
            <TabPanel value={value} index={3} className={swlogo.root}>

            </TabPanel>
        </div>
    );
}