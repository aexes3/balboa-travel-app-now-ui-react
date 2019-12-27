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
import Image from '../../../../assets/img/presentation-page/vagold.png';
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
    backgroundColor: '#c9a15b',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    padding: '0px',
  },
}));

export default function UnitedGold (props) {
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
            G
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Virgin Atlantic"
        subheader="Gold Tier"
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
                    <Fab href="tel:800-862-8621" rel="noopener noreferrer" size="large" color="default" variant="fab">
                      <PhoneIcon /> &nbsp; 800-862-8621
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
          <Typography variant="body2" color="textSecondary">
                <List className={classes.button}>
                    <u><b>Benefits:</b></u>
                    <ListItem>
                         Earn miles on every flight
                    </ListItem>
                    <ListItem>
                         60% bonus miles on every flight
                    </ListItem>
                    <ListItem>
                         Reward flights
                    </ListItem>
                    <ListItem>
                         Miles Plus Money
                    </ListItem>
                    <ListItem>
                         Free seat selection ahead of your flight in Economy Light
                    </ListItem>
                    <ListItem>
                         Complimentary Exit row seats in Economy Classic
                    </ListItem>
                    <ListItem>
                         Extra hand and hold baggage
                    </ListItem>
                    <ListItem>
                         Upper Class Check In flying in any cabin
                    </ListItem>
                    <ListItem>
                         Exclusive Clubhouse passes for you plus one guest
                    </ListItem>
                    <ListItem>
                         Priority waitlist for flights
                    </ListItem>
                    <ListItem>
                         One complimentary Clubhouse spa treatment plus 10% off thereafter
                    </ListItem>
                    <ListItem>
                         Access to London Heathrow Revivals Lounge
                    </ListItem>
                    <ListItem>
                         Tier renewal bonus
                    </ListItem>
                    <ListItem>
                         Enroll your children without any age restrictions
                    </ListItem>
                    <ListItem>
                         Household account linking up to nine flyers
                    </ListItem>
                    <ListItem>
                         2,000 bonus birthday miles
                    </ListItem>
                    <ListItem>
                         Complimentary companion ticket upon yearly renewal of Gold Tier
                    </ListItem>
                    <ListItem>
                         Clubhouse passes for you to keep or share when you earn 1,500 
                                Tier Points within your membership year
                    </ListItem>
                    <ListItem>
                         Cabin Upgrade Reward when you earn 2,000 Tier Points within your membership year
                    </ListItem>
                    <ListItem>
                         Supplementary Silver membership for a friend
                    </ListItem>
                    <ListItem>
                         Guaranteed Economy seat on any flight
                    </ListItem>
                    <ListItem>
                         Priority waitlist for flights
                    </ListItem>
                    <ListItem>
                         Maternity and paternity membership pause
                    </ListItem>
                    <ListItem>
                         Dedicated Flying Club phone line
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}