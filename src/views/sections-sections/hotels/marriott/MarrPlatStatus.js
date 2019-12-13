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
import Image from '../../../../assets/img/presentation-page/marrplatstatus.jpg';

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

export default function MarrPlatStatus (props) {
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
            PES
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Marriott"
        subheader="Platinum Elite Status"
      />
      <CardMedia
        className={classes.media}
        image={Image}
      />
      <CardContent>
        <Typography>
            <div className="info info-horizontal">
                  <a href="https://www.marriott.com/loyalty/createAccount/createAccountPage1.mi"
                     rel="noopener noreferrer"
                     target="_blank"
                    >
                      <div className="icon">
                      <i className="fa fa-laptop"></i>
                    </div>
                  </a>
                    <div className="description">
                    <a href=" https://www.marriott.com/loyalty/createAccount/createAccountPage1.mi"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <h5 className="info-title">Sign-up Online</h5>
                    </a>
                    </div>

                    <a href="tel:888-236-2427" >
                    <div className="icon description">
                      <i className="fas fa-phone"></i>
                    </div>
                    </a>
                    <div className="description">
                        <a href="tel: 888-236-2427">
                            <h5 className="info-title">888-236-2427</h5>
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
                    
                    <u><b>Overview:</b></u>
                    
                    <ListItem>
                        30 Brands, more than 7,000 hotels.
                    </ListItem>
                    <ListItem>
                    Find info about all of the brands  &nbsp;
                        <a href="https://www.marriott.com/marriott-brands.mi" target="_blank" rel="noopener noreferrer" >here</a>
                    </ListItem>

                    <u><b>Benfits:</b></u>

                    <ListItem>
                    Stay 50 or more nights/year
                    </ListItem>
                    <ListItem>
                    50% Bonus Points on Stays
                    </ListItem>
                    <ListItem>
                    Welcome Gift Choice (points, breakfast offering, or amenity - varies by brand)
                    </ListItem>
                    <ListItem>
                    Annual Gift Choice - Choose one from the following: five Suite Night Awards™, 
                    give the gift of Silver Elite status, 40% off your favorite mattress, 
                    five Elite Night Credits or a $100 charity donation.
                    </ListItem>
                    <ListItem>
                    Lounge Access
                    </ListItem>
                    <ListItem>
                    4 p.m. Late Checkout
                    </ListItem>
                    <ListItem>
                    Enhanced In-Room Internet Access
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}