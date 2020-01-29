import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PhoneIcon from '@material-ui/icons/Phone';
import Image from '../../../../../assets/img/presentation-page/swalistpref.png';
import {
  Avatar,
  Fab,
  List,
  ListItem,
  Typography
} 
from '@material-ui/core';
import {
  Container,
  Col,
  Row,
} 
from 'react-bootstrap';

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
    backgroundColor: '#111b40',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    padding: '0px',
    textAlign: 'center',
  },
}));

export default function SWAListPreferred (props) {
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
            AP
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Southwest"
        subheader="A-List Preferred"
      />
      <CardMedia
        className={classes.media}
        image={Image}
      />
      <CardContent className={classes.button}>
        <Typography variant="body2" color="textSecondary"  >
          <Container>
            <Row className="justify-content-md-center">
              <Col>
                <List component="nav" classname="justify-content-center">
                  <ListItem  className={classes.button}>
                    <Fab href="tel:800-435-9792" rel="noopener noreferrer" size="large" color="default" variant="fab">
                      <PhoneIcon /> &nbsp; 800-435-9792
                    </Fab>
                  </ListItem>
                </List>
              </Col>
            </Row>
          </Container>
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
          <Fab size="small" color="primary" variant="fab">
           <ExpandMoreIcon />
         </Fab>
        </IconButton>
      </CardActions >
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent  className={classes.button}>
          <Typography variant="body2" color="textSecondary">
                <List  className={classes.button}>
                    
                    <u><b>Overview:</b></u>
                    
                    <ListItem>
                         No blackout dates
                    </ListItem>
                    <ListItem>
                         Points do not expire
                    </ListItem>
                    <ListItem>
                         Earning points: The amount and type of fare you choose determines how many points you earn.
                    </ListItem>

                    <u><b>A-List Benefits:</b></u>

                    <ListItem>
                         As an A-List Preferred member, you will receive all of the standard 
                                A-List benefits and the added benefits listed below.
                    </ListItem>
                    <ListItem>
                         Fly 50 qualifying one-way flights or earn 70,000 tier qualifying points in one calendar year.
                    </ListItem>
                    <ListItem>
                         Priority boarding
                    </ListItem>
                    <ListItem>
                         25% earning bonus
                    </ListItem>
                    <ListItem>
                         Free same-day standby
                    </ListItem>
                    <ListItem>
                         Priority check-in and security lane access
                    </ListItem>
                    <ListItem>
                         Dedicated A-List member phone line
                    </ListItem>
                    <ListItem>
                         Free inflight WiFi
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}