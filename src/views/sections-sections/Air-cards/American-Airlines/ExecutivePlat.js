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
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Image from '../../../../assets/img/presentation-page/aaexecpro.jpg';

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
    backgroundColor: '#63615c',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ExecutivePlat (props) {
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
        subheader="Executive Pro"
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
                <Checkbox/>
                    <ListItem>
                        &#45; Qualify by achieving either <br />
                        &#32;&#42; Flying 100,000 Elite Qualifying Miles (EQM) <br />
                        &#32;&#42; Flying 120 Elite Qualifying Segments (EQS) <br />
                        &#32;&#32;&#176; And also spending $15,000 in Elite Qualifying Dollars (EQD)
                    </ListItem>
                    <Checkbox/>
                    <ListItem>
                        &#45; Unlimited upgrades for flights that are 500 miles or less for you and a companion
                    </ListItem>
                    <Checkbox/>
                    <ListItem>
                        &#45; Unlimited upgrades for flights that are over 500 miles
                    </ListItem>
                    <ListItem>
                        <Checkbox/> Upgrades confirmed 100 hours prior to departure
                    </ListItem>
                    <ListItem>
                        <Checkbox/> Earn 120% Elite mileage bonus
                    </ListItem>
                    <ListItem>
                        &#45; Priority check-in, security, and boarding
                    </ListItem>
                    <ListItem>
                        &#45; 3 checked bag fees waived
                    </ListItem>
                    <ListItem>
                        &#345; Priority bag delivery
                    </ListItem>
                    <ListItem>
                        &#45; Complimentary same-day standby
                    </ListItem>
                    <ListItem>
                        &#45; Complimentary same-day flight change
                    </ListItem>
                    <ListItem>
                        &#45; Exclusive service desk
                    </ListItem>
                    <ListItem>
                        &#45; Complimentary preferred seats
                    </ListItem>
                    <ListItem>
                        &#45; Complimentary Main Cabin Extra seats
                    </ListItem>
                    <ListItem>
                        &#45; Waived ticketing service charge
                    </ListItem>
                    <ListItem>
                        &#45; Guaranteed availability in the Main Cabin
                    </ListItem>
                    <ListItem>
                        &#45; Waitlist priority for purchased First or Business Class
                    </ListItem>
                    <ListItem>
                        &#45; Complimentary alcoholic beverage and snack in the Main Cabin
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}