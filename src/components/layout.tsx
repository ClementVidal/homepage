import { FunctionComponent } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { breakpointUp, style } from "themes";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.color.black};
    background-color: ${props => props.theme.color.white};
    font-family: 'Oswald', sans-serif;
  }

  * {
    color: inherit;
    margin:0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html {
    font-size: 14px;
    ${breakpointUp("mobile")} {
      font-size: 16px;
    }
  }

  li {
    list-style: none;
  }
`

const Layout: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyle />
      <Content className="content">
        {children}
      </Content>
    </ThemeProvider>
  );
};

const Content = styled.div`
  width: 100vw;
`;

export default Layout;
