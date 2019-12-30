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
import Image from '../../../../assets/img/presentation-page/lufsen.jpg';
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
    backgroundColor: '#c59958',
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

export default function LufHon (props) {
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
        title="Lufthansa"
        subheader="Senator"
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
                  <ListItem  className={classes.button}>
                    <Fab href="tel:800-645-3880" rel="noopener noreferrer" size="large" color="default" variant="fab">
                      <PhoneIcon /> &nbsp; 800-645-3880
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
                         Make booking a flight easier by storing your details and using your service card.
                    </ListItem>
                    <ListItem>
                         Climb to a higher status and get exclusive privileges.
                    </ListItem>
                    <ListItem>
                         Earn award miles with almost 40 airline partners.
                    </ListItem>
                    <ListItem>
                         Earn award miles every day – for example when you shop or book a hotel.
                    </ListItem>
                    <ListItem>
                         Spend your valuable award miles on flights or with many other partners.
                    </ListItem>
                    <u><b>Senator Benefits:</b></u>
                    <ListItem>
                         Qualify at 100,000 status miles in the calendar year
                    </ListItem>
                    <ListItem>
                         Award miles do not expire as long as you remain a status member
                    </ListItem>
                    <ListItem>
                         Earn 50% more award miles and 25% more Status, Select and HON Circle miles
                    </ListItem>
                    <ListItem>
                         2 upgrade vouchers
                    </ListItem>
                    <ListItem>
                         Guaranteed booking availability up to 48 hours before departure in the 
                              booking classes of the highest value in Business Class, 
                              Premium Economy Class and Economy Class
                    </ListItem>
                    <ListItem>
                         Second Highest waiting list priority
                    </ListItem>
                    <ListItem>
                         First Class Check-in, Premium check-in
                    </ListItem>
                    <ListItem>
                         Extra 20 kg bag allowance
                    </ListItem>
                    <ListItem>
                         Free Baggage: 2 pieces of baggage or 3 pieces on certain routes in Economy Class, 
                              3 pieces in Premium Economy Class and Business Class, 4 pieces in First Class
                    </ListItem>
                    <ListItem>
                         Free carriage of an additional golf bag
                    </ListItem>
                    <ListItem>
                         Preferential baggage handling
                    </ListItem>
                    <ListItem>
                         Senator and Star Gold Lounge access
                    </ListItem>
                    <ListItem>
                         Senator Premium Award
                    </ListItem>
                    <ListItem>
                         Companion Award
                    </ListItem>
                    <ListItem>
                         Exclusive service hotline
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}