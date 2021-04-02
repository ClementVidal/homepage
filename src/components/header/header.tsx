import styled from "styled-components";
import { ContentFrame } from "components";
import FloatingNavigation from "../navigation/floating-navigation";
import Navigation from "../navigation/navigation";
import Decoration from "../decoration";
import { FunctionComponent } from "react";

const Header: FunctionComponent = ({ children }) => {
  return (
    <Wrapper>
      <Decoration />
      <Navigation />
      <FloatingNavigation />
      <ContentFrame>
        {children}
      </ContentFrame>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  color: ${props => props.theme.color.white};
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 15px 0px ${props => props.theme.color.blackWithOpacity(0.4)};
`;

export default Header;
