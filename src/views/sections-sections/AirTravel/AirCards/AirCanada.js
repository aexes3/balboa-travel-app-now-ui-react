import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Prestige25k from './AirCanada/Prestige25k.js';
import Elite35k from './AirCanada/Elite35k.js';
import Elite50k from './AirCanada/Elite50k.js';
import Elite75k from './AirCanada/Elite75k.js';
import SuperElite100k from './AirCanada/SuperElite100k.js'
// import image from 'assets/img/presentation-page/AC-LOGO.jpeg'
import PromotionOne from '../../Promotions/American-Airlines/PromotionOne';
import PromotionTwo from '../../Promotions/American-Airlines/PromotionTwo';
import PromotionThree from '../../Promotions/American-Airlines/PromotionThree';
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
    Button,
    Container,
    Col,
    Row,
} from 'react-bootstrap';

// function ListItemLink(props) {
//     return <ListItem button component="a" {...props} />;
// }

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
        // backgroundImage: `url(${image})`,
        color: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    background: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
}));

export default function AirCanada() {
    const classes = swStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" className="text-center">
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Loyalty" {...a11yProps(0)} />
                    <Tab label="Check In" {...a11yProps(1)}><a href="http://balboa.com/travelbreaks" /></Tab>
                    <Tab label="Promotions" {...a11yProps(2)} />
                    <Tab label="Misc" {...a11yProps(3)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0} className={classes.root}>
                <Container>
                    <Row >
                        <Col lg="4" md="6" sm="12">
                            <Prestige25k />
                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <Elite35k />
                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <Elite50k />
                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <Elite75k />
                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <SuperElite100k />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="4">
                            <List component="nav" classname="justify-content-center">
                                <ListItem>
                                        <Fab href="https://www.aircanada.com" rel="noopener noreferrer" target="_blank" size="large" color="default" variant="fab">
                                            <ComputerIcon /> &nbsp; More Info
                                        </Fab>
                                </ListItem>
                            </List>
                        </Col>
                    </Row>
                </Container>
            </TabPanel>

            <TabPanel value={value} index={1} ></TabPanel>



            <TabPanel value={value} index={2} className={classes.background}>
                    <img
                        alt="..."
                        src={require("assets/img/presentation-page/promotions/promo2.png")}
                    />
                    <img
                        alt="..."
                        src={require("assets/img/presentation-page/promotions/promo1.png")}
                    />
            </TabPanel>

            <TabPanel value={value} index={3} className={classes.root}>

            </TabPanel>
        </div>
    );
}