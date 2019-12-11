import React from "react";
// plugin that creates slider
import Slider from "nouislider";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Collapse,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import {
    AppBar,
    Box,
    Grid,
    Paper,
    Tab,
    Tabs,
    Typography,
    ListItem,
    List,
    CardContent,
} 
from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar.js";
import EcommerceHeader from "components/Headers/EcommerceHeader.js";
import Footer from "components/Footers/Footer.js";
import PropTypes from 'prop-types';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`horizontal-tabpanel-${index}`}
        aria-labelledby={`horizontal-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
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
      id: `horizontal-tab-${index}`,
      'aria-controls': `horizontal-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
      },
      media: {
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));



export default function GroundTravel(){
// focus for inputs

const [collapses, setCollapses] = React.useState([1]);
const changeCollapse = collapse => {
  if (collapses.includes(collapse)) {
    setCollapses(collapses.filter(prop => prop !== collapse));
  } else {
    setCollapses([...collapses, collapse]);
  }
};
// slider states and functions

    return(
        <Router>
          <div>
                    <Grid container spacing={2}> {/*Spacing is from 0-10 ex. spacing={2} is 16px wide gap. ea. space = 8px */}
                            <Grid item xs={12}>
                                <Paper>
                                    <Typography variant="h5" component="h3">
                                        Ground Transpertation
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={4} spacing={2}>
                                <Link to='/hertz'
                                
                                // component={Link} 
                                // {...a11yProps(0)}
                                >
                               
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/aalogo.png")} /> 

                            
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                                <Link to='/budget' 
                                // component={Link} 
                                // {...a11yProps(1)}
                                >
                                
                                     <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/dalogo.png")} /> 
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                                <Link to='/avis' 
                                // component={Link} 
                                // {...a11yProps(1)}
                                >
                                    
                                    <img
                                    alt="..."
                                    src={require("assets/img/presentation-page/swlogo.jpg")} /> 
                                </Link>
                            </Grid>
                    </Grid>


                    <Switch>
                        <Route path="/hertz"
                        className="text-info"
                        aria-expanded={collapses.includes(2)}
                        data-toggle="collapse"
                        data-parent="#accordion"
                        onClick={e => {
                          changeCollapse(2);
                        }} >
                            <Hertz />
                        </Route>
                        <Route path="/budget">
                            <Budget />
                        </Route>
                        <Route path="/avis">
                            <Avis />
                        </Route>
                    </Switch>


                </div>
            </Router>
    )
}

function Hertz() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <div className={classes.root}>
        <Tabs
          orientation="horizontal"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="horizontal tabs example"
          className={classes.tabs}
        >
          <Tab label="Loyalty" {...a11yProps(0)} />
          <Tab label="Promotions" {...a11yProps(1)} />
          <Tab label="Misc" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <TheCard />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
       
      </div>
    );
  }

function Budget(){
    const [collapses, setCollapses] = React.useState([1]);
const changeCollapse = collapse => {
  if (collapses.includes(collapse)) {
    setCollapses(collapses.filter(prop => prop !== collapse));
  } else {
    setCollapses([...collapses, collapse]);
  }
};
    return(
        <div>
            <CardBody>
            <Card className="card-refine card-plain">
                        <CardHeader id="headingThree" role="tab">
                          <h6>
                            <a
                              className="text-info"
                              aria-expanded={collapses.includes(3)}
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#pablo"
                              onClick={e => {
                                e.preventDefault();
                                changeCollapse(3);
                              }}
                            >
                              Budget{" "}
                              <i className="now-ui-icons arrows-1_minimal-down"></i>
                            </a>
                          </h6>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(3)}>
                          <CardBody>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                All
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Polo Ralph Lauren
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Wooyoungmi
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Alexander McQueen
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Tom Ford
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                AMI
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Berena
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Thom Sweeney
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Calvin Klein
                              </Label>
                            </FormGroup>
                          </CardBody>
                        </Collapse>
                      </Card>
                    </CardBody>
        </div>
    )
}

function Avis(){
    const [collapses, setCollapses] = React.useState([1]);
const changeCollapse = collapse => {
  if (collapses.includes(collapse)) {
    setCollapses(collapses.filter(prop => prop !== collapse));
  } else {
    setCollapses([...collapses, collapse]);
  }
};
    return (
        <div>
            <CardBody>
            <Card className="card-plain">
                        <CardHeader>
                          <h6>
                            <a
                              className="text-info"
                              aria-expanded={collapses.includes(2)}
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#pablo"
                              onClick={e => {
                                e.preventDefault();
                                changeCollapse(2);
                              }}
                            >
                              Avis{" "}
                              <i className="now-ui-icons arrows-1_minimal-down"></i>
                            </a>
                          </h6>
                        </CardHeader>
                        <Collapse isOpen={collapses.includes(2)}>
                          <CardBody>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Casual Shirts
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Formal Shirts
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Jeans
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Polos
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input defaultChecked type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Pijamas
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Shorts
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Blazers
                              </Label>
                            </FormGroup>
                          </CardBody>
                        </Collapse>
                      </Card>
            </CardBody>
        </div>
    )
}

function TheCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}