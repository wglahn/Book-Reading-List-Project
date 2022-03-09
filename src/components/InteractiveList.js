import React, {useContext} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import {BookListContext} from '../context/BookListContext'
import Button from '@mui/material/Button';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const {cart, removeFromCart, emptyCart} = useContext(BookListContext)

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
       
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Reading List
          </Typography>
          <Demo>
            <List dense={dense}>
            {cart.map((item, index) => (
                <ListItem key= {index}
                  secondaryAction={
                    <IconButton key="rm" onClick={()=>{removeFromCart(item)}} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={item.title}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>
              ))}
            </List>
          </Demo>
          <Button variant="outlined" key="delete" onClick={()=>{emptyCart()}}>Clear List</Button>
        </Grid>
      </Grid>
    </Box>
  );
}