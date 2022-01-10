import { WorkspaceListBox } from "./styles";
import { Stack } from "@bedrock-layout/stack";
import { NavLink } from "react-router-dom";
import { MenuItem } from "../../Common/MenuItem.styled";
import { workspaceList } from "../workspaces";

type WorkspaceListProps = {
  headerOffset?: number,
};
export const WorkspaceList = ({ headerOffset }: WorkspaceListProps) => (
  <WorkspaceListBox headerOffset={headerOffset}>
    <Stack as="ul" gutter="md">
      {workspaceList.map((workspace, i) => (
        <WorkspaceListNavLink key={i} to={workspace.id} label={workspace.name} />
      ))}
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
