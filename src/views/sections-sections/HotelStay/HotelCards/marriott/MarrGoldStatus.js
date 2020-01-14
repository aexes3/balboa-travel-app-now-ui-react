import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PhoneIcon from '@material-ui/icons/Phone';
import Image from '../../../../../assets/img/presentation-page/marrgoldstatus.jpg';
import {
  Avatar,
  Fab,
  List,
  ListItem,
  Typography
} 
from '@material-ui/core';
import {
  Container,
  Col,
  Row,
} 
from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: '5px',
  },
  media: {
    height: 0,
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
  avatar: {
    backgroundColor: '#b68a3b',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    
  },
  button: {
    padding: '0px',
    textAlign: 'center',
  },
}));

export default function MarrGoldStatus (props) {
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
            GS
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Marriott"
        subheader="Gold Status"
      />
      <CardMedia
        className={classes.media}
        image={Image}
      />
      <CardContent className={classes.button}>
        <Typography variant="body2" color="textSecondary"  >
          <Container>
            <Row className="justify-content-md-center">
              <Col>
                <List component="nav" classname="justify-content-center">
                  <ListItem className={classes.button}>
                    <Fab href="tel:888-236-2427" rel="noopener noreferrer" size="large" color="default" variant="fab">
                      <PhoneIcon /> &nbsp; 888-236-2427
                    </Fab>
                  </ListItem>
                </List>
              </Col>
            </Row>
          </Container>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Fab size="small" color="primary" variant="fab">
             <ExpandMoreIcon />
          </Fab>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.button}>
          <Typography variant="body2" color="textSecondary" >
                <List className={classes.button} >
                    
                    <u><b>Overview:</b></u>
                    
                    <ListItem>
                        30 Brands, more than 7,000 hotels.
                    </ListItem>
                    <ListItem>
                    Find info about all of the brands  &nbsp;
                        <a 
                          href="https://www.marriott.com/marriott-brands.mi" 
                          target="_blank" 
                          rel="noopener noreferrer" >
                           here</a>
                    </ListItem>

                    <u><b>Benefits:</b></u>

                    <ListItem>
                    Stay 25 or more nights/year
                    </ListItem>
                    <ListItem>
                    25% Bonus Points on Stays
                    </ListItem>
                    <ListItem>
                    Enhanced Room Upgrade
                    </ListItem>
                    <ListItem>
                    2 p.m. Late Checkout
                    </ListItem>
                    <ListItem>
                    Welcome Gift of Points (250-500 points, varies by brand)
                    </ListItem>
                    <ListItem>
                    Complimentary Enhanced In-Room Internet Access
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}