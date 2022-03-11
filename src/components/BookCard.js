import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import useBook from '../hooks/useBook';
import { useParams, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'

export default function BookCard() {
  const navigate = useNavigate()
  const { id } = useParams();
  const { book } = useBook(id);

  // if (error){
  //   <Box>
  //     <Error>{error}</Error>
  //   </Box>
  // }

  // if (!book){
  //   <Box>
  //     {/* <Backdrop /> */}
  //     hello
  //   </Box>
  // }

  return (
    <Box sx={{ display:'flex', width:'100%', height: '100%', alignItems: 'center', justifyItems: 'center', alignContent:'center', justifyContent: 'center'}}>
    <Card sx={{ maxWidth: 400, marginTop: 2}}>
      <CardHeader
        title={book?.title}
        subheader={book?.author}
      />
      <CardMedia
        component="img"
        height="525"
        image={book?.img}
        alt="Book Cover"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {book?.summary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={()=>{navigate('/')}} aria-label="add">
          <CloseIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Box>
  );
}
