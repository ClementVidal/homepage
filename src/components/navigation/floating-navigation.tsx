import styled from "styled-components";
import Content from "./content";
import { useScrollPosition } from "components/scroll-position";
import { Decoration } from "components";
import { useCallback, useState } from "react";

const DetachedThrshold = 465;

const FloatingNavigation = () => {

  const [visible, setIsVisible] = useState(false);

  const onScroll = useCallback((prev: number, curr: number) => {
    if (curr > DetachedThrshold && !visible) {
      setIsVisible(true);
      console.log("true");
    } else if (curr <= DetachedThrshold && visible) {
      setIsVisible(false);
      console.log("false");
    }
  }, [visible]);
  useScrollPosition(onScroll, [onScroll]);

  return (
    <Wrapper visible={visible}>
      <Decoration />
      <Content />
    </Wrapper>
  );
}

const Wrapper = styled.div<{ visible: boolean }>`
  z-index: 1;
  transition: all 175ms ease-in-out;
  position: sticky;
  position: fixed;
  pointer-events: ${props => props.visible ? "all" : "none"};
  transform: translateY( ${props => props.visible ? "0" : "-3rem"});
  top: 0;
  opacity: ${props => props.visible ? "1" : "0"};
  width: 100%;
  background-color: ${props => props.theme.color.white};
  overflow: hidden;
  box-shadow: 0px 0px 15px 0px ${props => props.theme.color.blackWithOpacity(0.4)};
`;

export default FloatingNavigation;
