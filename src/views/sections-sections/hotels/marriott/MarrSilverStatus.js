import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import {Avatar, Fab} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Image from '../../../../assets/img/presentation-page/marrsilverstatus.jpg';

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

export default function MarrSilverStatus (props) {
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
            SS
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Marriott"
        subheader="Silver Status"
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

                    <u><b>Benefits:</b></u>

                    <ListItem>
                    Stay 10 or more nights/yea
                    </ListItem>
                    <ListItem>
                        10% Bonus Points on Stays  
                    </ListItem>
                    <ListItem>
                        Priority Late Checkout
                    </ListItem>
                    <ListItem>
                        Dedicated Elite Reservation Line
                    </ListItem>
                    
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}