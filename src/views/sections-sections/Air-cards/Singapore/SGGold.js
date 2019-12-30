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
import Image from '../../../../assets/img/presentation-page/sggold.png';
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
    backgroundColor: '#927f5e',
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

export default function SGGold (props) {
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
        title="Singapore Airlines"
        subheader="Gold Tier"
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
                    <Fab href="tel:800-742-3333" rel="noopener noreferrer" size="large" color="default" variant="fab">
                      <PhoneIcon /> &nbsp; 800-742-3333
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
   
                    <u><b>Gold:</b></u>
                    <ListItem>
                         Achieve after flying 50,000 miles within 12 consecutive months
                    </ListItem>
                    <ListItem>
                         Access to extensive network of airport lounges
                    </ListItem>
                    <ListItem>
                         Star Alliance Gold Status
                    </ListItem>
                    <ListItem>
                         Extra check-in baggage allowance
                    </ListItem>
                    <ListItem>
                         Complimentary Forward Zone and Standard Seats when you fly in in Economy Class
                    </ListItem>
                    <ListItem>
                         Priority airport check-in and boarding
                    </ListItem>
                    <ListItem>
                         Priority baggage handling
                    </ListItem>
                    <ListItem>
                         Waived or discounted service fees
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}