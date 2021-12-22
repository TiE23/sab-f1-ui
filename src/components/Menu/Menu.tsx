import { FC, Children } from "react";
import { InlineCluster } from "@bedrock-layout/inline-cluster";

import { MenuBar, MenuItem } from "./styles";

import f1Logo from "../../public/images/logos/f1-logo-red.svg";

type MenuProps = {
  title: string,
};
export const Menu: FC<MenuProps> = ({
  title,
  children,
}) => {
  const childrenArray = Children.toArray(children);
  return (
    <MenuBar>
      <img src={f1Logo} alt="Formula One logo" height="20px"/>
      <h3>{title}</h3>
      <nav>
        <InlineCluster as="ul" gutter="sm" justify="end">
          {childrenArray.map((child, i) => (
            <MenuItem key={i}>{child}</MenuItem>
          ))}
        </InlineCluster>
      </nav>
    </MenuBar>
  );
};
