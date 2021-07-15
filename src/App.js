import { useState, useEffect } from 'react';
import { createTheme } from '@material-ui/core/styles';
import { Paper, Switch, Typography, ThemeProvider, CssBaseline, Grid } from '@material-ui/core';
import axios from 'axios'
import AmiiboCard from './components/AmiiboCard'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [amiiboData, setAmiiboData] = useState(null)
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    axios.get("https://amiiboapi.com/api/amiibo/")
      .then(res => {
        setAmiiboData(res.data.amiibo)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper >
        <Typography variant="h1">
          {darkMode ? 'Dark Mode' : 'Light Mode'}
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
          pagination
        >
          {amiiboData && amiiboData.map(amiibo => (
            <AmiiboCard amiibo={amiibo} />
          ))}
        </Grid>
      </Paper>
    </ThemeProvider >
  );
}

export default App;
