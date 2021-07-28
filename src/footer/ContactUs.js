import { Grid } from '@material-ui/core';

function ContactUs() {
    return(
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <p>
                    <strong>Business Contact Info</strong>
                </p>
                <p>+1 (801) 521-5466</p>
                <p>+1 (855) 779-9045</p>
                <p>info@citycreeklimo.com</p>
                <p>CityCreekLimousine.com</p> 
                
                <p>
                    <strong>Chafer James - Partner and Co-Owner</strong>
                </p>
                <p>chaferjames@citycreeklimo.com</p>

                <p>
                    <strong>Robert Lee - Founder</strong>
                </p>
                <p>robertlee@citycreeklimo.com</p>
            </Grid>
        </Grid>
    );
}

export default ContactUs;