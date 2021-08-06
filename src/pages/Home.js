import { Grid } from '@material-ui/core';
import ServicesTile from './pageTools/tiles/ServicesTile.js';

function Home() {
    return(
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h1>Home</h1>
            </Grid>
            <Grid item xs={4}>
                <h2>Comicon</h2>
            </Grid>
            <Grid item xs={4}>
                <ServicesTile/>
            </Grid>
            <Grid item xs={4}>
                <h2>Testimonials</h2>
            </Grid>
        </Grid>
    );
}

export default Home;