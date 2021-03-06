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
import Image from '../../../../../assets/img/presentation-page/ac75k.png';
import {
  Avatar,
  Fab,
  List,
  ListItem,
  Typography
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import {
  Container,
  Col,
  Row,
} from 'react-bootstrap';
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
    backgroundColor: '#ed1c24',
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

export default function Elite75k (props) {
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
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Air Canada"
        subheader="Elite 75k"
      />
      <CardMedia
        className={classes.media}
        image={Image}
      />
      <CardContent className={classes.button}>
      <Typography variant="body2" color="textSecondary" >
          <Container>
            <Row className="justify-content-md-center">
              <Col>
                <List component="nav" classname="justify-content-center">
                  <ListItem className={classes.button}>
                    <Fab href="tel:888-247-2262" rel="noopener noreferrer" size="large" color="default" variant="fab">
                      <PhoneIcon /> &nbsp; 888-247-2262
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
                    Priority Waitlist
                    </ListItem>
                    <ListItem>
                    Priority Seat Selection
                    </ListItem>
                    <ListItem>
                    Complimentary Preferred Seats with North America
                    </ListItem>
                    <ListItem>
                    Guaranteed Reservations in Economy Class
                    </ListItem>
                    <ListItem>
                    Priority Airport Check-in
                    </ListItem>
                    <ListItem>
                    Priority Airport Standby
                    </ListItem>
                    <ListItem>
                    Complimentary 3 Checked Baggage Allowance, up to 23 kg each
                    </ListItem>
                    <ListItem>
                    Complimentary Sports Equipment Handling
                    </ListItem>
                    <ListItem>
                    Priority Baggage Handling
                    </ListItem>
                    <ListItem>
                    Priority Security Clearance
                    </ListItem>
                    <ListItem>
                    Priority Boarding
                    </ListItem>
                    <ListItem>
                    3 Maple Leaf Lounge Guest Passes
                    </ListItem>
                    <ListItem>
                    Complimentary access to Maple Leaf Lounges
                    </ListItem>
                    <ListItem>
                    Complimentary access to Star Alliance Gold Lounges
                    </ListItem>
                    <ListItem>
                    55 eUpgrade Credits
                    </ListItem>
                    <ListItem>
                    75% Altitude Bonus with Air Canada and select airline partners
                    </ListItem>
                    <ListItem>
                    Star Alliance Gold Status
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}