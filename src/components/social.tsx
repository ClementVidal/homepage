import Image from "next/image";
import styled from "styled-components";
import { breakpointUp, underline } from "themes";

export const Social = ({className}: any) => {

  return (
    <Wrapper className={className}>
      <li>
        <a href="http://github.com/ClementVidal" target="_blank">
          <Image src="/icons/github.svg" alt="Github link" width="30" height="30" />
        </a>
      </li>
      <li>
        <a href="https://dev.to/clementvidal" target="_blank">
          <Image src="/icons/dev.svg" alt="Dev.to" width="30" height="30" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/clementvidalpro" target="_blank">
          <Image src="/icons/twitter.svg" alt="Twitter link" width="30" height="30" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/clementvidalprofile/" target="_blank">
          <Image src="/icons/linkedin.svg" alt="Linkedin link" width="30" height="30" />
        </a>
      </li>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content;
  justify-content: end;
  margin: 0;
  padding: 0;
  li {
    display: inline-flex;
    margin: 0 0.25rem;
    box-shadow: 0px 0px 7px 0px  ${props => props.theme.color.black};
  }
  a {
    display: inline-flex;
    cursor: pointer;
    ${props => underline(props.theme, true)}
  }
`;


export default Social;
