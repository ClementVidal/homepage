import { Header, Layout, Experiences } from "components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { applyFontStyle} from "themes";
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

function HomePage() {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyle />
      <Layout>
        <Header />
        <Experiences />
      </Layout>
    </ThemeProvider>

  );
}

export default HomePage;
