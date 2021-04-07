import Social from "../social";
import styled from "styled-components";
import { applyFontStyle, breakpointUp } from "themes";

const Footer = () => {
  return (
    <Wrapper >
      <div>
        Clément Vidal
      </div>
      <div>
        <Social/>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props => applyFontStyle(props.theme, "body")}
  text-align: right;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.black};
  padding: 1rem;
  ${breakpointUp("mobile")} {
    padding: 1rem 2rem;
  }
`;

export default Footer;
