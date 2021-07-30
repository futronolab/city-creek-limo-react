import './App.css';
import { CssBaseline, Container, } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import NavigationHeader from './navigation/NavigationHeader.js'
import Footer from './footer/Footer.js'
import React from "react";
import Body from './pages/Body.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function App() {

  const classes = useStyles();

  return (
      <div className={classes.root}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <NavigationHeader/>
            </Grid>
            <Grid item xs={12}>
              <Body/>
            </Grid>
            <Grid item xs={12}>
              <Footer/>
            </Grid>
          </Grid>
        </Container>
      </div>
  );
}

export default App;
