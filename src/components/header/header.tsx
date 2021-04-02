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
`;

export default Header;
