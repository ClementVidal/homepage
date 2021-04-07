
import { FunctionComponent } from "react";
import styled from "styled-components";
import { applyFontStyle, breakpointUp } from "themes";
import { SkillType } from "../../components/skill";
import SkillsList from "../../components/skills-list";
import TimelineSegment from "../../components/timeline-segment";
import TimeRange from "../../components/time-range";
import useHover from "../../components/hover";

interface ExperienceProps {
  company: string;
  title: string;
  start: Date;
  end: Date;
  skills: SkillType[];
  index: number;
}

const Experiencce: FunctionComponent<ExperienceProps> = ({ start, end, title, company, children, index, skills }) => {

  const [hoverRef, isHover] = useHover();
  return (
    <Wrapper ref={hoverRef}>
      <div>
        <TimeRange start={start} end={end} />
      </div>
      <TimelineSegment isLast={index === 0} hightlight={isHover} />
      <div>
        <Title>
          {title}
        </Title>
        <Company>
          At {company}
        </Company>
        <Content>
          {children}
        </Content>
        <SkillsList skills={skills} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 3rem 3rem 1fr;
  ${breakpointUp("mobile")} {
    grid-template-columns: 8rem 3rem 1fr;
  }

  &>div:nth-child(1) {
    padding-top: 0.5rem;
  }
  &>div:nth-child(3) {
    padding-bottom: 3rem;
  }
`;

const Content = styled.div`

  ${props => applyFontStyle(props.theme, "body")}
  padding-top: 1rem;
  li {
    padding-left: 1rem;
    padding-top:0.5rem;
    list-style: none;

    &:before {
      content: "○";
      padding-right: 5px;
    }
  }
`;

const Skills = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  &>* {
    margin-left: 0.5rem;
  }
`;

const Title = styled.div`
  ${props => applyFontStyle(props.theme, "h2")}
`;

const Company = styled.div`
  ${props => applyFontStyle(props.theme, "h3")}
  color: ${props => props.theme.color.blackWithOpacity(0.6)};
  padding-top: 0.5rem;
`;


export default Experiencce;
