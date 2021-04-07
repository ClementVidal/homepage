import { FunctionComponent, memo } from "react";
import styled from "styled-components";
import Image from "next/image";
import Tooltip from "../tooltip";
import { breakpointUp } from "themes";

interface CatalogItem {
  logo: string;
  displayName: string;
}

const Catalog: Record<string, CatalogItem> = {
  gitlab: {
    logo: "/icons/gitlab.svg",
    displayName: "Gitlab"
  },
  react: {
    logo: "/icons/react.svg",
    displayName: "React"
  },
  node: {
    logo: "/icons/node.png",
    displayName: "Noje JS"
  },
  typescript: {
    logo: "/icons/typescript.svg",
    displayName: "Typescript"
  },
  cpp: {
    logo: "/icons/cpp.svg",
    displayName: "C++"
  },
  angular: {
    logo: "/icons/angular.svg",
    displayName: "Angular"
  },
  webpack: {
    logo: "/icons/webpack.svg",
    displayName: "Webpack"
  },
  python: {
    logo: "/icons/python.svg",
    displayName: "Python"
  },
  lua: {
    logo: "/icons/lua.svg",
    displayName: "Lua"
  },
  rxjs: {
    logo: "/icons/rxjs.svg",
    displayName: "Rxjs"
  },
  opengl: {
    logo: "/icons/opengl.svg",
    displayName: "OpenGL"
  },
  directx: {
    logo: "/icons/directx.svg",
    displayName: "DirectX"
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
    <Tooltip content={item.displayName}>
      <Wrapper>
        <Image src={item.logo} alt="Skill image" width={50} height={50} />
      </Wrapper>
    </Tooltip>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
  display: inline-flex;
  border-radius: 5px;

  width: 2.5rem;
  height: 2.5rem;

  ${breakpointUp("mobile")} {
    width: 3rem;
    height: 3rem;
  }
  box-shadow: 0px 0px 7px 0px  ${props => props.theme.color.blackWithOpacity(0.2)};
`;

export default memo(Skill);
