import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InteractiveList from './InteractiveList';
import { BookListContext } from '../context/BookListContext';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import useBooks from '../hooks/useBooks';
import { useNavigate } from 'react-router-dom';


export default function BookList() {
  const {books, addToCart}= useContext(BookListContext)
  const navigate = useNavigate()
  
  useBooks()

  return (
    <>
    <Box sx={{ display: 'grid', m:2 }}>
    {/* <SplitButton /> */}
    <InteractiveList />
    <ImageList cols={4}>
      {books.map((book) => (
        <ImageListItem key={book.img} sx={{m:1}}>
          <img
            src={`${book.img}?w=248&fit=crop&auto=format`}
            srcSet={`${book.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={book.title}
            loading="lazy"
            onClick={()=>{navigate('/BookCard/'+ book.id)}}
          />
          <ImageListItemBar
            title={book.title}
            subtitle={book.author}
            actionIcon={
              <IconButton key="add" 
                onClick={()=>{addToCart(book)}}
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${book.title}`}
              >
                <AddCircleIcon />
                
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
    </>
  );
}