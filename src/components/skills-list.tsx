import { FunctionComponent } from "react";
import styled from "styled-components";
import Skill, { SkillType } from "./skill";

interface SkillsListProps {
  skills: SkillType[];
}

const SkillsList: FunctionComponent<SkillsListProps> = ({ skills }) => {
  return (
    <Wrapper>
      {skills.map((skill) => <Skill type={skill} key={skill} />)}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  &>* {
    margin-left: 0.5rem;
  }
`;

export default SkillsList;
