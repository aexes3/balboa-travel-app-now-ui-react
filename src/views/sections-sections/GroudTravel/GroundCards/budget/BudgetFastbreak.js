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
import Image from '../../../../../assets/img/presentation-page/budgetfastbreak.png';
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
    maxWidth: 550,
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
    backgroundColor: '#ed5b2a',
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

export default function BudgetFastbreak (props) {
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
            F
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Budget"
        subheader="Fastbreak"
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
                    <Fab href="tel:800-218-7992" rel="noopener noreferrer" size="large" color="default" variant="fab">
                      <PhoneIcon /> &nbsp; US: 800-218-7992
                    </Fab>
                  </ListItem>
                  <br />
                  <ListItem  className={classes.button}>
                    <Fab href="tel:800-472-3325" rel="noopener noreferrer" size="large" color="default" variant="fab">
                      <PhoneIcon /> &nbsp; Outside US: 800-472-3325
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

                    <a href="https://www.budget.com/en/loyalty-profile/fastbreak" rel="noopener noreferrer" target="_blank">
                              <u><b>Fastbreak</b></u>
                    </a>
                    <hr />
                    <u><b>Benefits</b></u>
                    <ListItem>
                    Allows for quick pickup of vehicle.  Show drivers license to pick up the car keys.
                    </ListItem>
                    <ListItem>
                    Exclusive deals that save you time and money
                    </ListItem>
                    <hr />
                    <u><b>Rewards:</b></u>
                    <ListItem>
                    Current promotion going thru December 31, 2020.  Rent twice and receive $25 in Budget
                    </ListItem>
                    <hr />
                    <u><b>Bucks:</b></u>
                    <ListItem>
                    Possible to earn up to 52 coupons each year that can be used toward future rentals. <br />
                    </ListItem>
                    <ListItem>
                      <a 
                        href="http://pub.e.budget.com/BudgetBucksEnroll"
                        rel="noopener noreferrer" 
                        target="_blank">
                            Register for rewards here
                      </a>
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}