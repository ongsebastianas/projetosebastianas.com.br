type DeviceType = "mobile" | "tablet" | "laptop" | "desktop";
type Breakpoints = { [device in DeviceType]: string };

const sizes = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px'
}

export const breakpoints: Breakpoints = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`
}