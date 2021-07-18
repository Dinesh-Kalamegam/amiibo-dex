import { useState, useEffect } from 'react';
import { createTheme } from '@material-ui/core/styles';
import { Paper, Switch, Typography, ThemeProvider, CssBaseline, Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import axios from 'axios'
import AmiiboCard from './components/AmiiboCard'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [amiiboData, setAmiiboData] = useState(null)
  const [amiiLength, setAmiiLength] = useState(1)
  const [page, setPage] = useState(1)

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    axios.get("https://amiiboapi.com/api/amiibo/")
      .then(res => {
        setAmiiboData(res.data.amiibo)
        setAmiiLength(res.data.amiibo.length)
      })
      .catch(error => console.log(error))
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper >
        <Typography variant="h1">
          AmiiboDex
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
          spacing={0}
        >
          {amiiboData && amiiboData.slice(1 + (10 * (page - 1)), 11 + (10 * (page - 1))).map(amiibo => (
            <AmiiboCard amiibo={amiibo} />
          ))}
        </Grid>
        <Pagination count={Math.floor(amiiLength / 10)} onChange={handlePageChange} />
      </Paper>
    </ThemeProvider >
  );
}

export default App;
