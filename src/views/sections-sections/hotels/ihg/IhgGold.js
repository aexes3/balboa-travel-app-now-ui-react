import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Image from '../../../../assets/img/presentation-page/ihggold.jpg';

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
            CM
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="IHG"
        subheader="Club Member"
      />
      <CardMedia
        className={classes.media}
        image={Image}
      />
      <CardContent>
        <Typography variant="caption" color="textSecondary">
            <div className="info info-horizontal">
                  <a href="www.ihg.com"
                     rel="noopener noreferrer"
                     target="_blank"
                    >
                      <div className="icon">
                      <i className="fa fa-laptop"></i>
                    </div>
                  </a>
                    <div className="description">
                    <a href="www.ihg.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <h5 className="info-title">Learn More Here</h5>
                    </a>
                    </div>

                    <a href="tel:877-424-2449" >
                    <div className="icon description">
                      <i className="fas fa-phone"></i>
                    </div>
                    </a>
                    <div className="description">
                        <a href="tel:877-424-2449">
                            <h5 className="info-title">877-424-2449</h5>
                        </a>
                    </div>
                  </div>
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
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" >
                <List className="MuiListItem-gutters" >
                    
                    <u><b>Redeem Points for just about anything:</b></u>
                    
                    <ListItem>
                    Reward Nights  
                    </ListItem>
                    <ListItem>
                    <a href="https://www.ihg.com/content/ihg/hotels/en_US/brand/deals/member-offers/pointsandcash.html">Points &amp; Cash</a> &nbsp;bookings
                    </ListItem>
                    <ListItem>
                    Gift Certificates
                    </ListItem>
                    <ListItem>
                    Airline Miles
                    </ListItem>
                    <ListItem>
                    Brand Name Merchandise
                    </ListItem>
                    <ListItem>
                    InterContinental® Ambassador Memberships
                    </ListItem>
                    <ListItem>
                    Digital Rewards
                    </ListItem>
                    <ListItem>
                    IHG® Foundation
                    </ListItem>
                    <ListItem>
                    Rewards Concierge
                    </ListItem>
                    <ListItem>
                    Gift Cards to Amazon, Starbucks and more
                    </ListItem>
                    <ListItem>
                    TSA Precheck
                    </ListItem>
                    <ListItem>
                    And more of your favorite rewards
                    </ListItem>
                    

                    <u><b>Benefits:</b></u>

                    <ListItem>
                    In addition to Club Member benefits, also includes
                    </ListItem>
                    <ListItem>
                    Earn 10% Bonus Points with Your Rate
                    </ListItem>
                    <ListItem>
                    Extended Check-Out
                    </ListItem>
                    <ListItem>
                    Priority Check-In
                    </ListItem>
                    <ListItem>
                    Welcome Amenity
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}