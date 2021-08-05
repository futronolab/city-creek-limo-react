import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import React, { useState } from 'react';

const Tile = (title, image, paragraph) => (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <h2>{title}</h2>
        </Grid> 
        <Grid item xs={12}>
            {image}
        </Grid>
        <Grid item xs={12}>
            {paragraph}
        </Grid>
    </Grid>
);

const corporateText = (
    <p>
        City Creek Limousine recognizes the unique needs of our guests. 
        We have taken the same professional, personal, executive service 
        that we provide for our hotel guests and applied it to our 
        corporate clients.
    </p>
);

export default function ServicesTile() {
    return(
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Tile/>                
            </Grid> 
            <Grid item xs={12}>
                <Tile/>
            </Grid>
            <Grid item xs={12}>
                <Tile/>
            </Grid>
        </Grid>
    );
}