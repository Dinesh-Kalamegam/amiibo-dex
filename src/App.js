import { useState, useEffect } from 'react';
import { Paper, Switch, Typography, ThemeProvider, CssBaseline, CircularProgress } from '@material-ui/core';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
import axios from 'axios'
import AmiiboCard from './components/AmiiboCard'


const useStyles = makeStyles(() => ({
  appTitle: {
    padding: "2rem",
    fontSize: "3rem",
    textAlign: "center"
  },
  pageContent: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  amiiboGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    rowGap: "2rem",
    columnGap: "2rem"
  },

  pagination: {
    marginTop: "2rem"
  }
}));

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [amiiboData, setAmiiboData] = useState(null)
  const [amiiLength, setAmiiLength] = useState(1)
  const [page, setPage] = useState(1)
  const numberOfResults = 20
  const classes = useStyles()

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
      <Typography variant="h1" className={classes.appTitle}>
        AmiiboDex
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Typography>

      <Paper className={classes.pageContent}>
        <div className={classes.amiiboGrid}>
          {
            amiiboData ?
              amiiboData
                .slice(1 + (numberOfResults * (page - 1)), (numberOfResults + 1) + (numberOfResults * (page - 1)))
                .map(amiibo => (<AmiiboCard key={amiibo.head + amiibo.tail} amiibo={amiibo} />))
              :
              <CircularProgress color="secondary" />
          }
        </div>

        <Pagination
          className={classes.pagination}
          color="primary"
          count={Math.floor(amiiLength / numberOfResults)}
          onChange={(event, value) => setPage(value)}
          showFirstButton
          showLastButton
        />

      </Paper>
    </ThemeProvider >
  );
}

export default App;
