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
import Image from '../../../../assets/img/presentation-page/ihgplatinum.jpg';
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
    backgroundColor: '#a9a9ab',
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

export default function HiltMember (props) {
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
            PM
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="IHG"
        subheader="Platinum Member"
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
                    <Fab href="tel:877-424-2449" rel="noopener noreferrer" size="large" color="default" variant="fab">
                      <PhoneIcon /> &nbsp; 877-424-2449
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
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.button} >
          <Typography variant="body2" color="textSecondary" >
                <List className={classes.button} >
                    
                    <u><b>Redeem Points for just about anything:</b></u>
                    
                    <ListItem>
                    Reward Nights  
                    </ListItem>
                    <ListItem>
                      <a 
                        href="https://www.ihg.com/content/ihg/hotels/en_US/brand/deals/member-offers/pointsandcash.html"
                        rel="noopener noreferrer" 
                        target="_blank">
                            Points &amp; Cash</a> &nbsp;bookings
                    </ListItem>
                    <ListItem>
                    Gift Certificates
                    </ListItem>
                    <ListItem>
                    Airline Miles
                    </ListItem>
                    <ListItem>
                    Brand Name Merchandise
                    </ListItem>
                    <ListItem>
                    InterContinental® Ambassador Memberships
                    </ListItem>
                    <ListItem>
                    Digital Rewards
                    </ListItem>
                    <ListItem>
                    IHG® Foundation
                    </ListItem>
                    <ListItem>
                    Rewards Concierge
                    </ListItem>
                    <ListItem>
                    Gift Cards to Amazon, Starbucks and more
                    </ListItem>
                    <ListItem>
                    TSA Precheck
                    </ListItem>
                    <ListItem>
                    And more of your favorite rewards
                    </ListItem>
                    

                    <u><b>Benefits:</b></u>

                    <ListItem>
                    In addition to Club Member benefits, also includes
                    </ListItem>
                    <ListItem>
                    Earn 50% Bonus Points with Your Rate
                    </ListItem>
                    <ListItem>
                    Complimentary Room Upgrades
                    </ListItem>
                    <ListItem>
                    Guaranteed Room Availability
                    </ListItem>
                    <ListItem>
                    Extended Check-Out
                    </ListItem>
                    <ListItem>
                    Priority Check-In
                    </ListItem>
                    <ListItem>
                    Welcome Amenity
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}