import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {

  return (

      <ImageList cols={4} >
        {itemData.map((item) => (
          <ImageListItem key={item.img} >
            <img 
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              
            />
            
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>

  );
}

const itemData = [
  {
    "author": "Arlene Dahl",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 18,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/always-ask-a-man-book-cover.jpg",
    "pages": 198,
    "subject": "self help",
    "summary": "For women traveling back to the US 1950",
    "title": "ALWAYS ASK A MAN: THE KEY TO FEMININITY"
},
{
    "author": "Arnetta R. Scales",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 19,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/and-on-the-eighth-day-god-created-hairdressers-book-cover.jpg",
    "pages": 222,
    "subject": "self help",
    "summary": "Becuase I just gotta get my hair did",
    "title": "AND ON THE EIGHTH DAY GOD CREATED HAIRDRESSERS"
},
{
    "author": "James Maratta",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 20,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/brainwashing-is-a-cinch-book-cover.jpg",
    "pages": 321,
    "subject": "science",
    "summary": "We bother making a rational argument?",
    "title": "BRAINWASHING IS A CINCH!"
},
{
    "author": "Stephanie Jackson",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 21,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/cat-flexing.jpg",
    "pages": 1295,
    "subject": "self help",
    "summary": "Who needs heavy weights when a fat cat will do",
    "title": "CATFLEXING: A CATLOVER’S GUIDE TO WEIGHTLIFTING, AEROBICS & STRETCHING"
},
{
    "author": "Micheala Giles",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 22,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/commuter-pig-keeper-book-cover.jpg",
    "pages": 87,
    "subject": "science",
    "summary": "Not in Kansas anymore? Raising pigs in the City with a full time job?",
    "title": "THE COMMUTER PIG KEEPER"
},
{
    "author": "Anonymous",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 23,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/cooking-to-kill-book-cover.jpg",
    "pages": 3207,
    "subject": "marriage advice",
    "summary": "Originally titled: Divorce with Benefits",
    "title": "COOKING TO KILL: THE POISON COOK-BOOK"
},
{
    "author": "Elizabeth Worthington Strong",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 24,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/how-to-cook-husbands-book-cover.jpg",
    "pages": 199,
    "subject": "marriage advice",
    "summary": "For when you are tired of the question What's for dinner?",
    "title": "HOW TO COOK HUSBANDS"
},
{
    "author": "Lois Bird",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 25,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/how-to-make-your-wife-your-mistress-book-cover.jpg",
    "pages": 111,
    "subject": "marriage advice",
    "summary": "Living with two women can be hard: Consolidate",
    "title": "HOW TO MAKE YOUR WIFE YOUR MISTRESS"
},
{
    "author": "Brenda Bence",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 26,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/how-you-are-like-shampoo-book-cover.jpg",
    "pages": 222,
    "subject": "self help",
    "summary": "Lather, rinse, repeat.",
    "title": "HOW YOU ARE LIKE SHAMPOO"
},
{
    "author": "Aqua Boil",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 27,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/the-joy-of-waterboiling-book-cover-759x1024.jpg",
    "pages": 12,
    "subject": "entertainment",
    "summary": "For when you need to have fun on a budget ",
    "title": "THE JOY OF WATER BOILING"
},
{
    "author": "Drew Emborsky",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 28,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/men-who-knit-and-the-dogs-who-love-them-book-cover.jpg",
    "pages": 397,
    "subject": "entertainment",
    "summary": "Nothing finer than knitting matching sweaters for you and your dog",
    "title": "MEN WHO KNIT & THE DOGS WHO LOVE THEM"
},
{
    "author": "Catsy Cline",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 29,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2019/01/my-big-book-of-pretty-pussies-book-cover.jpg",
    "pages": 789,
    "subject": "entertainment",
    "summary": "A photogenic journey through the internets favorite topic",
    "title": "MY BIG BOOK OF PRETTY PUSSIES"
},
{
    "author": "Matthew Voggel",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 30,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/natural-history-of-vacant-lots-book-cover-178x300.jpg",
    "pages": 452,
    "subject": "science",
    "summary": "Seinfeld for Property",
    "title": "NATURAL HISTORY OF VACANT LOTS"
},
{
    "author": "Hester Mundis",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 31,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/no-hes-not-a-monkey-book-cover.jpg",
    "pages": 521,
    "subject": "self help",
    "summary": "Advice on raising a teenage boy",
    "title": "NO, HE’S NOT A MONKEY, HE’S AN APE AND HE’S MY SON"
},
{
    "author": "Linda Wright",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 32,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/toilet-paper-origami-book-cover.jpg",
    "pages": 222,
    "subject": "entertainment",
    "summary": "A book for when you leave your phone in the other room.",
    "title": "TOILET PAPER ORIGAMI"
},
{
    "author": "Martin Greenberg",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 33,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/zombie-raccoons-and-killer-rabbits-book-cover.jpg",
    "pages": 201,
    "subject": "science",
    "summary": "When the day comes you'll thank me",
    "title": "ZOMBIE RACCOONS & KILLER BUNNIES"
},
{
    "author": "Donal I Rogers",
    "created_on": "Mon, 28 Feb 2022 19:21:17 GMT",
    "id": 34,
    "img": "https://s2982.pcdn.co/wp-content/uploads/2018/11/teach-your-wife-to-be-a-widow-book-cover.jpg",
    "pages": 187,
    "subject": "marriage",
    "summary": "For when your wife browses our marriage section",
    "title": "TEACH YOUR WIFE TO BE A WIDOW"
}
];