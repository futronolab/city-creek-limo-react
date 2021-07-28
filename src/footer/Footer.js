import { Grid } from '@material-ui/core';
import AboutUs from './AboutUs.js'
import ContactUs from './ContactUs.js'

function Footer() {
    return(
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
                <h2>About Us</h2>
                <AboutUs/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <h2>Contact Us</h2>
                <ContactUs/>
            </Grid>
        </Grid>
    );
}

export default Footer;