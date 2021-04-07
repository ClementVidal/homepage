import "styled-components";


interface FontStyle {
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    fontStyle: {
      h1: FontStyle;
      h2: FontStyle;
      h3: FontStyle;
      body: FontStyle;
    }
    color: {
      black: string;
      blackWithOpacity: (opacity: number) => string;
      white: string;
      primary: string;
      primaryWithOpacity: (opacity: number) => string;
      secondary: string;
      secondaryWithOpacity: (opacity: number) => string;
      tertiary: string;
      quaternary: string;
    };
  }
}
