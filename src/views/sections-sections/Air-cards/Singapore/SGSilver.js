import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import { Avatar, Fab } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Image from '../../../../assets/img/presentation-page/sgsilver.png';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 450,
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
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Singapore Airlines"
        subheader="Silver Tier"
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
                         Earn miles when you fly with Singapore Airlines, 
                        SilkAir, Scoot, Star Alliance and other partner airlines.
                    </ListItem>
                    <ListItem>
                         Redeem miles for flights and upgrades on Singapore Airlines, 
                        SilkAir, Scoot, Star Alliance and other partner airlines. 
                        Or for hotel stays, shopping, everyday purchases and more.
                    </ListItem>
                    <ListItem>
                         Enjoy exclusive KrisFlyer privileges such as personalised 
                        KrisWorld content and members-only deals and discounts. The more miles you earn, 
                        the more rewarding your journeys will become.
                    </ListItem>
   
                    <u><b>Silver:</b></u>
                    <ListItem>
                         achieve after flying 25,000 miles within 12 consecutive months
                    </ListItem>
                    <ListItem>
                         Star Alliance Silver Status
                    </ListItem>
                    <ListItem>
                         Complimentary Standard Seats when you fly in in Economy Class
                    </ListItem>
                    <ListItem>
                         Priority waitlists and standby
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}