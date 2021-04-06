import styled from "styled-components";
import { BlogArticle } from "blog-article"
import { ContentFrame } from "components";
import { applyFontStyle } from "themes";
import Article from "./Article"

function ArticlesList({ articles }: { articles?: BlogArticle[] }) {
  return (
    <Wrapper>
      <Anchor id="blog" />
      <h1>
        Blog
      </h1>
      <ul>
        {articles && articles.map(article => <Article article={article} key={article.id}/>)}
      </ul>
    </Wrapper>
  )
}

const Anchor = styled.div`
  top: -120px;
  position: relative;
`;

const Wrapper = styled(ContentFrame)`
  padding-top: 3rem;

  h1 {
    ${props => applyFontStyle(props.theme, "h1")}
    padding-bottom: 2rem;
  }
`;

export default ArticlesList
