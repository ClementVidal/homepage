import { DefaultTheme } from "styled-components";

export const applyFontStyle = (
  theme: DefaultTheme,
  name: keyof typeof theme.fontStyle
) => {
  const style = theme.fontStyle[name];
  return `
    font-size: ${style.fontSize};
    font-weight: ${style.fontWeight};
  `;
};
