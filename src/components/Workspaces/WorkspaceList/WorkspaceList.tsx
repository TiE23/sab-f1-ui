import _ from "lodash";
import { NavLink } from "react-router-dom";

import { WorkspaceListBox } from "./styles";
import { Stack } from "@bedrock-layout/stack";
import { MenuItem } from "../../Common/MenuItem.styled";

import { workspaces } from "../../../domain/data/workspaces";

type WorkspaceListProps = {
  headerOffset?: number,
};
export const WorkspaceList = ({ headerOffset }: WorkspaceListProps) => {
  const workspaceList = _.keys(workspaces);
  return (
    <WorkspaceListBox headerOffset={headerOffset}>
      <Stack as="ul" gutter="md">
        {workspaceList.map((id) => (
          <WorkspaceListNavLink
            key={id}
            to={`s/${id}`}
            label={workspaces[id].name}
          />
        ))}
      </Stack>
    </WorkspaceListBox>
  );
};

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
