import styled from "styled-components";
import Picture from "./picture";
import Contact from "./contact";
import { applyFontStyle, breakpointDown, breakpointUp, underline } from "themes";

const Profile = () => {
  return (
    <Wrapper>
      <Section>
        <div>
          <Picture />
        </div>
        <h1>
          <Line1>
            My name is Clément.
          </Line1>
          <Line2>
            I'm a senior software engineer.
          </Line2>
        </h1>
        <h2>
          Lead frontend engineer at Mindflow.
        </h2>
      </Section>
      <section>
        <Contact />
      </section>
    </Wrapper>
  );
}

const Line1 = styled.div`
`;

const Line2 = styled.div`
  ${breakpointDown("mobile")} {
    ${props => applyFontStyle(props.theme, "h3")}
  }
`;

const Section = styled.section`
  align-self: center;
  display: grid;
  column-gap: 0rem;

  grid-template-columns: min-content 1fr;
  grid-template-areas:
    "pic pic"
    "h1 h1"
    "h2 h2"
  ;

  ${breakpointUp("mobile")} {
    column-gap: 2rem;
    grid-template-columns: max-content 1fr;
    grid-template-areas:
      "pic h1"
      "pic h2"
    ;
  }

  &>div {
    grid-area: pic;
    align-self: center;
    display: inline-flex;
    justify-self: center;
    ${breakpointDown("mobile")} {
      margin-bottom:1rem;
    }
  }

  h1 {
    align-self: flex-end;
    grid-area: h1;
    ${props => applyFontStyle(props.theme, "h1")}
    margin-bottom: 1rem;
  }

  h2 {
    align-self: flex-start;
    grid-area: h2;
    ${props => applyFontStyle(props.theme, "h3")}
    color: ${props => props.theme.color.black};
  }
`;

const Wrapper = styled.div`
  &>section:nth-child(1) {
    padding-top: 1rem;
    ${breakpointUp("mobile")} {
      padding-top: 4rem;
    }
  }
`;


export default Profile;
