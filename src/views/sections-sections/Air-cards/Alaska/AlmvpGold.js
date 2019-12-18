import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import {Avatar, Fab} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhoneIcon from '@material-ui/icons/Phone';
import DraftsIcon from '@material-ui/icons/Drafts';
import Image from '../../../../assets/img/presentation-page/almvpgold2.png';

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
        subheader="MVP Gold"
      />
      <CardMedia
        className={classes.media}
        image={Image}
      />
      {/* <CardContent >
        
      </CardContent> */}
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
        <CardContent>
          <Typography variant="body2" color="textSecondary">
                <List className="MuiListItem-gutters">
                    
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

                    <u><b>MVP Gold Benefits:</b></u>

                    <ListItem>
                         Qualify after earning 40,000 miles
                    </ListItem>
                    <ListItem>
                         earn 100% mileage bonus
                    </ListItem>
                    <ListItem>
                         First class upgrades at time of booking for Y, S, B, M, or Z Fares
                    </ListItem>
                    <ListItem>
                         Premium class upgrades at time of booking for Y, S, B, M, H, Q, L, V, N, K, or Z fares
                    </ListItem>
                    <ListItem>
                         First and Premium Class upgrades on Alaska non-qualifying fares 48 hours before departure
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
                         Priority check-in and boarding
                    </ListItem>
                    <ListItem>
                         2 free checked bags
                    </ListItem>
                    <ListItem>
                         Preferred seating
                    </ListItem>
                    <ListItem>
                         $100 off Alaska Lounge membership
                    </ListItem>
                    <ListItem>
                         Standby and wait list for full flights
                    </ListItem>
                    <ListItem>
                         Express security line at select airports
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
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}