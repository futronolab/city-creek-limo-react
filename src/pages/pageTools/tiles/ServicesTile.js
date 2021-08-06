import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { 
    Grid, Card, CardActionArea, CardContent,
    CardMedia, Typography, Paper, makeStyles} 
    from '@material-ui/core';
import React, { useState } from 'react';
import CorporateImage from '../../images/Corporate_Services_Airport.jpg';
import ResortImage from '../../images/Resort_Services_Skiing.jpg';
import VanImage from '../../images/Van_Service_Home2.jpg';

// const Tile = ({props}) => {
//     console.log(props.image);
//     return(
//         <Grid container spacing={3}>
//             <Grid item xs={12}>
//                 <h3>{props.title}</h3>
//             </Grid> 
//             <Grid item xs={12}>
//                 <img src={props.image}/>
//             </Grid>
//             <Grid item xs={12}>
//                 <p>{props.text}</p>
//             </Grid>
//         </Grid>
//     );
// }

const usePaperStyles = makeStyles ({
    root: {
      padding: 10,
    },
  });

const paperElevation = 10;


const CardTile = ({props}) => {
    return(
        <Card>
            <CardActionArea>
            <CardMedia
                component="img"
                image={props.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.text}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
}

const corporateObject = {
    title: "Corporate",
    image: CorporateImage,
    text: "City Creek Limousine recognizes the unique " + 
          "needs of our guests. We have taken the same professional, personal, " +
          "executive service that we provide for our hotel guests and applied it " +
          "to our corporate clients.",
};

const vanObject = {
    title: "Executive Van Service",
    image: VanImage,
    text: "Take advantage of our private and group transportation. " + 
          "Our executive van service is designed to save you time and money. " +
          "Allowing small groups to travel together in comfort to any Salt Lake or Utah destination.",
};

const resortObject = {
    title: "Resort",
    image: ResortImage,
    text: "Coming to Utah to ski the greatest snow on earth? " +
          "You can enjoy three world-class ski resorts, Deer " +
          "Valley Resort, Park City Mountain Resort, and Canyons. " +
          "Discover the deep powder of Alta, Snowbird, Brighton, " +
          "Solitude and Powder Mountain. Or explore the majestic " +
          "Sundance or Snow Basin resorts.",
};

export default function ServicesTile() {

    const paperClasses = usePaperStyles();

    return(  
        <Paper
            className={paperClasses.root}
            elevation={paperElevation}
        >
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h2>Services</h2>
            </Grid>
            <Grid item xs={12}>
                <CardTile 
                    props={corporateObject}
                />
            </Grid> 
            <Grid item xs={12}>
                <CardTile
                    props={vanObject}
                />
            </Grid> 
            <Grid item xs={12}>
                <CardTile 
                    props={resortObject}
                />
            </Grid> 
        </Grid>
        </Paper>  
    );
}