import styled from "styled-components";
import { BlogArticle } from "blog-article"
import { ContentFrame } from "components";
import { applyFontStyle, breakpointUp } from "themes";
import Post from "./post"

function PostsList({ articles }: { articles?: BlogArticle[] }) {
  return (
    <Wrapper fillSpace={true}>
      <Anchor id="blog" />
      <h1>
        Blog
      </h1>
      <ul>
        {articles && articles.map((article, index) => <Post article={article} key={article.id} index={index}/>)}
      </ul>
    </Wrapper>
  )
}

const Anchor = styled.div`
  top: -120px;
  position: relative;
`;

const Wrapper = styled(ContentFrame)`
  padding-top: 2rem;
  color: ${props => props.theme.color.black};
  display: grid;
  grid-auto-flow: row;
  row-gap: 2rem;

  ${breakpointUp("mobile")} {
    padding-top: 3rem;
  }
  h1 {
    ${props => applyFontStyle(props.theme, "h1")}
    padding-bottom: 2rem;
  }
`;

export default PostsList
