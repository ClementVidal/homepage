import { FunctionComponent, PropsWithChildren } from "react";
import styled from "styled-components";

interface ContentFrameProps {
  className?: string;
}

const ContentFrame: FunctionComponent<ContentFrameProps> = ({ className, children }) => {
  return (
    <Container className={className}>
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
  padding: 0 2rem;
  width: 100%;
  max-width: ${props => props.theme.breakpoint.desktop};
  justify-self: center;
`;


export default ContentFrame;
