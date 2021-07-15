import { useState , useEffect} from 'react';
import { createTheme } from '@material-ui/core/styles';
import { Paper, Switch, Typography, ThemeProvider, CssBaseline } from '@material-ui/core';
import axios from 'axios'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [amiiboData,setAmiiboData] = useState(null)
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  useEffect(()=>{
    axios.get("https://amiiboapi.com/api/amiibo/")
    .then(res=>{
      setAmiiboData(res.data.amiibo)
    })
    .catch(error=>console.log(error))
  },[])
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={{ height: '100vh' }}>
        <Typography variant="h1">
          {darkMode ? 'Dark Mode' : 'Light Mode'}
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Typography>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
