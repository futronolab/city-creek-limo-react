// I know how to make the react router work. Wrap it all in router. Change path with link. Have switch at end of everything which 
// enforces the Route to the component.

// I need to know how to handle the menu because the current tabPanel doesn't scale with size. I can use the hidden element to 
// make it be hidden or visible at a certain size
    // Options:
      // TabPanel <-- I think I'll use this for desktop
      // AppBar (implmentation of Toolbar)
      // Menu <-- use it for smDown with hidden

import LogoAndNumber from './LogoAndNumber.js'
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { 
  AppBar, Tabs, Tab, Grid,
} from '@material-ui/core';


export default function NavigationHeader() {
  return (
    // <Router>
      <Grid item xs={12}>
        <LogoAndNumber/>
          <AppBar position="static">
            <Tabs
              variant="fullWidth"
              aria-label="nav tabs example"
              centered  
            >
              <Tab label="Home" href="/"/>
              <Tab label="Corporate Travel" href="/corporate_travel"/>
              <Tab label="Van Service" href="/van_service"/>
              <Tab label="Resort" href="/resort"/>
              <Tab label="Tours" href="/tours"/>
              <Tab label="Rates" href="/rates"/>
              <Tab label="Upcoming Events" href="/upcoming_events"/>
            </Tabs>
          </AppBar>        
      </Grid>
    // </Router>
  );
}