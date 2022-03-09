import React from 'react';
import './App.css';

import NavBar from './components/NavBar';

import Button from './components/Button';
import TextField from './components/TextField'
import CheckBox from './components/CheckBox'
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import {CancelToken} from 'apisauce';
import BookList from './components/BookList'
import BookCard from './components/BookCard'
import SplitButton from './components/SplitButton'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


// import {getBooks} from './api/apiBook';
// import {postUser} from './api/apiUser'
// import { getLogin } from './api/apiLogin';
// import { putUser } from './api/apiUser';
// import { deleteUser } from './api/apiUser';


// const handleClick = async () => {
//   const source = CancelToken.source();
  // const response_object = await getBooks(source.token);
  // const response_object = await postUser('email@mail.com', 'Wade', 'Glahn','12345',source.token);
  // const response_object = await getLogin('email@mail.com','12345',source.token);
  // const response_object = await putUser('vhb6N8ZKH14xdHNE4dJCcckCeAFT9fg34Ia63-Xquhk',{password:'1234'},source.token);
  // const response_object = await deleteUser('vhb6N8ZKH14xdHNE4dJCcckCeAFT9fg34Ia63-Xquhk',source.token);
  // console.log(response_object)
// }

function App() {
  return (
   
      <Router>
        <NavBar>
          <Routes>
            <Route path="/" element={<BookList />} /> 
            <Route path="/LoginForm" element={<LoginForm />} /> 
            <Route path="/RegisterForm" element={<RegisterForm />} /> 
          </Routes>
        </NavBar>
      </Router>

  );
}

export default App;
