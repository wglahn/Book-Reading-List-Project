import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InfoIcon from '@mui/icons-material/Info';
import { useEffect, useState } from 'react';
import { getBooks } from '../api/apiBook'
import { CancelToken } from 'apisauce';
import SplitButton from './SplitButton';
import InteractiveList from './InteractiveList';
import { BookListContext } from '../context/BookListContext';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import useBooks from '../hooks/useBooks';


export default function BookList() {
  const {books, addToCart}= useContext(BookListContext)
  
  useBooks()

  return (
    <>
    <Box sx={{ display: 'grid' }}>
    <SplitButton />
    <InteractiveList />
    <ImageList cols={4}>
      {books.map((book) => (
        <ImageListItem key={book.img}>
          <img
            src={`${book.img}?w=248&fit=crop&auto=format`}
            srcSet={`${book.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={book.title}
            loading="lazy"
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