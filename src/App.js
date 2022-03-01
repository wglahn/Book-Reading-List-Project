import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar';
import bookTheme from './themes/bookTheme';
import Button from './components/Button';
import TextField from './components/TextField'
import CheckBox from './components/CheckBox'

import {CancelToken} from 'apisauce';
import {getBooks} from './api/apiBook';
// import {postUser} from './api/apiUser'
// import { getLogin } from './api/apiLogin';
// import { putUser } from './api/apiUser';
// import { deleteUser } from './api/apiUser';


const handleClick = async () => {
  const source = CancelToken.source();
  const response_object = await getBooks(source.token);
  // const response_object = await postUser('email@mail.com', 'Wade', 'Glahn','12345',source.token);
  // const response_object = await getLogin('email@mail.com','12345',source.token);
  // const response_object = await putUser('vhb6N8ZKH14xdHNE4dJCcckCeAFT9fg34Ia63-Xquhk',{password:'1234'},source.token);
  // const response_object = await deleteUser('vhb6N8ZKH14xdHNE4dJCcckCeAFT9fg34Ia63-Xquhk',source.token);
  console.log(response_object)
}

function App() {
  return (
    <ThemeProvider theme={bookTheme}>
      <NavBar>

        <h1>Book List Project</h1>
        <TextField />
        <CheckBox />
        <Button variant="text">Click Me Beautiful</Button>
        <Button onClick={handleClick}>Do API Call</Button>
        

      </NavBar>
    </ThemeProvider>
  );
}

export default App;
