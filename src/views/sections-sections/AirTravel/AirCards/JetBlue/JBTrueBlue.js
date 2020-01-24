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
import Image from '../../../../../assets/img/presentation-page/jbtrueblue.jpg';
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
    textAlign: "center",
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
  button: {
    padding: '0px',
    textAlign: 'center',
  },
}));

export default function JBTrueBlue (props) {
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
        title="jetBlue"
        subheader="TRUE BLUE"
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
                    <Fab href="tel:800-538-2583" rel="noopener noreferrer" size="large" color="default" variant="fab">
                      <PhoneIcon /> &nbsp; 800-538-2583
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
                    <u><b>TrueBlue Frequent Flyer Program</b></u><br />
                    <u><b>Benefits:</b></u>
                    <ListItem>
                         Earn 2X TrueBlue points when booking on jetblue.com
                    </ListItem>
                    <ListItem>
                         Use points whenever, wherever.  Points do not expire and can be redeemed for any seat, any time (no blackout dates.)
                    </ListItem>
                    <ListItem>
                         Pool points with other.  Earn and share points with friends and family with Points Pooling.
                    </ListItem>
                  <u><b>True Blue Mosaic Status:</b></u>
                    <ListItem>
                         Qualify by achieving either <br />
                        &#176; Earning 15,000 base flight points within a calendar year <br />
                        &#176; Flying 30 segments plus 12,000 base flights points within a calendar year <br />
                    </ListItem>
                    <u><b>Benefits:</b></u>
                    <ListItem>
                         Earn 3-5X TrueBlue points for all bookings
                    </ListItem>
                    <ListItem>
                         No change/cancel fees
                    </ListItem>
                    <ListItem>
                          First 2 checked bags are free
                    </ListItem>
                    <ListItem>
                          Expedited security checkpoint
                    </ListItem>
                    <ListItem>
                         Early boarding
                    </ListItem>
                    <ListItem>
                         Dedicated customer service line available 24/7
                    </ListItem>
                    <ListItem>
                         Complimentary alcoholic beverages onboard
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}