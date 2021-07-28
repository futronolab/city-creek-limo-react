import Header from '../Header.js'
import Button from '@material-ui/core/Button';
import '../App.css';
import { CssBaseline, Container, Gridfrom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


function NavigationHeader() {

    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <p>xs=12</p>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </Paper>
        </Grid>
    );
}

export default NavigationHeader;