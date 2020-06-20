import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import {
  BrowserRouter, Switch,
  Route,
  Link
} from 'react-router-dom'

import { createMuiTheme } from '@material-ui/core/styles'



import './App.css';
import Header from "./header";
import LandingPage from "./LandingPage/ladingPage"
import Login from "./login/login"


function App() {

  const [darkMode, setDarkMode] = useState(true)
  const [apiResponse, setApiResponse] = useState('')
  const switchMode = () => {

    darkMode ? setDarkMode(false) : setDarkMode(true)
  }
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"

    },
  })


  useEffect(() => {

    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setApiResponse(res))

  }, []);

  return (
    <BrowserRouter >
      <ThemeProvider theme={theme}>
        <Paper >
          <Header switchMode={switchMode} darkMode={darkMode} />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>


        </Paper>

      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
