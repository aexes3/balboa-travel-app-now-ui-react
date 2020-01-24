import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FairClassic from './fairmont/FairClassic';
import FairSilver from './fairmont/FairSilver';
import FairGold from './fairmont/FairGold';
import FairPlatinum from './fairmont/FairPlatinum';
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
    },
}));

export default function Fairmont() {
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

            <TabPanel value={value} index={0} className={styles.root}>

                    <Row>
                        <Col lg="3" md="6" sm="12">
                            <FairClassic />
                        </Col>
                        <Col lg="3" md="6" sm="12">
                            <FairSilver />
                        </Col>
                        <Col lg="3" md="6" sm="12">
                            <FairGold />
                        </Col>
                        <Col lg="3" md="6" sm="12">
                            <FairPlatinum />
                        </Col>
                    </Row>
                

                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="4">
                            <List component="nav" classname="justify-content-center"> 
                                <ListItem>
                                    <Fab 
                                        href="https://www.fairmont.com" 
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

            <TabPanel value={value} index={1} >
                <img
                    alt="..."
                    src={require("assets/img/presentation-page/promotions/promo2.png")}
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