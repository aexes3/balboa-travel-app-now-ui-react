import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Image from '../../../../assets/img/presentation-page/luffreq.jpg';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
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
    backgroundColor: '#83cfe0',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function LufFrequent (props) {
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
            F
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Lufthansa"
        subheader="Frequent Traveler"
      />
      <CardMedia
        className={classes.media}
        image={Image}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          Lorum ipsum
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
        <CardContent>
          <Typography variant="body2" color="textSecondary">
                <List className="MuiListItem-gutters">
                    <u><b>Benfits:</b></u>
                    <ListItem>
                        &#45; Make booking a flight easier by storing your details and using your service card.
                    </ListItem>
                    <ListItem>
                        &#45; Climb to a higher status and get exclusive privileges.
                    </ListItem>
                    <ListItem>
                        &#45; Earn award miles with almost 40 airline partners.
                    </ListItem>
                    <ListItem>
                        &#45; Earn award miles every day – for example when you shop or book a hotel.
                    </ListItem>
                    <ListItem>
                        &#45; Spend your valuable award miles on flights or with many other partners.
                    </ListItem>
                    <u><b>Frequent Traveler Benfits:</b></u>
                    <ListItem>
                        &#45; Qualify at 35,000 status miles or 30 scheduled flights in one calendar year
                    </ListItem>
                    <ListItem>
                        &#45; Award miles do not expire as long as you remain a status member
                    </ListItem>
                    <ListItem>
                        &#45; Earn 50% more award miles and 25% more Status, Select and HON Circle miles
                    </ListItem>
                    <ListItem>
                        &#45; Third highest waiting list priority
                    </ListItem>
                    <ListItem>
                        &#45; Business Class check-in with Miles &amp; More airline partners
                    </ListItem>
                    <ListItem>
                        &#45; Free Baggage: 1 additional piece of baggage in Economy Class, 
                                a total of 2 pieces in Premium Economy Class and Business Class, 3 pieces in First Class
                    </ListItem>
                    <ListItem>
                        &#45; Business Lounge access
                    </ListItem>
                    <ListItem>
                        &#45; Exclusive service hotline
                    </ListItem>
                    <ListItem>
          
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}