import { BlogArticle } from "blog-article";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { applyFontStyle, breakpointUp, underline } from "themes";
import TimelineSegment from "../../components/timeline-segment";
import TimeRange from "../../components/time-range";
import useHover from "../../components/hover";
import SkillsList from "../../components/skills-list";

interface PostProps {
  article: BlogArticle
  index: number;
}

const Post: FunctionComponent<PostProps> = ({ article, index }) => {
  const [hoverRef, isHover] = useHover();

  return (
    <Wrapper ref={hoverRef}>
      <TimeRangeContainer>
        <TimeRange end={new Date(article.created_at)} />
      </TimeRangeContainer>
      <TimelineSegment isLast={index === 0} hightlight={isHover} />
      <ContentContainer>
        <Title>
          <a href={article.canonical_url} target="_blank">
            {article.title}
          </a>
        </Title>
        <Info>
          <ul>
            <li>
              Reactions: <span>{article.positive_reactions_count}</span>
            </li>
            <li>
              Comments: <span>{article.comments_count}</span>
            </li>
          </ul>
          <div>
            <a href={article.canonical_url} target="_blank">
              Read on Dev.to
          </a>
          </div>
        </Info>
        <SkillsList skills={article.tag_list} />
      </ContentContainer>
    </Wrapper>
  )
}

const Info = styled.div`
  ${props => applyFontStyle(props.theme, "body")}
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    span {
        font-weight: 400;
    }

    li {
      margin-right: 1rem;
    }
  }
  a {
    font-weight: 400;
    ${props => underline(props.theme, true, 0.3)}
  }
`;

const Title = styled.div`
  ${props => applyFontStyle(props.theme, "h2")}
`;

const TimeRangeContainer = styled.div`
  padding-top: 0.5rem;
`;

const ContentContainer = styled.div`
  padding-bottom: 3rem;
`;

const Wrapper = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 3rem 3rem 1fr;
  ${breakpointUp("mobile")} {
    grid-template-columns: 8rem 3rem 1fr;
  }
`;

export default Post
