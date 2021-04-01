import { FunctionComponent } from "react";
import styled from "styled-components";
import { applyFontStyle } from "themes";


interface TimeRangeProps {
  start: Date,
  end: Date
}

const MonthMap = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Nov",
  "Dec"
]

const TimeRange: FunctionComponent<TimeRangeProps> = ({ start, end }) => {
  return (
    <Wrapper>
      <div>
        {MonthMap[end.getMonth()]} {end.getFullYear()}
      </div>
      <div>
        {MonthMap[start.getMonth()]} {start.getFullYear()}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: right;
  div:nth-child(1) {
    ${props => applyFontStyle(props.theme, "h3")}
  }

`;

export default TimeRange;
