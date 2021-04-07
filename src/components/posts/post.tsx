import { BlogArticle } from "blog-article";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { applyFontStyle, breakpointUp } from "themes";
import TimelineSegment from "../../components/timeline-segment";
import TimeRange from "../../components/time-range";
import useHover from "../../components/hover";
import { SkillType } from "../../components/skill";
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
        <Description>
          {article.description}
        </Description>
        <Link>
          <a href={article.canonical_url} target="_blank">
            Read on Dev.to
          </a>
        </Link>
        <SkillsList skills={article.tag_list} />
      </ContentContainer>
    </Wrapper>
  )
}

const Link = styled.div`
  ${props => applyFontStyle(props.theme, "body")}
  text-align: right;
  padding-top: 1rem;
`;

const Title = styled.div`
  ${props => applyFontStyle(props.theme, "h2")}
`;

const Description = styled.div`
  ${props => applyFontStyle(props.theme, "body")}
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
