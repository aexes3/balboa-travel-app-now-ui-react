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
import Image from '../../../../../assets/img/presentation-page/almvpgold75k2.png';
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
    backgroundColor: '#204068',
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

export default function SWAListPreferred (props) {
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
            AP
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Alaska Airlines"
        subheader="MVP Gold 75k"
      />
      <CardMedia
        className={classes.media}
        image={Image}
      />
     <CardContent className={classes.button}>
      <Typography variant="body2" color="textSecondary" >
          <Container>
            <Row className="justify-content-md-center">
              <Col>
                <List component="nav" classname="justify-content-center">
                  <ListItem className={classes.button}>
                    <Fab href="tel:800-252-7522" rel="noopener noreferrer" size="large" color="default" variant="fab">
                      <PhoneIcon /> &nbsp; 800-252-7522
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
                    
                    <u><b>Mileage Plan:</b></u>
                    
                    <ListItem>
                         Fly a mile. Earn a mile.  Earn one mile for every mile flown on Alaska, even on the lowest fare.
                    </ListItem>
                    <ListItem>
                         With award travel starting at 5,000 miles, that's enough for a one-way nonstop flight 
                        from San Diego to Northern California. Plus, use miles with Alaska and our Global Partners 
                        to fly to destinations around the world.
                    </ListItem>
                    <ListItem>
                         Elite status begins at 20,000 miles
                    </ListItem>

                    <u><b>MVP Gold 75k Benefits:</b></u>

                    <ListItem>
                         Qualify after earning 75,000 miles
                    </ListItem>
                    <ListItem>
                         earn 125% mileage bonus
                    </ListItem>
                    <ListItem>
                         50,000 bonus miles upon qualification
                    </ListItem>
                    <ListItem>
                         First class upgrades at time of booking for Y, S, B, M, or Z Fares
                    </ListItem>
                    <ListItem>
                         Premium class upgrades at time of booking for all fares except Saver Fares
                    </ListItem>
                    <ListItem>
                         First and Premium Class upgrades on Alaska non-qualifying fares 120 hours before departure
                    </ListItem>
                    <ListItem>
                         Companion upgrades to First and Premium Classes
                    </ListItem>
                    <ListItem>
                         4 one-way First Class guest upgrades
                    </ListItem>
                    <ListItem>
                         Complimentary premium beverage in Main Cabin
                    </ListItem>
                    <ListItem>
                         Complimentary inflight entertainment player
                    </ListItem>
                    <ListItem>
                         Priority check-in and boarding
                    </ListItem>
                    <ListItem>
                         2 free checked bags
                    </ListItem>
                    <ListItem>
                         Preferred seating
                    </ListItem>
                    <ListItem>
                         $150 off Alaska Lounge membership
                    </ListItem>
                    <ListItem>
                         Standby and wait list for full flights
                    </ListItem>
                    <ListItem>
                         Express security line at select airports
                    </ListItem>
                    <ListItem>
                         4 Alaska Lounge day passes
                    </ListItem>
                    <ListItem>
                         Dedicated phone lines for reservations
                    </ListItem>
                    <ListItem>
                         Elite Leave for new parents
                    </ListItem>
                    <ListItem>
                         Complimentary same-day flight changes
                    </ListItem>
                    <ListItem>
                         Waived ticket change fees
                    </ListItem>
                    <ListItem>
                         Opportunity to nominate someone for MVP status
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}