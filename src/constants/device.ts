const sizes = {
  mobile: '600px',
  tablet: '767px',
  laptop: '1024px',
  laptopL: '1441px',
  desktop: '1920px',
  desktopL: '2560px'
};

export const device = {
  mobileL: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopL: `(min-width: ${sizes.desktop})`
};
