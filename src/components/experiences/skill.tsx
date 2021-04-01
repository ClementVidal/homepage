import { FunctionComponent } from "react";
import styled from "styled-components";
import Job from "./job";
import Image from "next/image";

const Catalog = {
  gitlab: {
    logo: "/skills/gitlab.png"
  },
  react: {
    logo: "/skills/react.png"
  },
  node: {
    logo: "/skills/node.png"
  },
  typescript: {
    logo: "/skills/typescript.png"
  },
  cpp: {
    logo: "/skills/cpp.png"
  },
  angular: {
    logo: "/skills/angular.png"
  },
  webpack: {
    logo: "/skills/webpack.png"
  },
  invalid: {
    logo: "/skills/node.png"
  }
}

export type SkillType = keyof typeof Catalog;

interface SkillProps {
  type: SkillType;
}

const Skill: FunctionComponent<SkillProps> = ({ type }) => {
  let item = Catalog[type];
  if (!item) {
    item = Catalog.invalid;
  }
  return (
    <Wrapper>
      <Image src={item.logo} alt="Skill image" width={50} height={50} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
overflow: hidden;
  display: inline-flex;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 0px  ${props => props.theme.color.blackWithOpacity(0.2)};
`;

export default Skill;
