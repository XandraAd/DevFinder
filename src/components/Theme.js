import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Space Mono, sans-serif',
    heading: 'Space Mono, sans-serif',
    // Add more font styles as needed
  },
  fontSizes: {
    sx: '13px', // Small text size
    md: '15px', // Default text size
    lg: '18px', // Large text size
    xl: '22px', // Extra large text size
    '2xl': '26px', // Double extra large text size
   
   
  },
  breakpoints:{
    '2xl': '96em',
  }
});

export default theme;
