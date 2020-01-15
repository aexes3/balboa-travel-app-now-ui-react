import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AAGold from './American-Airlines/AAGold';
import AAPlatinum from './American-Airlines/AAPlatinum.js';
import AAPlatinumPro from './American-Airlines/AAPlatinumPro.js';
import AAExecutivePlat from './American-Airlines/AAExecutivePlat.js';
// import image from 'assets/img/presentation-page/AA-LOGO2.jpg'
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

const aaStyles = makeStyles(theme => ({
    root: {
        // flexGrow: 1,
        // width: '100%',
        // backgroundImage: `url(${image})`,
        color: 'white',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}));


export default function American() {
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