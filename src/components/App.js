import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import Header from "./header";
import MainSection from "./mainSection"
import BottomSection from "./bottomSection"
import { ThemeProvider } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';

import { createMuiTheme } from '@material-ui/core/styles'
function App() {

  const [darkMode, setDarkMode] = useState(true)

  const switchMode = () => {

    darkMode ? setDarkMode(false) : setDarkMode(true)
  }
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"

    },
  })

  return (
    < >
      <ThemeProvider theme={theme}>
        <Paper >
          <Header switchMode={switchMode} darkMode={darkMode} />
          <MainSection />
          <BottomSection />
        </Paper>

      </ThemeProvider>
    </>
  );
}

export default App;
