import { DefaultTheme } from "styled-components";


export default {
  breakpoint: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    largeDesktop: "1200px",
  },
  fontStyle: {
    h1: {
      fontSize: "3rem",
      fontWeight: "400",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "400",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "400",
    },
    body: {
      fontSize: "1rem",
      fontWeight: "200",
    },
  },
  color: {
    black: "rgb(59 59 59)",
    blackWithOpacity: (opacity: number) => `rgba(59, 59, 59, ${opacity})`,
    white: "rgb(250 250 250)",
    primary: "rgb(88, 139, 139)",
    primaryWithOpacity: (opacity: number) => `rgba(88, 139, 139, ${opacity})`,
    secondary: "rgb(242, 143, 59)",
    secondaryWithOpacity: (opacity: number) => `rgba(242, 143, 59, ${opacity})`,
    tertiary: "rgb(255, 213, 194)",
    quaternary: "rgb(200, 85, 61)",
  },
} as DefaultTheme;
