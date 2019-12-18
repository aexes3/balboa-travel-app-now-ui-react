import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import  { Avatar, Fab } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Image from '../../../../assets/img/presentation-page/cpgold.jpg';

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
    backgroundColor: '#d5a452',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CPGold (props) {
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
        title="Cathay Pacific"
        subheader="Gold"
      />
      <CardMedia
        className={classes.media}
        image={Image}
      />
      {/* <CardContent>
        
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
                    <u><b>Benefits:</b></u>
                    <ListItem>
                    Earn status after earning 600 club points
                    </ListItem>
                    <ListItem>
                    No charge for extra-legroom seats
                    </ListItem>
                    <ListItem>
                    Advanced seat reservation
                    </ListItem>
                    <ListItem>
                    Priority waitlisting
                    </ListItem>
                    <ListItem>
                    Guaranteed economy class seat as long as booked 72 hours prior to departure
                    </ListItem>
                    <ListItem>
                    Can check-in at First or Business Class counters
                    </ListItem>
                    <ListItem>
                    Priority boarding
                    </ListItem>
                    <ListItem>
                    15 kg additional checked baggage allowance for most flights
                    </ListItem>
                    <ListItem>
                    Up to 3 pieces when travelling in Economy, Premium Economy, or Business Class.  Up to 4 pieces when travelling in First Class.
                    </ListItem>
                    <ListItem>
                    Priority baggage handling
                    </ListItem>
                    <ListItem>
                    Cathay Pacific and Cathay Dragon Business Class Lounge access
                    </ListItem>
                    <ListItem>
                    2 business class lounge passes for a travel companion or Redemption Group member after earning 800 club points
                    </ListItem>
                    <ListItem>
                    4 bookable upgrades after earning 1000 club points
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}