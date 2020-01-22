import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CPGreen from './Cathay/CPGreen.js'
import CPSilver from './Cathay/CPSilver.js'
import CPGold from './Cathay/CPGold.js'
import CPDiamond from './Cathay/CPDiamond.js'
// import image from 'assets/img/presentation-page/CP-LOGO.jpg'
import PromotionOne from '../../Promotions/American-Airlines/PromotionOne';
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

const cpStyles = makeStyles(theme => ({
    root: {
        // backgroundImage: `url(${image})`,
        color: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}))

export default function Cathay(props) {
    const ualogo = cpStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <div className={ualogo.root}>
            <AppBar position="static" className="text-center">
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Loyalty" {...a11yProps(0)} />
                    <Tab label="Check In" {...a11yProps(1)} />
                    <Tab label="Promotions" {...a11yProps(2)} />
                    <Tab label="Misc" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            
            <TabPanel value={value} index={0} className={ualogo.root}>
                    <Row>
                    <Col lg="3" md="6" sm="12">
                       <CPGreen />                
                    </Col>
                     <Col lg="3" md="6" sm="12">
                       <CPSilver />                
                    </Col>
                    <Col lg="3" md="6" sm="12">
                       <CPGold />                
                    </Col>
                    <Col lg="3" md="6" sm="12">
                       <CPDiamond />                
                    </Col> 
                </Row>

                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="4">
                            <List component="nav" classname="justify-content-center"> 
                                <ListItem>
                                    <Fab 
                                        href="https://www.cathaypacific.com" 
                                        rel="noopener noreferrer" 
                                        target="_blank" 
                                        size="large" 
                                        color="default" 
                                        variant="fab">
                                        <ComputerIcon /> &nbsp; More Info
                                    </Fab>
                                </ListItem>
                            </List>
                        </Col>
                    </Row>
                </Container>
            </TabPanel>

            <TabPanel value={value} index={1} className={ualogo.root}>
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

            <TabPanel value={value} index={2} className={ualogo.root}>
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

            <TabPanel value={value} index={3} className={ualogo.root}>
            <Row>
                <Col>
                    <PromotionOne />                
                </Col>
                {/* <Col>
                    <PromotionTwo />
                </Col>
                <Col>
                    <PromotionThree />
                </Col>
                <Col>
                    <PromotionOne />
                </Col> */}
              </Row>
            </TabPanel>
        </div>
    );
}