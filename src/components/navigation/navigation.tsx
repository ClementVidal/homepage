import styled, { DefaultTheme } from "styled-components";
import { applyFontStyle } from "themes";
import Image from "next/image";
import { useScrollPosition } from "components/scroll-position";
import { useCallback, useState } from "react";

const Height = 110;
const DetachedThrshold = 256;

const Navigation = () => {

  const [isDetached, setIsDetached] = useState(false);

  const onScroll = useCallback((prev: number, curr: number) => {
    if (curr > DetachedThrshold && !isDetached) {
      setIsDetached(true)
    } else if (curr <= DetachedThrshold && isDetached) {
      setIsDetached(false)
    }
  }, [isDetached]);
  useScrollPosition(onScroll, [onScroll]);

  console.log(isDetached);

  return (
    <Wrapper>
      <Content detached={isDetached}>
        <Name>
          <h1>
            Clément.
        </h1>
        </Name>
        <Links>
          <li>
            <a>
              Experiences
          </a>
          </li>
          <li>
            <a>
              Blog
          </a>
          </li>
          <li>
            <a>
              Contact
          </a>
          </li>
        </Links>
        <Social>
          <li>
            <a>
              <Image src="/icons/github.svg" alt="Github link" width="30" height="30" />
            </a>
          </li>
          <li>
            <a>
              <Image src="/icons/twitter.svg" alt="Github link" width="30" height="30" />
            </a>
          </li>
          <li>
            <a>
              <Image src="/icons/linkedin.svg" alt="Github link" width="30" height="30" />
            </a>
          </li>
        </Social>
      </Content>
    </Wrapper>
  );
}

const underline = (theme: DefaultTheme, onHover: boolean) => `
position: relative;
&:after {
  transition: transform 175ms ease-in-out;
  content: "";
  height: 2px;
  background-color: ${theme.color.secondary};
  width:100%;
  position: absolute;
  left: 0px;
  bottom: -12px;
  transform-origin: left;
  opacity: ${onHover ? "0" : "1"};
  transform: scaleX(${onHover ? "0" : "1"});
}

${onHover ?
    `&:hover {
  &:after {
    opacity: 1;
    transform: scaleX(1);
  }
}` : ""}
`;

const Name = styled.div`
  h1 {
    ${props => applyFontStyle(props.theme, "h2")}
    display: inline-block;
    ${props => underline(props.theme, false)}
  }
`;

const Content = styled.nav<{detached:boolean}>`
  ${props => props.detached ? `
  position: fixed;
  background-color: ${props.theme.color.primary};
  ` : ""}
  width: 100%;
  z-index: 1;
  height: ${Height}px;
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  align-items: center;
  padding: 2rem;
`;

const Social = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content;
  justify-content: end;
  margin: 0;
  padding: 0;
  li {
    display: inline-flex;
    margin: 0 0.5rem;
    box-shadow: 0px 0px 7px 0px  ${props => props.theme.color.black};
  }
  a {
    display: inline-flex;
    cursor: pointer;
    ${props => underline(props.theme, true)}
  }
`;

const Links = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content;
  margin: 0;
  padding: 0;
  li {
    display: inline-flex;
    padding: 0 1rem;
  }

  a {
    cursor: pointer;
    ${props => underline(props.theme, true)}
  }
`;

const Wrapper = styled.div`
  height: ${Height}px;
`;

export default Navigation;
