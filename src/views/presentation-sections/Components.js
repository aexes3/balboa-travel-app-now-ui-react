import React from "react";
import PropTypes from 'prop-types';
import PhoneIcon from '@material-ui/icons/Phone';
import image from 'assets/img/presentation-page/flying-pig.png'
import {
  AppBar,
  Box, 
  makeStyles,
  Tab,
  Tabs,
  Typography, 
} from '@material-ui/core'

import {
  Button,
  Container,
  Col,
  Collapse,
  Card,
  CardHeader,
  Row,
} from "reactstrap";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${image})`,
    color: 'white',
    opacity: 0.7,
  },
}));

export default function Components() {
  const [collapses, setCollapses] = React.useState([1]);
  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div
        className="section section-components"
        data-background-color="dark-blue"
      >
        <Container>
          <Row>
            <Col md="3">
              <Card className="card-refine card-plain card-container first-card">
                <CardHeader className="card-component">
                  <a
                    className="text-info"
                    aria-expanded={collapses.includes(2)}
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      changeCollapse(2);
                    }}>
                    <div className="front">
                      <img
                        alt="..."
                        src={require("assets/img/presentation-page/AA-LOGO.JPG")}
                      ></img>
                    </div>
                  </a>
                </CardHeader>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-refine card-plain card-container second-card">
                <CardHeader className="card-component">
                  <a
                    className="text-info"
                    aria-expanded={collapses.includes(2)}
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      changeCollapse(2);
                    }}>
                    <div className="front">
                      <img
                        alt="..."
                        src={require("assets/img/presentation-page/DA-LOGO.JPG")}
                      ></img>
                    </div>
                  </a>
                </CardHeader>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-refine card-plain card-container third-card">
                <CardHeader className="card-component">
                  <a
                    className="text-info"
                    aria-expanded={collapses.includes(2)}
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      changeCollapse(2);
                    }}>
                    <div className="front">
                      <img
                        alt="..."
                        src={require("assets/img/presentation-page/ALASKA-LOGO.jpg")}
                      ></img>
                    </div>
                  </a>
                </CardHeader>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-refine card-plain card-container fourth-card">
                <CardHeader className="card-component">
                  <a
                    className="text-info"
                    aria-expanded={collapses.includes(2)}
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      changeCollapse(2);
                    }}>
                    <div className="front">
                      <img
                        alt="..."
                        src={require("assets/img/presentation-page/SW-LOGO.jpg")}
                      ></img>
                    </div>
                  </a>
                </CardHeader>
              </Card>
            </Col>

            {/* <Col md="3">
              <div className="card-container second-card">
                <div className="card-component">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="front">
                      <img
                        alt="..."
                        src={require("assets/img/presentation-page/cards_thumb.jpg")}
                      ></img>
                    </div>
                  </a>
                </div>
              </div>
            </Col> */}
           
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" xl="12">
              <Collapse isOpen={collapses.includes(2)}>
                <div >
                  <AppBar position="static" className="text-center">
                    <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
                      <Tab icon={<PhoneIcon />} label="Gold" {...a11yProps(0)} />
                      <Tab label="Platinum" {...a11yProps(1)} />
                      <Tab label="Platinum Pro" {...a11yProps(2)} />
                      <Tab label="Executive Platunum" {...a11yProps(3)} />
                    </Tabs>
                  </AppBar>
                  <TabPanel value={value} index={0} className={classes.root}>
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
                    <li>Priority Check in</li>
                    <li>1 free checked bag</li>
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
                  <Button
                      className="btn-round ml-1"
                      color="linkedin"
                      href="tel:877-208-1396"
                      // onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      <i className="fa fa-phone"></i>
                    </Button>
                    <Button
        className="btn-round mr-1"
        color="facebook"
        onClick={e => {
          e.preventDefault();
          window.location.href = "mailto: test@test.com";
        }}
        size="sm"
      >
        <i className="fa fa-envelope" />
      </Button>
                    <Button
                      className="btn-round ml-1"
                      color="linkedin"
                      href="tel:877-208-1396"
                      // onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      <i className="fa fa-phone"></i>
                    </Button>
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
                  <TabPanel value={value} index={3} className={classes.root}>
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
                    <li>Priority Check in</li>
                    <li>1 free checked bag</li>
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
                  </ul>
                  </TabPanel>
                </div>
              </Collapse>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

