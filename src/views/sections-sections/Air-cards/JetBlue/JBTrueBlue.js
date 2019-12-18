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
import Image from '../../../../assets/img/presentation-page/jbtrueblue.jpg';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 550,
    textAlign: "center",
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

export default function JBTrueBlue (props) {
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
            EP
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="jetBlue"
        subheader="TRUE BLUE"
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
                    <u><b>TrueBlue Frequent Flyer Program</b></u><br />
                    <u><b>Benefits:</b></u>
                    <ListItem>
                         Earn 2X TrueBlue points when booking on jetblue.com
                    </ListItem>
                    <ListItem>
                         Use points whenever, wherever.  Points do not expire and can be redeemed for any seat, any time (no blackout dates.)
                    </ListItem>
                    <ListItem>
                         Pool points with other.  Earn and share points with friends and family with Points Pooling.
                    </ListItem>
                  <u><b>True Blue Mosaic Status:</b></u>
                    <ListItem>
                         Qualify by achieving either <br />
                        &#176; Earning 15,000 base flight points within a calendar year <br />
                        &#176; Flying 30 segments plus 12,000 base flights points within a calendar year <br />
                    </ListItem>
                    <u><b>Benefits:</b></u>
                    <ListItem>
                         Earn 3-5X TrueBlue points for all bookings
                    </ListItem>
                    <ListItem>
                         No change/cancel fees
                    </ListItem>
                    <ListItem>
                          First 2 checked bags are free
                    </ListItem>
                    <ListItem>
                          Expedited security checkpoint
                    </ListItem>
                    <ListItem>
                         Early boarding
                    </ListItem>
                    <ListItem>
                         Dedicated customer service line available 24/7
                    </ListItem>
                    <ListItem>
                         Complimentary alcoholic beverages onboard
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}