import { BlogArticle } from "blog-article";
import Image from "next/image";
import styled from "styled-components";
import { applyFontStyle } from "themes";

function Article({ article }: { article: BlogArticle }) {
  return (
    <Wrapper>
      {article.cover_image && <Image alt="Coverimage" src={article.cover_image} width={400} height={200} />}
      <Title>
        {article.title}
      </Title>
      <Description>
        {article.description}
      </Description>
    </Wrapper>
  )
}

const Title = styled.div`
  ${props => applyFontStyle(props.theme, "h3")}
`;

const Description = styled.div`
  ${props => applyFontStyle(props.theme, "body")}
`;

const Wrapper = styled.div`
  padding-bottom: 2rem;
`;

export default Article
