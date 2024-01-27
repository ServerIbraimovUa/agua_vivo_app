const size = {
  mobileS: "320px",
  mobileL: "425px",
  tabletS: "768px",
  tabletL: "1439px",
  laptop: "1440px",
};

export const device = {
  mobile: `screen and (min-width: ${size.mobileS}) and (max-width: ${size.mobileL})`,
  tablet: `screen and (min-width: ${size.tabletS}) and (max-width: ${size.tabletL})`,
  laptop: `screen and (min-width: ${size.laptop})`,
};
