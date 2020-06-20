import React, { useEffect, useState, useRef, useCallback } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Button, Paper } from '@material-ui/core';
import axios from "axios";
const useStyles = makeStyles(({
    root: {


        background: 'linear-gradient(45deg, #0cebeb 20%, #29ffc6  90%)',
        padding: "5rem"
    },
    signUpBtn: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        padding: '10px 30px',
        letterSpacing: "2px",
        fontSize: "1.5rem",
        border: "1px solid white",
        '&:hover': {

            opacity: ".9"
        }
    },
    logo: {
        width: "15rem",
        height: "15rem",
        margin: "auto",
        textAlign: "center"
    },
    textWrapper: {
        display: "flex",
        flexDirection: "column",

        padding: "3rem",
        textAlign: "center",
        marginBottom: "1rem",
        '& h1': {

            fontSize: "3.5rem",
            fontFamily: "Oswald, sans-serif",
            fontWeight: "300",
            marginBottom: "1rem"
        }, '& h5': {

            fontSize: "1.3928571428571428rem",
            fontFamily: "Oswald, sans-serif",
            fontWeight: "400",
            lineHeight: "1.334",
            color: "gray"
        }, '& span': {
            color: " #FF8E53"
        }
    }
}));

function MainSection() {
    const classes = useStyles();
    const [users, setUsers] = useState([])
    const [isSending, setIsSending] = useState(false)

    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('http://localhost:9000/users', requestOptions)
            .then(response => response.json())
            .then((users) => setUsers(users.data)

            );

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);



    return (


        < Container maxWidth="xl" className={classes.root} >
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} >

                    <div className={classes.textWrapper}>
                        <h1>Start Tracking <br /> Your Junk Food <br />Habits,<span> Today! </span></h1>

                        <h5> Junk tracker is a new web app that could help you achieve your healthy life back. </h5>
                    </div>
                    <Box display="flex" justifyContent="center" p={1} >
                        <Paper>
                            <Button size="large" disabled={isSending} className={classes.signUpBtn} >
                                SIGN UP NOW
                        </Button>
                            {/* <ul>{users.map(user => <li key={user.id}>{user.name}{user.id} </li>)}</ul> */}
                        </Paper>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={6} >
                    {/* <Paper className={classes.textWrapper}>
                        <img src="https://i.ibb.co/hRD3J5C/logo3.png" alt="logo2" className={classes.logo} />
                    </Paper> */}
                </Grid>

            </Grid>

        </Container >

    );
}
export default MainSection