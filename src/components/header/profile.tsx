import styled from "styled-components";
import Picture from "./picture";
import { applyFontStyle } from "themes";

const Profile = () => {
  return (
    <Wrapper>
      <div>
        <Picture/>
      </div>
      <Content>
        <h1>
          My name is Clément. <br/>
          Senior software Engineer.
        </h1>
        <h2>
          Lead Typescript at Privowny
        </h2>
      </Content>
    </Wrapper>
  );
}

const Content = styled.div`
  padding-left: 2rem;
  align-self: center;
  h1 {
    ${props => applyFontStyle(props.theme, "h1")}
    margin-bottom: 1rem;
  }
  h2 {
    ${props => applyFontStyle(props.theme, "h3")}
    color: ${props => props.theme.color.black};
  }
`;

const Wrapper = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-template-columns: max-content auto;
`;


export default Profile;