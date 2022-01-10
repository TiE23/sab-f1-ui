export type RootState = {
  pageDimensions: PageDimensions,
  workspace: Workspace,
};

// Page Dimensions
export type PageDimensions = {
  menu: MenuDimensions,
};

export type MenuDimensions = {
  height: number,
};

// Workspace
export type Workspace = {
  workspaceId: WorkspaceId,
  animatedBG: AnimatedBG,
};

export type WorkspaceId = string;
export type AnimatedBG = boolean;
