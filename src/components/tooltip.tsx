import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { applyFontStyle } from "themes";

interface TooltipProps {
  delay?: number;
  content: string;
}

const Tooltip: FunctionComponent<TooltipProps> = ({ children, delay = 400, content }) => {

  let timeout: any = null;
  const [active, setActive] = useState(false);

  const showTip = () => {
    if (timeout || active)
      return;

    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    clearTimeout(timeout);
    timeout = null;
    setActive(false);
  };

  return (
    <Wrapper
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <Tip>
          {content}
        </Tip>
      )}
    </Wrapper>
  );
}

const Size = 6;
const Margin = 10;

const Tip = styled.div`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
  padding: 0.5rem 1rem;
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.black};
  ${props => applyFontStyle(props.theme, "body")}
  z-index: 100;
  white-space: nowrap;

  top: ${Margin * -1}px;

  &::before {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: ${Size}px;
    margin-left: ${Size * -1}px;
    top: 100%;
    border-top-color: ${props => props.theme.color.black};
  }
`;

const Wrapper = styled.div`
  display: inline-flex;
  position: relative;
`;

export default Tooltip;
