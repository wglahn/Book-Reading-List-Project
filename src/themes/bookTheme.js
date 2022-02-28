import { createTheme } from '@mui/material/styles';

const themeOptions = {
    palette: {
      type: 'light',
      primary: {
        main: '#BBCEA8',
      },
      secondary: {
        main: '#E3D87E',
      },
    },
  };

const theme = createTheme(themeOptions);

export default theme