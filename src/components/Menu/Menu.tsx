import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { InlineCluster } from "@bedrock-layout/inline-cluster";
import useForwardedRef from "@bedrock-layout/use-forwarded-ref";

import { MenuBar, MenuItem } from "./styles";

import f1Logo from "../../public/images/logos/f1-logo-red.svg";

export const MainMenu = React.forwardRef<HTMLDivElement>(
  (_, ref) => (
    <Menu ref={ref} title="F1 World Broadcast Emulator Project">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/broadcast">Broadcast Page</NavLink>
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
    const childrenArray = React.Children.toArray(props.children);
    const [hovered, setHovered] = useState(-1);
    const [active, setActive] = useState(-1);

    const hackIsActive = (i: number) => ({ isActive }: { isActive: boolean}) => {
      if (isActive) setActive(i);
      return "";
    };

    // Insert mouse event props to these children.
    const newChildren = childrenArray.map((child, i) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          onMouseEnter: () => setHovered(i),
          onMouseLeave: () => setHovered(-1),
          className: hackIsActive(i),
        });
      }
      return child;
    });

    return (
      <MenuBar ref={innerRef}>
        <img src={f1Logo} alt="Formula One logo" height="20px" />
        <h3>{props.title}</h3>
        <nav>
          <InlineCluster as="ul" gutter="sm" justify="end">
            {newChildren.map((child, i) => (
              <MenuItem
                key={i}
                hovered={i === hovered}
                active={i === active}
              >{child}</MenuItem>
            ))}
          </InlineCluster>
        </nav>
      </MenuBar>
    );
  },
);
Menu.displayName = "Menu";
