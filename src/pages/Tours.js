import { Grid } from '@material-ui/core';

function Tours() {
    return(
        <Grid container spacing={3}>
            <Grid item xs={9}>
                <h1>Tours</h1>
            </Grid>
            <Grid item xs={3}>
                <h1>1-855-779-9045</h1>
            </Grid>
        </Grid>
    );
}

export default Tours;