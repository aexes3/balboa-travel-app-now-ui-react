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
import Image from '../../../../assets/img/presentation-page/radisilver.png';
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
    backgroundColor: '#8c8d8e',
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

export default function RadSilver (props) {
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
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Radisson"
        subheader="Silver Member"
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
                    <Fab href="tel:800-333-3333" rel="noopener noreferrer" size="large" color="default" variant="fab">
                      <PhoneIcon /> &nbsp; 800-333-3333
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
                    Free Award Nights: Starting at 9,000 points with no blackout dates on Standard Rooms.
                    Elite status: Starting at nine eligible nights or six eligible stays.
                    </ListItem>
                    <ListItem>
                    Members Only Rate: As a Radisson Rewards member, you’ll save up to 10% on the best 
                    available rate when you book directly on our website or mobile app.
                    </ListItem>
                    <ListItem>
                    Earn points: Earn 20 points per US dollar spent on eligible stays.
                    </ListItem>
                    <ListItem>
                    Complimentary water: Members receive two bottles of complimentary water with every stay.
                    </ListItem>
                    <ListItem>
                    Valuable redemption options: Redeem your points for Free Award Nights, airline miles, 
                    gift cards, prepaid cards, and more!
                    </ListItem>

                    <u><b>Benefits:</b></u>

                    <ListItem>
                    9 nights / 6 stays
                    </ListItem>
                    <ListItem>
                    Member Only Rate
                    </ListItem>
                    <ListItem>
                    22 points for every $1 spent
                    </ListItem>
                    <ListItem>
                    10% discount on food and beverage
                    </ListItem>
                    <ListItem>
                    2 Complimentary bottles of water
                    </ListItem>
                    <ListItem>
                    Rollover nights - carry forward eligible nights toward Elite status to get a jump-start on the new program year
                    </ListItem>
                    <ListItem>
                    Complimentary room upgrade
                    </ListItem>
                    <ListItem>
                    Early check-in and late check-out
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}