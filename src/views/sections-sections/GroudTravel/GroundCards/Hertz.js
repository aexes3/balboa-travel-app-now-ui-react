import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import HertzGold from './hertz/HertzGold';
import HertzFiveStar from './hertz/HertzFiveStar';
import HertzPCircle from './hertz/HertzPCircle';
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
    },
}));

export default function Hyatt() {
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
                    <Tab label="Promotion" {...a11yProps(1)} />
                    <Tab label="MISC" {...a11yProps(2)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
               <Container>
                    <Row>
                        <Col lg="4" md="6" sm="12">
                            <HertzGold />
                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <HertzFiveStar />
                        </Col>
                        <Col lg="4" md="6" sm="12">
                            <HertzPCircle />
                        </Col>
                    </Row>
               </Container>

                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="4">
                            <List component="nav" classname="justify-content-center"> 
                                <ListItem>
                                    <Fab 
                                        href="https://www.hertz.com/rentacar/member/enrollment/skinnyGold/fast" 
                                        rel="noopener noreferrer" 
                                        target="_blank" 
                                        size="large" 
                                        color="default" 
                                        variant="fab">
                                            <ComputerIcon /> &nbsp; Sign-up
                                    </Fab>
                                </ListItem>
                                <br />
                                <ListItem>
                                    <Fab 
                                        href="https://hertz-hertz.secure.force.com/LiveAgentChat/apex/Htz_LiveAgentPrechat?endpoint=https%3A%2F%2Fdg7.la2-c1-iad.salesforceliveagent.com%2Fcontent%2Fs%2Fchat%3Flanguage%3Den_US%23deployment_id%3D57215000000TTqs%26org_id%3D00D15000000EeK3%26button_id%3D57315000000TUo5%26session_id%3Dc5150d0b-0aba-4387-8118-d5056a89343d" 
                                        rel="noopener noreferrer" 
                                        target="_blank" 
                                        size="large" 
                                        color="default" 
                                        variant="fab">
                                            <ComputerIcon /> &nbsp; Chat
                                    </Fab>
                                </ListItem>
                            </List>
                        </Col>
                    </Row>
                </Container>
            </TabPanel>

            <TabPanel value={value} index={1} >
                <img
                    alt="..."
                    src={require("assets/img/presentation-page/promotions/noPromo.gif")}
                />
            </TabPanel>

            <TabPanel value={value} index={2}>
                <img
                    alt="..."
                    src={require("assets/img/presentation-page/promotions/promo2.png")}
                />
            </TabPanel>
        </div>
    );
}