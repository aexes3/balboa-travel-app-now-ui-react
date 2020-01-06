import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IhgClub from './ihg/IhgClub.js';
import IhgGold from './ihg/IhgGold.js';
import IhgPlatinum from './ihg/IhgPlatinum';
import IhgSpire from './ihg/IhgSpire.js';
// import image from 'assets/img/presentation-page/IHG-LOGO.jpeg'
import PromotionOne from '../Promotions/American-Airlines/PromotionOne';
import PromotionTwo from '../Promotions/American-Airlines/PromotionTwo';
import PromotionThree from '../Promotions/American-Airlines/PromotionThree';
import ComputerIcon from '@material-ui/icons/Computer';
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
import {
    Button,
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
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white',
    },
}));

export default function Ihg() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" className="text-center">
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Loyalty" {...a11yProps(0)} />
                    <Tab label="Misc" {...a11yProps(1)} />
                    <Tab label="Promotions" {...a11yProps(2)} />
                    {/* <Tab label="Misc" {...a11yProps(3)} /> */}
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0} className={classes.root}>
                <Row>
                    <Col lg="3" md="6" sm="12">
                        <IhgClub /> 
                    </Col>
                    <Col lg="3" md="6" sm="12">
                        <IhgGold />   
                    </Col>
                    <Col lg="3" md="6" sm="12">
                        <IhgPlatinum />   
                    </Col>
                    <Col lg="3" md="6" sm="12">
                        <IhgSpire />                
                    </Col>
                </Row>

                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="4">
                            <List component="nav" classname="justify-content-center"> 
                                <ListItem>
                                    <Fab 
                                        href="https://www.ihg.com" 
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

            <TabPanel value={value} index={1} className={classes.root}>
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


            <TabPanel value={value} index={2} className={classes.root}>
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