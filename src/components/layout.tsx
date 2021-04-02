import { FunctionComponent } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { applyFontStyle, style } from "themes";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.color.black};
    background-color: ${props => props.theme.color.white};
  }
  * {
    font-family: 'Oswald', sans-serif;
    color: inherit;
    ${props => applyFontStyle(props.theme, "body")}
    margin:0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`

const Layout: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyle />
      <div className="content">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
