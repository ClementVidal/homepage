import styled from "styled-components";
import Picture from "./picture";
import Contact from "./contact";
import { applyFontStyle } from "themes";

const Profile = () => {
  return (
    <Wrapper>
      <section>
        <div>
          <Picture />
        </div>
        <Content>
          <h1>
            My name is Clément. <br />
            Senior software Engineer.
          </h1>
          <h2>
            Lead frontend engineer at Privowny
        </h2>
        </Content>
      </section>
      <section>
        <Contact />
      </section>
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
  &>section:nth-child(1) {
    padding-top: 4rem;
    display: grid;
    grid-template-columns: max-content auto;
  }
`;


export default Profile;
