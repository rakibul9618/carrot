const theme = {
  colors: {
    pink: '#F6E0DE',
    primary: '#353535',
    secondary: '#ED5252',
    white: '#FFFFFF',

  },
  font: '',
};

const screenSizes = {
  desktop: '2560px',
  laptop: '1024px',
  laptopL: '1440px',
  mobile: '425px',
  tablet: '768px',
};

export const deviceQuery = {
  desktop: `(min-width: ${screenSizes.desktop})`,
  desktopL: `(min-width: ${screenSizes.desktop})`,
  laptop: `(min-width: ${screenSizes.laptop})`,
  laptopL: `(min-width: ${screenSizes.laptopL})`,
  mobile: `(max-width: ${screenSizes.mobile})`,
  tablet: `(max-width: ${screenSizes.tablet})`,
};

export default theme;
