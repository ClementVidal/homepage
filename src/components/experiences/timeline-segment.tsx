import { FunctionComponent } from "react";
import styled, { DefaultTheme } from "styled-components";


interface TimelineSegmentProps {
  isLast: boolean;
  hightlight: boolean;
}

const TimelineSegment: FunctionComponent<TimelineSegmentProps> = ({ hightlight, isLast }) => {
  return (
    <Wrapper>
      <Line isLast={isLast} />
      <LineHightlight isLast={isLast} hightlight={hightlight} />
      <Marker />
    </Wrapper>
  );
}

const gradient = (theme: DefaultTheme, hightlight: boolean, isLast: boolean) => {
  if (hightlight && isLast) {
    return `linear-gradient(${theme.color.secondaryWithOpacity(1)} 0%, ${theme.color.secondaryWithOpacity(1)} 90%, ${theme.color.secondaryWithOpacity(0.0)} 100%);`
  } else if (hightlight && !isLast) {
    return `linear-gradient(${theme.color.secondaryWithOpacity(0.0)} 0%, ${theme.color.secondaryWithOpacity(1)} 10%, ${theme.color.secondaryWithOpacity(1)} 90%, ${theme.color.secondaryWithOpacity(0.0)} 100%);`
  }
  return `${theme.color.secondaryWithOpacity(0.0)};`
}

const Line = styled.div<Pick<TimelineSegmentProps, "isLast">>`
  position: relative;
  left: 1px;
  transition: all 175ms ease-in-out;
  display: block;
  width: 2px;
  ${props => props.isLast ? "margin-top: 18px" : ""};
  background: ${props => `linear-gradient(${props.theme.color.secondaryWithOpacity(0.1)}, ${props.theme.color.secondaryWithOpacity(0.1)});`}
`;

const LineHightlight = styled.div<TimelineSegmentProps>`
  position: relative;
  left: -1px;
  transition: all 250ms ease-in-out;
  display: block;
  width: 2px;
  ${props => props.isLast ? "margin-top: 18px" : ""};
  opacity: ${props => props.hightlight ? 1.0 : 0.0};
  transform: ${props => props.hightlight ? "scaleY(1)" : "scaleY(0)"};
  transform-origin: center ${props => props.isLast ? "top" : "10%"};
  background: ${props => gradient(props.theme, props.hightlight, props.isLast)};
`;

const Marker = styled.div`
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  top: 18px;
  position: absolute;
  background-color: ${props => props.theme.color.secondary};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 6rem;
  position: relative;
`;

export default TimelineSegment;
