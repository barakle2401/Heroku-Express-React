import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { Paper, Typography } from '@material-ui/core/';



import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
const useStyles = makeStyles(({
    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
    },
    logo: {
        width: "5rem",
        height: "3rem",
        margin: "auto",
        textAlign: "center"
    },
    progress: {

        color: "white",
        '& .MuiLinearProgress-barColorPrimary': {

            backgroundColor: '#FE6B8B',
            height: "1rem"
        }
    }
}));






function Header(props) {

    const classes = useStyles(props)

    return (



        <AppBar >
            <LinearProgress variant="determinate" className={classes.progress} value={80} />
            <Paper>

                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        Junk Tracker
                    </Typography>
                    <Link to="/">
                        <IconButton

                        >
                            <HomeOutlinedIcon />
                        </IconButton>
                    </Link>
                    <Link to="/login">
                        <IconButton

                        >
                            <PermIdentityIcon />
                        </IconButton>
                    </Link>

                    <IconButton

                        onClick={props.switchMode}
                    >
                        {props.darkMode ? <WbSunnyOutlinedIcon className={classes.icon} /> : <Brightness3Icon className={classes.icon} />}

                    </IconButton>

                </Toolbar>
            </Paper>
        </AppBar>


    );
}
export default Header
