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
import Image from '../../../../assets/img/presentation-page/emgold.png';

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

export default function EmGold (props) {
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
        title="Emirates"
        subheader="Gold"
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
                    <u><b>Benefits:</b></u>
                    <ListItem>
                         Personal preferences remembered
                    </ListItem>
                    <ListItem>
                         Complimentary seat selection
                    </ListItem>
                    <ListItem>
                         Excess baggage allowances
                    </ListItem>
                    <ListItem>
                         Waitlist priority
                    </ListItem>
                    <ListItem>
                         Bonus Skywards Miles when flying Emirates
                    </ListItem>
                    <ListItem>
                         Buy instant upgrades with Miles at check-in
                    </ListItem>
                    <ListItem>
                         Priority check-in and boarding
                    </ListItem>
                    <ListItem>
                         Complimentary lounge access
                    </ListItem>
                    <ListItem>
                         Buy instant upgrades with Miles
                    </ListItem>
                    <ListItem>
                         Complimentary or discount Wi-Fi on board
                    </ListItem>
                    <ListItem>
                         Guaranteed seats, even on full flights
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}