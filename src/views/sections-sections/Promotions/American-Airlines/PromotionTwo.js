import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from '../../../../assets/img/presentation-page/badworkergif.gif'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function PromotionTwo() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Bad Worker"
          height="140"
          image={Image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bad Worker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bad day at the office
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}