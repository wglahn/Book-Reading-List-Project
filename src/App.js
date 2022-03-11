import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import BookList from './components/BookList'
import BookCard from './components/BookCard'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
   
      <Router>
        <NavBar>
          <Routes>
            <Route path="/" element={<BookList />} /> 
            <Route path="/BookCard/:id" element={<BookCard />} />
            <Route path="/LoginForm" element={<LoginForm />} /> 
            <Route path="/RegisterForm" element={<RegisterForm />} /> 
          </Routes>
        </NavBar>
      </Router>

  );
}

export default App;
