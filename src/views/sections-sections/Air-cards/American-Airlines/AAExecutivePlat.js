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
import Image from '../../../../assets/img/presentation-page/aaexecpro.jpg';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 375,
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
    backgroundColor: '#63615c',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AAExecutivePlat (props) {
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
        title="AAdvantage"
        subheader="Executive Platinum"
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
                    <ListItem>
                         Qualify by achieving either <br />
                        &#176; Flying 100,000 Elite Qualifying Miles (EQM) <br />
                        &#176; Flying 120 Elite Qualifying Segments (EQS) <br />
                        &#176; And also spending $15,000 in Elite Qualifying Dollars (EQD)
                    </ListItem>
                    <ListItem>
                         Unlimited upgrades for flights that are 500 miles or less for you and a companion
                    </ListItem>
                    <ListItem>
                         Unlimited upgrades for flights that are over 500 miles
                    </ListItem>
                    <ListItem>
                         Upgrades confirmed 100 hours prior to departure
                    </ListItem>
                    <ListItem>
                         Earn 120% Elite mileage bonus
                    </ListItem>
                    <ListItem>
                         Priority check-in, security, and boarding
                    </ListItem>
                    <ListItem>
                         3 checked bag fees waived
                    </ListItem>
                    <ListItem>
                        Priority bag delivery
                    </ListItem>
                    <ListItem>
                         Complimentary same-day standby
                    </ListItem>
                    <ListItem>
                         Complimentary same-day flight change
                    </ListItem>
                    <ListItem>
                         Exclusive service desk
                    </ListItem>
                    <ListItem>
                         Complimentary preferred seats
                    </ListItem>
                    <ListItem>
                         Complimentary Main Cabin Extra seats
                    </ListItem>
                    <ListItem>
                         Waived ticketing service charge
                    </ListItem>
                    <ListItem>
                         Guaranteed availability in the Main Cabin
                    </ListItem>
                    <ListItem>
                         Waitlist priority for purchased First or Business Class
                    </ListItem>
                    <ListItem>
                         Complimentary alcoholic beverage and snack in the Main Cabin
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}