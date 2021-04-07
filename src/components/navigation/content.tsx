import styled from "styled-components";
import { applyFontStyle, breakpointDown, breakpointUp, underline } from "themes";
import Link from "next/link";
import Social from "../social";

const Content = () => {

  return (
    <Wrapper>
      <Name>
        <h1>
          Clément.
        </h1>
      </Name>
      <Links>
        <li>
          <Link href="/#experiences">
            Experiences
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
      </Links>
      <SocialContainer>
        <Social/>
      </SocialContainer>
    </Wrapper>
  );
}

const Name = styled.div`
  h1 {
    ${props => applyFontStyle(props.theme, "h3")}
    display: inline-block;
    ${props => underline(props.theme, false)}

    ${breakpointUp("mobile")} {
      ${props => applyFontStyle(props.theme, "h2")}
    }
  }
`;

const SocialContainer = styled.div`
  ${breakpointDown("mobile")} {
    display: none;
  }
`;

const Wrapper = styled.nav`
  display: grid;
  align-items: center;
  grid-template-columns: max-content 1fr max-content;
  padding: 1rem;

  ${breakpointUp("mobile")} {
    padding: 2rem;
  }
`;

const Links = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content;
  margin: 0;
  padding: 0;
  justify-self: center;

  li {
    display: inline-flex;
    padding: 0 0.5rem;
    ${breakpointUp("mobile")} {
      padding: 0 1rem;
    }
  }

  a {
    cursor: pointer;
    ${props => underline(props.theme, true)}
  }
`;

export default Content;
