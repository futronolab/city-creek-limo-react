import { Grid, makeStyles } from '@material-ui/core';
import ServicesTile from './pageTools/tiles/ServicesTile.js';
import UpcomingEvents from './pageTools/tiles/UpcomingEventsTile.js';


function Home() {

    return(
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <UpcomingEvents/>
            </Grid>
            <Grid item xs={12} md={4}>
                <ServicesTile/>
            </Grid>
            <Grid item xs={12} md={4}>
                <h2>Testimonials</h2>
            </Grid>
        </Grid>
    );
}

export default Home;