import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import EnterPlus from './enterprise/EnterPlus';
import EnterSilver from './enterprise/EnterSilver';
import EnterGold from './enterprise/EnterGold';
import EnterPlatinum from './enterprise/EnterPlatinum';
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
                    <Tab label="Promotion" {...a11yProps(1)} />
                    <Tab label="MISC" {...a11yProps(2)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                    <Row>
                        <Col lg="3" md="6" sm="12">
                            <EnterPlus />
                        </Col>
                        <Col lg="3" md="6" sm="12">
                            <EnterSilver />
                        </Col>
                        <Col lg="3" md="6" sm="12">
                            <EnterGold />
                        </Col>
                        <Col lg="3" md="6" sm="12">
                            <EnterPlatinum />
                        </Col>
                    </Row>

                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="4">
                            <List component="nav" classname="justify-content-center"> 
                                <ListItem>
                                    <Fab 
                                        href="https://www.enterprise.com/en/enroll.html?icid=footer.enterprise.plus-_-enroll-_-ENUS.NULL" 
                                        rel="noopener noreferrer" 
                                        target="_blank" 
                                        size="large" 
                                        color="default" 
                                        variant="fab">
                                            <ComputerIcon /> &nbsp; Sign-up
                                    </Fab>
                                </ListItem>
                            </List>
                        </Col>
                    </Row>
                </Container>
            </TabPanel>

            <TabPanel value={value} index={1} >
               {/* <img
                    alt="..."
                    src={require("assets/img/presentation-page/promotions/noPromo.gif")}
                /> */}
            </TabPanel>

            <TabPanel value={value} index={2}>
                {/* <img
                    alt="..."
                    src={require("assets/img/presentation-page/promotions/promo2.png")}
                /> */}
            </TabPanel>
        </div>
    );
}