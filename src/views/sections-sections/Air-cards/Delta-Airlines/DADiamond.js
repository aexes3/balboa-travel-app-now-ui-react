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
import Image from '../../../../assets/img/presentation-page/dadiamond.JPG';
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
    backgroundColor: '#96b0c4',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    textAlign: 'left',
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    padding: '0px',
  },
}));

export default function DASilver (props) {
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
            D
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Medallion Status"
        subheader="Diamond"
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
                    <Fab href="tel:800-323-2323" rel="noopener noreferrer" size="large" color="default" variant="fab">
                      <PhoneIcon /> &nbsp; 800-323-2323
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
                <List>
                <ListItem>
                         Pick a Choice Benefit exclusive to Platinum Medallion Members.  Choose from: < br />
                            &#176; Delta Sky Club® Membership Options < br />
                            &#176; Global and Regional Upgrade Certificates < br />
                            &#176; Gift Gold Medallion Status to a friend or family member < br />
                            &#176; 25,000 bonus miles for yourself, someone else, or a SkyWish charity of your choice < br />
                            &#176; A $200 Delta travel voucher < br />
                            &#176; A $200 Tiffany and Co. gift card < br />
                    </ListItem>
                    <ListItem>
                         11 miles per dollar spent
                    </ListItem>
                    <ListItem>
                         Complimentary CLEAR membership to speed thru security (a $179 annual value)
                    </ListItem>
                    <ListItem>
                         Highest priority boarding along with our First Class, Delta Premium Select 
                                or Delta One cabins, so you can be seated and settled first
                    </ListItem>
                    <ListItem>
                         Sky Priority® suite of services including check-in, priority security line access, and expedited baggage service
                    </ListItem>
                    <ListItem>
                         Unlimited complimentary upgrades beginning 120 hours (5 days) prior to departure
                    </ListItem>
                    <ListItem>
                         Waived fees for bags and ticket changes < br />
                            &#176; Waived change fees for Award Travel < br />
                            &#176; Your first checked bag free when traveling on a Delta or airline partner flight. Up to 8 of your travel 
                                    companions also receive their first checked bag free when traveling on a Delta flight < br />
                            &#176; Waived Same-Day Confirmed Fee < br />
                            &#176; Waived Same-Day Standby Fees < br />
                    </ListItem>
                    <ListItem>
                         Priority wait list
                    </ListItem>
                    <ListItem>
                         SkyTeam Elite Plus status
                    </ListItem>
                    <ListItem>
                         VIP phone line
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}