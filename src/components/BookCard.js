import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

export default function RecipeReviewCard() {
  const [added, setAdded] = React.useState(false);

  const handleAddClick = () => {
    setAdded();
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={item.title}
        subheader={item.author}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.img}
        alt="Book Cover"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.summary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleAddClick} aria-label="add">
          <AddIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

const item = 
  {
    "author": "Arlene Dahl",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 18,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/always-ask-a-man-book-cover.jpg",
    "pages": 198,
    "subject": "self help",
    "summary": "For women traveling back to the US 1950",
    "title": "ALWAYS ASK A MAN: THE KEY TO FEMININITY"
  }
