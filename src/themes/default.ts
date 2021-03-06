import { DefaultTheme } from "styled-components";


export const style = {
  fontStyle: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: "400",
      lineHeight: "normal",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "400",
      lineHeight: "normal",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "400",
      lineHeight: "normal",
    },
    body: {
      fontSize: "1rem",
      fontWeight: "200",
      lineHeight: "1.5rem",
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
