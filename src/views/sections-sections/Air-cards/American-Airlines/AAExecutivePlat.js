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
import Image from '../../../../assets/img/presentation-page/aaexecpro.jpg';
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
    backgroundColor: '#63615c',
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

export default function AAExecutivePlat (props) {
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
        subheader="Executive Platinum"
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
                    <ListItem>
                         Qualify by achieving either <br />
                        &#176; Flying 100,000 Elite Qualifying Miles (EQM) <br />
                        &#176; Flying 120 Elite Qualifying Segments (EQS) <br />
                        &#176; And also spending $15,000 in Elite Qualifying Dollars (EQD)
                    </ListItem>
                    <ListItem>
                         Unlimited upgrades for flights that are 500 miles or less for you and a companion
                    </ListItem>
                    <ListItem>
                         Unlimited upgrades for flights that are over 500 miles
                    </ListItem>
                    <ListItem>
                         Upgrades confirmed 100 hours prior to departure
                    </ListItem>
                    <ListItem>
                         Earn 120% Elite mileage bonus
                    </ListItem>
                    <ListItem>
                         Priority check-in, security, and boarding
                    </ListItem>
                    <ListItem>
                         3 checked bag fees waived
                    </ListItem>
                    <ListItem>
                        Priority bag delivery
                    </ListItem>
                    <ListItem>
                         Complimentary same-day standby
                    </ListItem>
                    <ListItem>
                         Complimentary same-day flight change
                    </ListItem>
                    <ListItem>
                         Exclusive service desk
                    </ListItem>
                    <ListItem>
                         Complimentary preferred seats
                    </ListItem>
                    <ListItem>
                         Complimentary Main Cabin Extra seats
                    </ListItem>
                    <ListItem>
                         Waived ticketing service charge
                    </ListItem>
                    <ListItem>
                         Guaranteed availability in the Main Cabin
                    </ListItem>
                    <ListItem>
                         Waitlist priority for purchased First or Business Class
                    </ListItem>
                    <ListItem>
                         Complimentary alcoholic beverage and snack in the Main Cabin
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}