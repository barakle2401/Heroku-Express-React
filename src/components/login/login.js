import React, { useEffect, useState, useRef } from 'react';
//import { makeStyles } from '@material-ui/core';
//import { Paper, Card, CardContent, useMediaQuery, Typography } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// const useStyles = makeStyles((theme) => ({
//     root: {
//        height :"100vh"


//     },
//     cardWrapper:{
//         padding:"16px"
//     },
//     card :{
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         margin : "auto",

//         height :"80vh",

//         [theme.breakpoints.down('sm')]: {
//             width : "100%"
//         },
//         [theme.breakpoints.up('md')]: {
//             width : "80%",

//         },
//         [theme.breakpoints.up('lg')]: {
//             width : "60%"
//         }


//     }
// }));
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(10),
        padding: "1rem",

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& label.Mui-focused': {//label color
            color: '#FF8E53',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#FE6B8B ',
            },
            '&:hover fieldset': {
                borderColor: '#FF8E53',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FF8E53',
            },
        },

    },
    avatar: {
        margin: theme.spacing(1),
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
}));
function Login(props) {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md" >
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log in
          </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
            </Button>

                </form>
            </div>

        </Container>
    );
}
export default Login