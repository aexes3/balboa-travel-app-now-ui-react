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
import Image from '../../../../assets/img/presentation-page/nationaleliteclub.png';
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
    backgroundColor: '#a5b79d',
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

export default function NationalEliteClub (props) {
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
            EEC
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="National"
        subheader="Elite Club"
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
                    <Fab href="tel:800-962-7070" rel="noopener noreferrer" size="large" color="default" variant="fab" className="fabHover">
                      <PhoneIcon /> &nbsp; 800-962-7070
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
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.button}>
          <Typography variant="body2" color="textSecondary">
                <List className={classes.button}>

                    <u><b>Benefits:</b></u>

                    <ListItem>
                    Qualify with 25 paid rentals or 40 paid rental days in a calendar year
                    </ListItem>
                    <ListItem>
                    Free Rental Days: Earn 1 rental credit for every qualified car rental.  <br />
                    &#176; Free rental = 5 credits
                    </ListItem>
                    <ListItem>
                    Guaranteed Vehicle: a guaranteed car (up to Fullsize) with 24-hour notice when 
                    reserving using the Midsize rate (in US and Canada)
                    </ListItem>
                    <ListItem>
                    Private Airport Delivery
                    </ListItem>
                    <ListItem>
                    Drop &amp; Go: drop off your car and go, receipt will be emailed to you
                    </ListItem>
                    <ListItem>
                    Executive Area Access: Choose any car (Fullsize and above) in the Executive Area
                     and only pay the Midsize rate (in US and Canada)
                    </ListItem>
                    <ListItem>
                    No second driver fees
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}