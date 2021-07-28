import { Grid } from '@material-ui/core';

function LogoAndNumber() {
    return(
        <Grid container spacing={3}>
            <Grid item xs={9}>
                <h1>City Creek Limo</h1>
            </Grid>
            <Grid item xs={3}>
                <h1>1-855-779-9045</h1>
            </Grid>
        </Grid>
        
    );
}

export default LogoAndNumber;