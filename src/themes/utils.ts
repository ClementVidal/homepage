import { DefaultTheme } from "styled-components";

export const applyFontStyle = (
  theme: DefaultTheme,
  name: keyof typeof theme.fontStyle
) => {
  const style = theme.fontStyle[name];
  return `
    font-size: ${style.fontSize};
    font-weight: ${style.fontWeight};
    line-height: ${style.lineHeight};
  `;
};


export const underline = (theme: DefaultTheme, onHover: boolean, gap: number|null = null) => `
position: relative;
&:after {
  transition: transform 175ms ease-in-out;
  content: "";
  height: 2px;
  background-color: ${theme.color.secondary};
  width:100%;
  position: absolute;
  left: 0px;
  bottom: -0.5rem;
  ${breakpointUp("mobile")} {
    bottom: -0.8rem;
  }
  ${gap ? `bottom: -${gap}rem !important;` : ""}
  transform-origin: left;
  opacity: ${onHover ? "0" : "1"};
  transform: scaleX(${onHover ? "0" : "1"});
}
${onHover ? `
&:hover {
  &:after {
    opacity: 1;
    transform: scaleX(1);
  }
}` : ""}
`;

const breakpoint = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1200,
}

export const breakpointUp = (
  name: keyof typeof breakpoint
) => {
  return `@media screen and (min-width: ${breakpoint[name]}px)`
};

export const breakpointDown = (
  name: keyof typeof breakpoint
) => {
  return `@media screen and (max-width: ${breakpoint[name]-1}px)`
};

export const breakpointValue = (
  name: keyof typeof breakpoint
) => {
  return breakpoint[name]+"px";
};
