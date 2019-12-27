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
import Image from '../../../../assets/img/presentation-page/hiltmember.png';
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
    backgroundColor: '#1f7bdd',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    
  },
  button: {
    padding: '0px',
  },
}));

export default function HiltMember (props) {
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
            MS
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Hilton"
        subheader="Member Status"
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
                  <ListItem className={classes.button}>
                    <Fab href="tel:800-446-6677" rel="noopener noreferrer" size="large" color="default" variant="fab">
                      <PhoneIcon /> &nbsp; 800-446-6677
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
          <Typography variant="body2" color="textSecondary" >
                <List className={classes.button} >
                    
                    <u><b>Overview:</b></u>
                    
                    <ListItem>
                    Lowest Price Anywhere   
                    </ListItem>
                    <ListItem>
                    Free WiFi
                    </ListItem>
                    <ListItem>
                    Digital Check-In
                    </ListItem>
                    <ListItem>
                    Points Toward Free Nights
                    </ListItem>
                    

                    <u><b>Benefits:</b></u>

                    <ListItem>
                    member discount
                    </ListItem>
                    <ListItem>
                    points toward free nights
                    </ListItem>
                    <ListItem>
                    no resort fees on reward stays
                    </ListItem>
                    <ListItem>
                    digital check-in and choose your room
                    </ListItem>
                    <ListItem>
                    digital key
                    </ListItem>
                    <ListItem>
                    in-room and lobby Wi-Fi
                    </ListItem>
                    <ListItem>
                    second guest stays free
                    </ListItem>
                    <ListItem>
                    late check-out
                    </ListItem>
                    <ListItem>
                    free transfer of points and point pooling
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}