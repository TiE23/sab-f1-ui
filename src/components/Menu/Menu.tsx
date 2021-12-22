import React, { Children } from "react";
import { Link } from "react-router-dom";
import { InlineCluster } from "@bedrock-layout/inline-cluster";
import useForwardedRef from "@bedrock-layout/use-forwarded-ref";

import { MenuBar, MenuItem } from "./styles";

import f1Logo from "../../public/images/logos/f1-logo-red.svg";

export const MainMenu = React.forwardRef<HTMLDivElement>(
  (_, ref) => (
    <Menu ref={ref} title="F1 World Broadcast Emulator Project">
      <Link to="/">Home</Link>
      <Link to="/broadcast">Broadcast Page</Link>
    </Menu>
  ),
);
MainMenu.displayName = "MainMenu";

type MenuProps = {
  children: React.ReactNode,
  title: string,
};
export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  (props, ref) => {
    const innerRef = useForwardedRef(ref);
    const childrenArray = Children.toArray(props.children);
    return (
      <MenuBar ref={innerRef}>
        <img src={f1Logo} alt="Formula One logo" height="20px" />
        <h3>{props.title}</h3>
        <nav>
          <InlineCluster as="ul" gutter="sm" justify="end">
            {childrenArray.map((child, i) => (
              <MenuItem key={i}>{child}</MenuItem>
            ))}
          </InlineCluster>
        </nav>
      </MenuBar>
    );
  },
);
Menu.displayName = "Menu";
