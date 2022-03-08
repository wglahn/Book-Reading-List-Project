import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import bookTheme from './themes/bookTheme';
import AppContextProvider from './context/AppContext';
import BookListProvider from './context/BookListContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={bookTheme}>
      <AppContextProvider>
        <BookListProvider>
          <CssBaseline />
          <App />
        </BookListProvider>
      </AppContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
