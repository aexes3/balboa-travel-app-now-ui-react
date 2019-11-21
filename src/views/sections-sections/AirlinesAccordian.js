import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
    Avatar,
    Button,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    CardActionArea,
    Collapse,
    IconButton,
    Typography,
} from '@material-ui/core';
import { Col, Row } from 'reactstrap';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import image from 'assets/img/presentation-page/AA-LOGO.JPG'
import image2 from 'assets/img/presentation-page/aaavitar.png'
import image3 from 'assets/img/presentation-page/United-gold-card.jpeg'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 350,
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
        backgroundImage: `url(${image3})`,
        color: 'black'
    },
}));

const innerStyles = makeStyles(theme => ({
    card: {
        maxWidth: 350,
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
        backgroundImage: `url(${image2})`,
        color: 'black'
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const innerclasses = innerStyles();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Row>
            <Col>
            <Card className={innerclasses.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={innerclasses.avatar}
                            >
                                AA
                            </Avatar>
                        }

                        title="American Ailines"
                        subheader="Phone number #"
                    />
                    <CardMedia
                        className={innerclasses.media}
                        image={image}
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum
                           Lorum ipsum Lorum ipsum Lorum ipsumLorum ipsum Lorum ipsum
        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>

                        <IconButton
                            className={clsx(innerclasses.expand, {
                                [innerclasses.expandOpen]: expanded,
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
                            <Card className={innerclasses.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={innerclasses.media}
                                        image={image3}
                                        title="gold card"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Gold
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Qualify:
                                            <ul>
                                                <li>Elite Qualifying Miles (EQM) 25000</li>
                                                <li>Elite Qualifying Segments (EQS) 30</li>
                                                <li>Elite Qualifying Dollars (EQD) $3000</li>
                                            </ul>
                                            Benefits:
                                            <ul>
                                                <li>Complimentary Space Available Upgrades for flights 500 miles or less 24 hours before departure</li>
                                                <li>Earn/Purchase 500 mile upgrades</li>
                                                <li>40% Elite Mile Bonus</li>
                                                <li>Priority Check in</li>
                                                <li>1 free checked bag</li>
                                                <li>Complimentary same day standby</li>
                                                <li>Exclusive Service desk
                                                    <Button
                                                        className="btn-round ml-1"
                                                        color="linkedin"
                                                        href="tel:877-208-1396"
                                                        // onClick={e => e.preventDefault()}
                                                        size="sm"
                                                    >
                                                        <i className="fa fa-phone"></i>
                                                    </Button>
                                                </li>
                                                <li>Preferred Seating</li>
                                                <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                                                <li> Award processing change waived</li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>


                            <Card className={innerclasses.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={innerclasses.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Platinum
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Qualify:
                  <ul>
                                                <li>Elite Qualifying Miles (EQM) 25000</li>
                                            </ul>
                                            Benefits:
                  <ul>
                                                <li>Complimentary same day standby</li>
                                                <li>Exclusive Service desk
                    <Button
                                                        className="btn-round ml-1"
                                                        color="linkedin"
                                                        href="tel:877-208-1396"
                                                        // onClick={e => e.preventDefault()}
                                                        size="sm"
                                                    >
                                                        <i className="fa fa-phone"></i>
                                                    </Button>
                                                </li>
                                                <li>Preferred Seating</li>
                                                <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                                                <li> Award processing change waived</li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            {/* <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don’t open.)
          </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
                        </CardContent>
                    </Collapse>
                </Card>
            </Col>

            <Col>
            <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}
                            >
                                AA
                            </Avatar>
                        }

                        title="United Airlines"
                        subheader="Email@email.com"
                    />
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                           Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum
                           Lorum ipsum Lorum ipsum Lorum ipsumLorum ipsum Lorum ipsum
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
                            <Card className={innerclasses.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={innerclasses.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Gold
          </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Qualify:
                  <ul>
                                                <li>Elite Qualifying Miles (EQM) 25000</li>
                                                <li>Elite Qualifying Segments (EQS) 30</li>
                                                <li>Elite Qualifying Dollars (EQD) $3000</li>
                                            </ul>
                                            Benefits:
                  <ul>
                                                <li>Complimentary Space Available Upgrades for flights 500 miles or less 24 hours before departure</li>
                                                <li>Earn/Purchase 500 mile upgrades</li>
                                                <li>40% Elite Mile Bonus</li>
                                                <li>Priority Check in</li>
                                                <li>1 free checked bag</li>
                                                <li>Complimentary same day standby</li>
                                                <li>Exclusive Service desk
                    <Button
                                                        className="btn-round ml-1"
                                                        color="linkedin"
                                                        href="tel:877-208-1396"
                                                        // onClick={e => e.preventDefault()}
                                                        size="sm"
                                                    >
                                                        <i className="fa fa-phone"></i>
                                                    </Button>
                                                </li>
                                                <li>Preferred Seating</li>
                                                <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                                                <li> Award processing change waived</li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>


                            <Card className={innerclasses.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={innerclasses.media}
                                        image={image3}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Platinum
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Qualify:
                  <ul>
                                                <li>Elite Qualifying Miles (EQM) 25000</li>
                                            </ul>
                                            Benefits:
                  <ul>
                                                <li>Complimentary same day standby</li>
                                                <li>Exclusive Service desk
                    <Button
                                                        className="btn-round ml-1"
                                                        color="linkedin"
                                                        href="tel:877-208-1396"
                                                        // onClick={e => e.preventDefault()}
                                                        size="sm"
                                                    >
                                                        <i className="fa fa-phone"></i>
                                                    </Button>
                                                </li>
                                                <li>Preferred Seating</li>
                                                <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                                                <li> Award processing change waived</li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            {/* <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don’t open.)
          </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
                        </CardContent>
                    </Collapse>
                </Card>
            </Col>

            <Col>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}
                            >
                                AA
                            </Avatar>
                        }

                        title="Alaska Airlines"
                        subheader="website link"
                    />
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum
                           Lorum ipsum Lorum ipsum Lorum ipsumLorum ipsum Lorum ipsum
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
                            <Card className={innerclasses.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={innerclasses.media}
                                        image={image3}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Gold
          </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Qualify:
                  <ul>
                                                <li>Elite Qualifying Miles (EQM) 25000</li>
                                                <li>Elite Qualifying Segments (EQS) 30</li>
                                                <li>Elite Qualifying Dollars (EQD) $3000</li>
                                            </ul>
                                            Benefits:
                  <ul>
                                                <li>Complimentary Space Available Upgrades for flights 500 miles or less 24 hours before departure</li>
                                                <li>Earn/Purchase 500 mile upgrades</li>
                                                <li>40% Elite Mile Bonus</li>
                                                <li>Priority Check in</li>
                                                <li>1 free checked bag</li>
                                                <li>Complimentary same day standby</li>
                                                <li>Exclusive Service desk
                    <Button
                                                        className="btn-round ml-1"
                                                        color="linkedin"
                                                        href="tel:877-208-1396"
                                                        // onClick={e => e.preventDefault()}
                                                        size="sm"
                                                    >
                                                        <i className="fa fa-phone"></i>
                                                    </Button>
                                                </li>
                                                <li>Preferred Seating</li>
                                                <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                                                <li> Award processing change waived</li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>


                            <Card className={innerclasses.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={innerclasses.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Platinum
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Qualify:
                  <ul>
                                                <li>Elite Qualifying Miles (EQM) 25000</li>
                                            </ul>
                                            Benefits:
                  <ul>
                                                <li>Complimentary same day standby</li>
                                                <li>Exclusive Service desk
                    <Button
                                                        className="btn-round ml-1"
                                                        color="linkedin"
                                                        href="tel:877-208-1396"
                                                        // onClick={e => e.preventDefault()}
                                                        size="sm"
                                                    >
                                                        <i className="fa fa-phone"></i>
                                                    </Button>
                                                </li>
                                                <li>Preferred Seating</li>
                                                <li>Complimentary Main Cabin Extra 24 hours before departure</li>
                                                <li> Award processing change waived</li>
                                            </ul>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            {/* <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don’t open.)
          </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography> */}
                        </CardContent>
                    </Collapse>
                </Card>
            </Col>
        </Row>
        
    );
}