import Head from "next/head";
import { FunctionComponent } from "react";
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { applyFontStyle } from "themes";
import style from "themes/default";

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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content="bj"></meta>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500&display=swap" rel="stylesheet" />
        <title>"Blog"</title>
      </Head>
      <main>
        <ThemeProvider theme={style}>
          <GlobalStyle />
          <div className="content">
            {children}
          </div>
        </ThemeProvider>
      </main>
    </>
  );
};

export default Layout;
