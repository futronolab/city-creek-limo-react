import CorporateTravel from "./CorporateTravel.js";
import Home from './Home.js'
import Rates from './Rates.js'
import Resort from './Resort.js'
import Tours from './Tours.js'
import UpcomingEvents from './UpcomingEvents.js'
import VanService from './VanService.js'

import {
    Switch, Route, BrowserRouter as Router,
} from "react-router-dom";

export default function Body() {
    return(
        <Router>
            <Switch>
                <Route exact path="/corporate_travel">
                    <CorporateTravel/>
                </Route>
                <Route exact path="/rates">
                    <Rates/>
                </Route>
                <Route exact path="/resort">
                    <Resort/>
                </Route>
                <Route exact path="/tours">
                    <Tours/>
                </Route>
                <Route exact path="/upcoming_events">
                    <UpcomingEvents/>
                </Route>
                <Route exact path="/van_service">
                    <VanService/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}