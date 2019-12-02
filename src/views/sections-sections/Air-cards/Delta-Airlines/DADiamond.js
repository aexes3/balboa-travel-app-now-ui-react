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
import Image from '../../../../assets/img/presentation-page/dadiamond.JPG';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
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
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          Lorum ipsum
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
          <Typography variant="body2" color="textSecondary">
                <List>
                <ListItem>
                        &#45; Pick a Choice Benefit exclusive to Platinum Medallion Members.  Choose from: < br />
                            &#42; Delta Sky Club® Membership Options < br />
                            &#42; Global and Regional Upgrade Certificates < br />
                            &#42; Gift Gold Medallion Status to a friend or family member < br />
                            &#42; 25,000 bonus miles for yourself, someone else, or a SkyWish charity of your choice < br />
                            &#42; A $200 Delta travel voucher < br />
                            &#42; A $200 Tiffany and Co. gift card < br />
                    </ListItem>
                    <ListItem>
                        &#45; 11 miles per dollar spent
                    </ListItem>
                    <ListItem>
                        &#45; Complimentary CLEAR membership to speed thru security (a $179 annual value)
                    </ListItem>
                    <ListItem>
                        &#45; Highest priority boarding along with our First Class, Delta Premium Select 
                                or Delta One cabins, so you can be seated and settled first
                    </ListItem>
                    <ListItem>
                        &#45; Sky Priority® suite of services including check-in, priority security line access, and expedited baggage service
                    </ListItem>
                    <ListItem>
                        &#45; Unlimited complimentary upgrades beginning 120 hours (5 days) prior to departure
                    </ListItem>
                    <ListItem>
                        &#45; Waived fees for bags and ticket changes < br />
                            &#42; Waived change fees for Award Travel < br />
                            &#42; Your first checked bag free when traveling on a Delta or airline partner flight. Up to 8 of your travel 
                                    companions also receive their first checked bag free when traveling on a Delta flight < br />
                            &#42; Waived Same-Day Confirmed Fee < br />
                            &#42; Waived Same-Day Standby Fees < br />
                    </ListItem>
                    <ListItem>
                        &#45; Priority wait list
                    </ListItem>
                    <ListItem>
                        &#45; SkyTeam Elite Plus status
                    </ListItem>
                    <ListItem>
                        &#45; VIP phone line
                    </ListItem>
                </List>
          </Typography>
           
        </CardContent>
      </Collapse>
    </Card>
  );
}