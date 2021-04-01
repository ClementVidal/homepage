import styled, { DefaultTheme } from "styled-components";
import { applyFontStyle } from "themes";

const Navigation = () => {
  return (
    <Wrapper>
      <Name>
        <h1>
          Clément.
        </h1>
      </Name>
      <ul>
        <li>
          <a>
            Experiences
          </a>
        </li>
        <li>
          <a>
            Blog
          </a>
        </li>
        <li>
          <a>
            Contact
          </a>
        </li>
      </ul>
      <div>

      </div>
    </Wrapper>
  );
}

const underline = (theme: DefaultTheme) => `
position: relative;
&:after {
  transition: transform 175ms ease-in-out;
  content: "";
  height: 2px;
  background-color: ${theme.color.secondary};
  width:100%;
  position: absolute;
  left: 0px;
  bottom: -12px;
  transform-origin: left;
}
`;

const Name = styled.div`
  h1 {
      ${props => applyFontStyle(props.theme, "h2")}
      display: inline-block;
      ${props => underline(props.theme)}
  }
`;

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  align-items: center;
  padding: 2rem;

  ul {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: max-content;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      list-style: none;
      padding: 0 1rem;
    }

    a {
      cursor: pointer;
      ${props => underline(props.theme)}
      &:after {
        opacity: 0;
        transform: scaleX(0);
      }
      &:hover {
        &:after {
          opacity: 1;
          transform: scaleX(1);
        }
      }
    }
  }
`;

export default Navigation;
