
import { FunctionComponent } from "react";
import styled from "styled-components";
import { applyFontStyle } from "themes";
import Skill, { SkillType } from "./skill";
import TimelineSegment from "./timeline-segment";
import TimeRange from "./time-range";
import useHover from "components/hover";

interface JobProps {
  company: string;
  title: string;
  start: Date;
  end: Date;
  skills: SkillType[];
  index: number;
}

const Job: FunctionComponent<JobProps> = ({ start, end, title, children, index,  skills }) => {

  const [hoverRef, isHover] = useHover();
  return (
    <Wrapper ref={hoverRef}>
      <div>
        <TimeRange start={start} end={end} />
      </div>
      <TimelineSegment isLast={index===0} hightlight={isHover}/>
      <div>
        <Title>
          {title}
        </Title>
        <Content>
          {children}
        </Content>
        <Skills>
          {skills.map(skill => <Skill type={skill} />)}
        </Skills>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 8rem min-content 1fr;

  &>div:nth-child(1) {
    padding-top: 0.5rem;
  }
  &>div:nth-child(3) {
    padding-bottom: 3rem;
  }
`;

const Content = styled.div`
  padding-top: 1rem;
`;

const Skills = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  column-gap: 1rem;
  justify-content: end;
`;

const Title = styled.div`
  ${props => applyFontStyle(props.theme, "h2")}

`;

export default Job;
