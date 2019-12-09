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
import Image from '../../../../assets/img/presentation-page/vagold.png';

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
                        &#45; Earn miles on every flight
                    </ListItem>
                    <ListItem>
                        &#45; 60% bonus miles on every flight
                    </ListItem>
                    <ListItem>
                        &#45; Reward flights
                    </ListItem>
                    <ListItem>
                        &#45; Miles Plus Money
                    </ListItem>
                    <ListItem>
                        &#45; Free seat selection ahead of your flight in Economy Light
                    </ListItem>
                    <ListItem>
                        &#45; Complimentary Exit row seats in Economy Classic
                    </ListItem>
                    <ListItem>
                        &#45; Extra hand and hold baggage
                    </ListItem>
                    <ListItem>
                        &#45; Upper Class Check In flying in any cabin
                    </ListItem>
                    <ListItem>
                        &#45; Exclusive Clubhouse passes for you plus one guest
                    </ListItem>
                    <ListItem>
                        &#45; Priority waitlist for flights
                    </ListItem>
                    <ListItem>
                        &#45; One complimentary Clubhouse spa treatment plus 10% off thereafter
                    </ListItem>
                    <ListItem>
                        &#45; Access to London Heathrow Revivals Lounge
                    </ListItem>
                    <ListItem>
                        &#45; Tier renewal bonus
                    </ListItem>
                    <ListItem>
                        &#45; Enroll your children without any age restrictions
                    </ListItem>
                    <ListItem>
                        &#45; Household account linking up to nine flyers
                    </ListItem>
                    <ListItem>
                        &#45; 2,000 bonus birthday miles
                    </ListItem>
                    <ListItem>
                        &#45; Complimentary companion ticket upon yearly renewal of Gold Tier
                    </ListItem>
                    <ListItem>
                        &#45; Clubhouse passes for you to keep or share when you earn 1,500 
                                Tier Points within your membership year
                    </ListItem>
                    <ListItem>
                        &#45; Cabin Upgrade Reward when you earn 2,000 Tier Points within your membership year
                    </ListItem>
                    <ListItem>
                        &#45; Supplementary Silver membership for a friend
                    </ListItem>
                    <ListItem>
                        &#45; Guaranteed Economy seat on any flight
                    </ListItem>
                    <ListItem>
                        &#45; Priority waitlist for flights
                    </ListItem>
                    <ListItem>
                        &#45; Maternity and paternity membership pause
                    </ListItem>
                    <ListItem>
                        &#45; Dedicated Flying Club phone line
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}