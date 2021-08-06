import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import React, { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '80%',
      },
      '& .MuiButton-root': {
        margin: theme.spacing(1),
        alignItems: 'center',
      }
    },
}));
    

export default function ContactForm() {
    // State values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const hasNumber = (value) => {
        return /\d/.test(value);
    }

    const isValidEmail = (str) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)) {
            return true;
        }
        return false;
    }

    const checkName = () => {
        if(hasNumber(name)) {
            return false;
        }
        return true;
    }

    const checkEmail = () => {
        return isValidEmail(email)
    }   

    const checkPhone = () => {
        var a = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(phone);
        return a;
    }

    const checkMessage = (str) => {
        if(str) {
            return true;
        }
        return false;
    }

    // Functions
    const handleSubmit = () => {
        
        alert(
            'Name: ' + name + '\n' +
            'Email: ' + email + '\n' +    
            'Phone: ' + phone + '\n' +   
            'Message: ' + message + '\n'    
        );
    }

    const classes = useStyles();


    return (
        <form className={classes.root} onSubmit={handleSubmit}>
          <div>
            <Grid container>
                <Grid item xs={12}>
                    <h1>Contact Form</h1>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="outlined-name-textfield"
                        label="Your Name"
                        type="text"
                        variant="outlined"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required    
                        id="outlined-email-textfield"
                        label="Email"
                        type="email"
                        variant="outlined"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="outlined-required-textfield"
                        label="Phone Number"
                        type="tel"
                        placeholder="(Area code) Number"
                        variant="outlined"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="outlined-message-textfield"
                        label="Message"
                        type="text"
                        autoComplete="current-password"
                        variant="outlined"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        type='submit'
                    >
                        Send
                    </Button>
                </Grid>
            </Grid>
          </div>
        </form>
    );
}