import { FunctionComponent } from "react";
import styled from "styled-components";
import Job from "./job";
import Image from "next/image";

const Catalog = {
  gitlab: {
    logo: "/icons/gitlab.svg",
  },
  react: {
    logo: "/icons/react.svg"
  },
  node: {
    logo: "/icons/node.png"
  },
  typescript: {
    logo: "/icons/typescript.svg"
  },
  cpp: {
    logo: "/icons/cpp.svg"
  },
  angular: {
    logo: "/icons/angular.svg"
  },
  webpack: {
    logo: "/icons/webpack.svg"
  },
  python: {
    logo: "/icons/python.svg"
  },
  lua: {
    logo: "/icons/lua.svg"
  }
}

export type SkillType = keyof typeof Catalog;

interface SkillProps {
  type: SkillType;
}

const Skill: FunctionComponent<SkillProps> = ({ type }) => {
  let item = Catalog[type];
  if (!item) {
    return null;
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
