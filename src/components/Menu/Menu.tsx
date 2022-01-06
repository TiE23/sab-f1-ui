import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { InlineCluster } from "@bedrock-layout/inline-cluster";
import useForwardedRef from "@bedrock-layout/use-forwarded-ref";

import { MenuBar, MenuItem, Title } from "./styles";

import f1Logo from "../../public/images/logos/f1-logo-red.svg";

export const MainMenu = React.forwardRef<HTMLDivElement>(
  (_, ref) => (
    <Menu
      ref={ref}
      title="F1 World Broadcast Emulator Project"
      links={[
        { label: "Home", to: "/" },
        { label: "Broadcast Page", to: "/broadcast" },
        { label: "Workspaces", to: "/workspaces" },
      ]}
    />
  ),
);
MainMenu.displayName = "MainMenu";

type MenuProps = {
  links: Array<{label: string, to: string}>,
  title: string,
};
const Menu = React.forwardRef<HTMLDivElement, MenuProps>(
  (props, ref) => {
    const innerRef = useForwardedRef(ref);
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    return (
      <MenuBar ref={innerRef}>
        <Link to="/">
          <img src={f1Logo} alt="Formula One logo" height="20px" />
        </Link>
        <Title>{props.title}</Title>
        <nav>
          <InlineCluster as="ul" gutter="sm" justify="end">
            {props.links.map((link, i) => (
              <MenuNavLink
                key={i}
                to={link.to}
                label={link.label}
                isHovered={i === hoveredIndex}
                onMouseLeave={() => setHoveredIndex(-1)}
                onMouseEnter={() => setHoveredIndex(i)}
              />
            ))}
          </InlineCluster>
        </nav>
      </MenuBar>
    );
  },
);
Menu.displayName = "Menu";

type MenuNavLinkProps = {
  to: string,
  label: string,
  isHovered: boolean,
  onMouseLeave?: () => void,
  onMouseEnter?: () => void,
};
const MenuNavLink = ({ to, label, isHovered, onMouseLeave, onMouseEnter }: MenuNavLinkProps) => (
  <li>
    <NavLink
      to={to}
      style={{ textDecoration: "none" }}
    >
      {({ isActive }) => (
        <MenuItem
          isHovered={isHovered}
          isActive={isActive}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
        >
          {label}
        </MenuItem>
      )}
    </NavLink>
  </li>
);
