import { FunctionComponent, PropsWithChildren } from "react";
import styled from "styled-components";
import { breakpointUp, breakpointValue } from "themes";

interface ContentFrameProps {
  className?: string;
}

const ContentFrame: FunctionComponent<ContentFrameProps> = ({ className, children, ...other }) => {
  return (
    <Container className={className} {...other}>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: row;
`;

const Content = styled.div`
  padding: 0 1rem;
  ${breakpointUp("mobile")} {
    padding: 0 2rem;
  }
  width: 100%;
  max-width: ${breakpointValue("desktop")};
  justify-self: center;
`;


export default ContentFrame;
