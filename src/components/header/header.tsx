import styled from "styled-components";
import { ContentFrame } from "components";
import FloatingNavigation from "../navigation/floating-navigation";
import Navigation from "../navigation/navigation";
import Contact from "./contact";
import Profile from "./profile";
import Decoration from "../decoration";

const Header = () => {
  return (
    <Wrapper>
      <Decoration />
      <Navigation />
      <FloatingNavigation />
      <ContentFrame>
        <Profile />
        <Contact />
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
