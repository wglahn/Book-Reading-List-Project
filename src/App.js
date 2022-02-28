import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar';
import bookTheme from './themes/bookTheme';
import Button from './components/Button';
import TextField from './components/TextField'
import CheckBox from './components/CheckBox'

function App() {
  return (
    <ThemeProvider theme={bookTheme}>
      <NavBar>

        <h1>Book List Project</h1>
        <TextField />
        <CheckBox />
        <Button variant="text">Click Me Beautiful</Button>
        

      </NavBar>
    </ThemeProvider>
  );
}

export default App;
