import { useState } from 'react'
// import Button from '@material-ui/core/Button';
import { createTheme } from '@material-ui/core/styles';
import { Paper, Switch, Typography, ThemeProvider, CssBaseline } from '@material-ui/core';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
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
