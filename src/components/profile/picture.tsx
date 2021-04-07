import Image from 'next/image'
import styled from "styled-components";
import { breakpointUp } from "themes";

const Picture = () => {
  return (
    <Wrapper>
      <div>
        <Image
          src="/profile.jpg"
          alt="Picture of the author"
          width={200}
          height={200}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-flex;
  border-radius: 50%;
  width: 150px;
  height: 150px;

  ${breakpointUp("mobile")} {
    width: 200px;
    height: 200px;
  }

  border: 2px solid ${props => props.theme.color.secondary};

  & > div {
    display: flex;
    margin: 5px;
    ${breakpointUp("mobile")} {
      margin: 10px;
    }
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid ${props => props.theme.color.secondaryWithOpacity(0.2)};
  }
`;


export default Picture;
