import { 
    Grid, Card, CardActionArea, CardContent,
    CardMedia, Typography, makeStyles, Button, 
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';
import FeaturedEventImage from '../../images/FanX-Square-white-back.png';
import {
    Switch, Route, BrowserRouter as Router, Link,
} from "react-router-dom";
import Comicon from '../../Comicon.js';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 10,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
}));

const FeaturedEventCardTile = ({props}) => {

    const classes = useStyles();

    return(
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        {props.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.event}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    image={FeaturedEventImage}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <p>{props.text1}</p>
                        <p>{props.text2}</p>
                        <p>{props.text3}</p>
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={"location.href='http://www.google.com'"}
                        href='/comicon'
                    >
                        {props.actionButton}
                        <SendIcon className={classes.rightIcon}/>
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

const eventObject = {
    title: "Upcoming Events",
    event: "SL Comic Con 2016",
    image: FeaturedEventImage,
    text1: "City Creek Limousine is excited to welcome SALT LAKE COMIC CON " +
          "March 24-26, 2016 - Salt Lake City, Utah. We hope you have a great" +
          " Comic Con.",
    text2:["Transportation for COMIC CON 2015 attendees is available. ",
          "Click ", 
            <Router>
                <a href="/comicon">here</a>
                <Switch>
                    <Route exact path="comicon">
                        <Comicon/>
                    </Route>
                </Switch>
            </Router>
          ," to schedule exclusive transportation or call us at ",
          <strong><a href="tel:855-779-9045">1 (855) 779-9045</a></strong>],
    text3:["You can also send us an email at ",
          <a href="mailto:info@citycreeklimo.com">info@citycreeklimo.com</a>, 
          " to schedule ",
          "your exclusive transportation."],
    actionButton: "Schedule Transporation",
};

const gridElevation = 10;


export default function UpcomingEventsTile() {

    return(  
        <Grid 
            container spacing={3}
            elevation={gridElevation}
        >
            <Grid item xs={12}>
                <FeaturedEventCardTile
                    props={eventObject}
                />
            </Grid>
        </Grid>
    );
}