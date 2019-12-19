import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Marrstatus from './marriott/Marrstatus.js';
import MarrSilverStatus from './marriott/MarrSilverStatus.js';
import MarrGoldStatus from './marriott/MarrGoldStatus.js';
import MarrPlatStatus from './marriott/MarrPlatStatus.js';
import MarrTitanStatus from './marriott/MarrTitanStatus.js';
import MarrAmbassStatus from './marriott/MarrAmbassStatus.js'
import image from 'assets/img/presentation-page/MARR-LOGO.png'
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

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundImage: `url(${image})`,
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white',
    },
    paper: {
        padding: theme.spacing(3, 2),
        maxWidth: 345,
        display: 'inline',
        // flex: 1
        // backgroundImage: `url(${image3})`,
    },
    align: {
        textAlign: 'center',
    },
}));

export default function Marriott() {
    const styles = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={styles.root}>
            <AppBar position="static" className="text-center">
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Loyalty" {...a11yProps(0)} />
                    <Tab label="Misc" {...a11yProps(1)} />
                    <Tab label="Promotions" {...a11yProps(2)} />
                    {/* <Tab label="Misc" {...a11yProps(3)} /> */}
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0} className={styles.root}>

                <Container>
                    <Row>
                        <Col md="4">
                            <Marrstatus />
                        </Col>
                        <Col md="4">
                            <MarrSilverStatus />
                        </Col>
                        <Col md="4">
                            <MarrGoldStatus />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <MarrPlatStatus />
                        </Col>
                        <Col md="4">
                            <MarrTitanStatus />
                        </Col>
                        <Col md="4">
                            <MarrAmbassStatus />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="4">
                                <List component="nav" classname="justify-content-center"> 
                                    <ListItem>
                                        <ListItemLink href="https://www.marriott.com/loyalty/createAccount/createAccountPage1.mi" rel="noopener noreferrer" target="_blank">
                                             <Fab size="medium" color="primary" variant="fab">
                                                <ComputerIcon />
                                            <ListItemText primary=" &nbsp; Sign-up Online" />
                                            </Fab>
                                        </ListItemLink>
                                        </ListItem>
                                        <ListItem>
                                        <ListItemLink href="tel:888-236-2427" rel="noopener noreferrer">
                                            <Fab size="medium" color="primary" variant="fab">
                                                <PhoneIcon />
                                            <ListItemText primary="&nbsp;888-236-2427" />
                                            </Fab>
                                        </ListItemLink>
                                    </ListItem>
                                </List>
                        </Col>
                    </Row>
                </Container>

            </TabPanel>

            <TabPanel value={value} index={1} className={styles.root}>
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


            <TabPanel value={value} index={2} className={styles.root}>
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


            {/* <TabPanel value={value} index={3} className={styles.root}>
              
            </TabPanel> */}
        </div>
    );
}