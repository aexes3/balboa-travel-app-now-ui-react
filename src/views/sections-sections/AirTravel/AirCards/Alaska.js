import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Almvp from './Alaska/Almvp.js';
import AlmvpGold from './Alaska/AlmvpGold.js';
import AlmvpGold75k from './Alaska/AlmvpGold75k';
// import image from 'assets/img/presentation-page/ALASKA-LOGO2.jpg'
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

// function ListItemLink(props) {
//     return <ListItem button component="a" {...props} />;
// }

const alStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // backgroundImage: `url(${image})`,
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
}));

export default function Alaska() {
    const allogo = alStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={allogo.root}>
            <AppBar position="static" className="text-center">
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Loyalty" {...a11yProps(0)} />
                    <Tab label="Check In" {...a11yProps(1)} />
                    <Tab label="Promotions" {...a11yProps(2)} />
                    <Tab label="Misc" {...a11yProps(3)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0} className={allogo.root}>
            <Container>
                    <Row>
                    <Col lg="4" md="6" sm="12">
                        <Almvp />                
                    </Col>
                    <Col lg="4"  md="6" sm="12">
                        <AlmvpGold />
                    </Col>
                    <Col lg="4" md="6" sm="12">
                        <AlmvpGold75k />
                    </Col>
                </Row>
                </Container>

                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="4">
                            <List component="nav" classname="justify-content-center">
                                <ListItem>
                                    <Fab href="https://www.alaskaair.com" rel="noopener noreferrer" target="_blank" size="large" color="default" variant="fab">
                                        <ComputerIcon /> &nbsp; More Info
                                    </Fab>
                                </ListItem>
                            </List>
                        </Col>
                    </Row>
                </Container>
            </TabPanel>

            <TabPanel value={value} index={1} className={allogo.root}>
               
            </TabPanel>

            <TabPanel value={value} index={2} >
                    <img
                        className="promotions1"
                        alt="..."
                        src={require("assets/img/presentation-page/promotions/promo2.png")}
                    />
                    {/* <img
                        className="promotions2"
                        alt="..."
                        src={require("assets/img/presentation-page/promotions/promo1.png")}
                    /> */}
            </TabPanel>


            <TabPanel value={value} index={3} className={allogo.root}>
              
            </TabPanel>
        </div>
    );
}