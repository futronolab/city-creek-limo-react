// I know how to make the react router work. Wrap it all in router. Change path with link. Have switch at end of everything which 
// enforces the Route to the component.

// I need to know how to handle the menu because the current tabPanel doesn't scale with size. I can use the hidden element to 
// make it be hidden or visible at a certain size
    // Options:
      // TabPanel <-- I think I'll use this for desktop
      // AppBar (implmentation of Toolbar)
      // Menu <-- use it for smDown with hidden


  // Next steps
    // 1) Get basic routing down on menu click
    // 2) Make it scale with multiple sizes
    // 3) Re-org this file into multiple components because it will be ugly after all of this work
    // 4) Start to work on the actual pages
        // Consider working on a tile
        // Also will need to look at contact forms.

import LogoAndNumber from './LogoAndNumber.js'
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { AppBar, Tabs, Tab, Typography, Box, Grid,
  makeStyles, Hidden, } from '@material-ui/core';
import {
  Switch, Route, Link, Redirect, BrowserRouter as Router,
} from "react-router-dom";
import CorporateTravel from '../pages/CorporateTravel.js';
import Home from '../pages/Home.js'
import Rates from '../pages/Rates.js';
import Resort from '../pages/Resort.js';
import Tours from '../pages/Tours.js';
import UpcomingEvents from '../pages/UpcomingEvents.js';
import VanService from '../pages/VanService.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



function NavigationHeader() {

    // const classes = useStyles();

    // return (
    //     <Grid item xs={12}>
    //         <Paper className={classes.paper}>
    //             <p>xs=12</p>
    //             <Button variant="contained" color="primary">
    //                 Hello World
    //             </Button>
    //         </Paper>
    //     </Grid>
    // );

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <Grid item xs={12}>
      <LogoAndNumber/>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            centered  
          >
            <LinkTab label="Home" href="/" {...a11yProps(0)} />
            <LinkTab label="Corporate Travel" href="/coprorate_travel" {...a11yProps(1)} />
            <LinkTab label="Van Service" href="/van_service" {...a11yProps(2)} />
            <LinkTab label="Resort" href="/resorts" {...a11yProps(3)} />
            <LinkTab label="Tours" href="/tours" {...a11yProps(4)} />
            <LinkTab label="Rates" href="/rates" {...a11yProps(5)} />
            <LinkTab label="Upcoming Events" href="/upcoming_events" {...a11yProps(6)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Home/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CorporateTravel/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <VanService/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Resort/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Tours/>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Rates/>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <UpcomingEvents/>
        </TabPanel>
      </div>
    </Grid>
    </Router>
  );
}

export default NavigationHeader;