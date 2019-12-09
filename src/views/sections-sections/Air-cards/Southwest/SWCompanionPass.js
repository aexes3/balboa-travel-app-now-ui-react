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
import Image from '../../../../assets/img/presentation-page/swcpass.png';

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

export default function SWCompanionPass (props) {
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
            CP
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Southwest"
        subheader="Companion Pass"
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
                                      
                <u><b>Overview:</b></u>
                    
                    <ListItem>
                        &#45; No blackout dates
                    </ListItem>
                    <ListItem>
                        &#45; Points do not expire
                    </ListItem>
                    <ListItem>
                        &#45; Earning points: The amount and type of fare you choose determines how many points you earn.
                    </ListItem>

                    <u><b>A-List Benfits:</b></u>

                    <ListItem>
                        &#45; Friends fly when you do.
                    </ListItem>
                    <ListItem>
                        &#45; Companion Pass is the benefit that allows you to choose one person to 
                        fly with you, free of airline charges (does not include taxes and fees from 
                        $5.60 one-way) every time you purchase or redeem points for a flight. To qualify, 
                        simply fly 100 qualifying one-way flights or earn 110,000 qualifying points in 
                        a calendar year, and you’ll earn Companion Pass for the following full calendar year, 
                        plus the remainder of the year in which you earned it. Starting January 1, 2020, 
                        simply fly 100 qualifying one-way flights or earn 125,000 qualifying points* in 
                        a calendar year to earn Companion Pass.
                    </ListItem>
                    
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}