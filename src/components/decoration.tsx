import styled, { DefaultTheme, keyframes } from "styled-components";

const Decoration = () => {
  return (
    <Wrapper>
      <div />
      <div />
      <div />
      <div />
    </Wrapper>
  );
}

const gradient = (theme: DefaultTheme, value1: number, value2: number) => {
  return `linear-gradient(${theme.color.primaryWithOpacity(value1)}, ${theme.color.primaryWithOpacity(value2)})`;
}

const animate = (r: number, t: number, dr: number, dt: number) => {
  return `
    0% {
      transform: rotateZ(${r}deg) translateY(${t}%);
    }
    100% {
      transform: rotateZ(${r+dr}deg) translateY(${t+dt}%);
    }
  `

}

const a1 = keyframes`
${animate(-4, 75, 4, -1)}
`;

const a2 = keyframes`
${animate(10, 72, 8, 2)}
`;

const a3 = keyframes`
${animate(-15, 46, 10, -2)}
`;

const a4 = keyframes`
${animate(-15, 70, 10, 3)}
`;

const duration = "15s";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  background: ${props => gradient(props.theme, 0.8, 0.7)};
  display: flex;
  justify-content: center;
  align-items: flex-end;


  div {
    width: 150%;
    height: 150%;
    position: absolute;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
  }

  div:nth-child(1) {
    animation: ${duration} linear 0s infinite alternate ${a1};
    background: ${props => gradient(props.theme, 0.3, 0.6)};
  }
  div:nth-child(2) {
    animation: ${duration} linear 0s infinite alternate ${a2};
    background:  ${props => gradient(props.theme, 0.3, 0.6)};
  }
  div:nth-child(3) {
    animation: ${duration} linear 0s infinite alternate ${a3};
    background:  ${props => gradient(props.theme, 0.3, 0.6)};
  }
  div:nth-child(4) {
    animation: ${duration} linear 0s infinite alternate ${a4};
    background:  ${props => gradient(props.theme, 0.3, 0.6)};
  }
`;

export default Decoration;
