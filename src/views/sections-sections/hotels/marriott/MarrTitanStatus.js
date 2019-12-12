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
import Image from '../../../../assets/img/presentation-page/marrtitanstatus.jpg';

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
  text: {
      align: "center",
      textAlign: "center",
  }
}));

export default function MarrTitanStatus (props) {
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
            TES
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Marriott"
        subheader="Titanium Elite Status"
      />
      <CardMedia
        className={classes.media}
        image={Image}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
            <div href="tel:888-236-2427" target="_blank">
                <i className="fas fa-phone" /> : 888-236-2427
            </div>  
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
          <Typography variant="body2" color="textSecondary" >
                <List className="MuiListItem-gutters" >
                    
                    <u><b>Overview:</b></u>
                    
                    <ListItem>
                        30 Brands, more than 7,000 hotels.
                    </ListItem>
                    <ListItem>
                    Find info about all of the brands  &nbsp;
                        <a href="https://www.marriott.com/marriott-brands.mi" target="_blank" rel="noopener noreferrer" >here</a>
                    </ListItem>

                    <u><b>Benfits:</b></u>

                    <ListItem>
                    Stay 75 or more nights/year
                    </ListItem>
                    <ListItem>
                    75% Bonus Points on Stay
                    </ListItem>
                    <ListItem>
                    Enhanced Room Upgrade
                    </ListItem>
                    <ListItem>
                    Welcome Gift Choice (points, breakfast offering, or amenity - varies by brand)
                    </ListItem>
                    <ListItem>
                    Annual Choice Benefit - Make a second annual selection from the following: five Suite Night Awards, 
                    a Free Night Award, gift Gold Elite status, 40% off your favorite mattress, five Elite Night Credits 
                    or a $100 charity donation.
                    </ListItem>
                    <ListItem>
                    48-Hour Guarantee - guaranteed room availability when book by 3pm at least 48 hours prior to arrival
                    </ListItem>
                    <ListItem>
                    Lounge Access
                    </ListItem>
                    <ListItem>
                    4 p.m. Late Checkout
                    </ListItem>
                    <ListItem>
                    Enhanced In-Room Internet Access
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}