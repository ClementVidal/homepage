import styled from "styled-components";
import { applyFontStyle } from "themes";

const Footer = () => {
  return (
    <Wrapper >
      Clément Vidal
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${props => applyFontStyle(props.theme, "body")}
  text-align: right;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.black};
  padding: 1rem 2rem;
`;

export default Footer;
