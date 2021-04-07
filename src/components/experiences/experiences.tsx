import ContentFrame from "components/content-frame";
import { getContent } from "content";
import styled from "styled-components";
import { applyFontStyle, breakpointUp } from "themes";
import Job from "./job";
import { SkillType } from "./skill";

const contentObjects = getContent();


const Experiences = () => {
  return (
    <Wrapper>
      <Anchor id="experiences" />
      <h1>
        Experiences
      </h1>
      {contentObjects.map((experience, index) => {
        const Compo = experience.component;
        const meta = experience.meta;
        return (
          <Job key={index} {...meta} skills={meta.skills as SkillType[]} index={index}>
            <Compo />
          </Job>
        );
      })}
    </Wrapper>
  );
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

export default Experiences;
