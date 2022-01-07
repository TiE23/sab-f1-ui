import { WorkspaceListBox } from "./styles";
import { Stack } from "@bedrock-layout/stack";
import { NavLink } from "react-router-dom";
import { MenuItem } from "../../Common/MenuItem.styled";

export const WorkspaceList = () => (
  <WorkspaceListBox>
    <Stack as="ul" gutter="md">
      <WorkspaceListNavLink to="workspace1" label="Workspace 1" />
      <WorkspaceListNavLink to="workspace2" label="Workspace 2" />
      <WorkspaceListNavLink to="workspace3" label="Workspace 3" />
      <WorkspaceListNavLink to="workspace4" label="Workspace 4" />
      <WorkspaceListNavLink to="workspace5" label="Workspace 5 is longer than the rest" />
    </Stack>
  </WorkspaceListBox>
);

type WorkspaceListNavLinkProps = {
  to: string,
  label: string,
};
const WorkspaceListNavLink = ({ to, label }: WorkspaceListNavLinkProps) => (
  <li>
    <NavLink to={to} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <MenuItem isActive={isActive}>
          {label}
        </MenuItem>
      )}
    </NavLink>
  </li>
);
