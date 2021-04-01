import styled from "styled-components";
import { applyFontStyle } from "themes";

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

  section div:nth-child(1) {
    margin-bottom: 1rem;
  }

  a {
    ${props => applyFontStyle(props.theme, "h3")}
  }
`;

export default Contact;
