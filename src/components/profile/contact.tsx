import styled from "styled-components";
import { applyFontStyle, breakpointDown, breakpointUp } from "themes";

const Contact = () => {
  return (
    <Wrapper>
      <section>
        <div>
          Phone
        </div>
        <div>
          <a href="tel:(+33) 6 09 50 65 32" >
            (+33) 6 09 50 65 32
          </a>
        </div>
      </section>
      <section>
        <div>
          Drop a message
        </div>
        <div>
          <a href="mailto:clementvidalperso@gmail.com" >
            clementvidalperso@gmail.com
          </a>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  padding-top: 2rem;
  padding-bottom: 1rem;
  ${props => applyFontStyle(props.theme, "body")}

  ${breakpointUp("mobile")} {
    grid-auto-flow: column;
    padding-top: 4rem;
    padding-bottom: 3rem;

    section:nth-child(1) {
      text-align: start;
      justify-self: start;
    }
    section:nth-child(2) {
      text-align: end;
      justify-self: end;
    }
  }

  section {
    text-align: end;
    justify-self: end;

    ${breakpointDown("mobile")} {
      display: grid;
      grid-auto-flow: column;
      column-gap: 1rem;
      align-items: center;
    }
  }

  a {
    font-weight: 400;
    ${breakpointUp("mobile")} {
      ${props => applyFontStyle(props.theme, "h3")}
    }
  }
`;

export default Contact;
