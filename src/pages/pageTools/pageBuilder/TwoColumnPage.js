import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import ContactForm from '../forms/ContactForm';


export default function TwoColumnPage({pageInfo}) {
    return(
        <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
                {pageInfo}
            </Grid> 
            <Grid item md={6} xs={12}>
                <ContactForm/>
            </Grid>
        </Grid>
    );
}