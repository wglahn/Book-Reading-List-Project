import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {AppContext} from '../context/AppContext';
import { useContext } from 'react';

export default function ButtonAppBar({children}) {
  const {user, setUser} = useContext(AppContext);

  const handleLogout=()=>{
    setUser({})
  }

  function loggedIn(){
    return <>
            <Button color="inherit"><Link to="/RegisterForm" className="nav-link">Edit Registration</Link></Button>
            <Button color="inherit" onClick={()=>handleLogout()}><Link to="/LoginForm" className="nav-link">Logout</Link></Button>
            </>
  }

  function loggedOut(){
    return <Button color="inherit"><Link to="/LoginForm" className="nav-link">Login</Link></Button>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/" className="nav-link">
              <LibraryBooksIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Book List
          </Typography>

          {user?.token ? loggedIn() : loggedOut()}

        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}
