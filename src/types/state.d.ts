export type RootState = {
  pageDimensions: PageDimensions,
  workspace: Workspace,
  overlayTool: OverlayTool,
};

// Page Dimensions
export type PageDimensions = {
  mainMenu: Dimensions,
  app: Dimensions,
  workspace: Dimensions,
};
export type Dimensions = { width: number, height: number };

// Workspace
export type Workspace = {
  workspaceId: WorkspaceId,
  animatedBG: boolean,
};

export type WorkspaceId = string;

// Overlay Tool
export type OverlayTool = {
  currentWorkspaceId: WorkspaceId,
  overlayIds: OverlayIds,
  currentOverlayId: OverlayId | null,
  currentOverlayItem: OverlayItem | null,
  visible: boolean,
};
export type OverlayId = string;
export type OverlayIds = Array<OverlayId>;
export type OverlayPosition = { x: number, y: number };
export type OverlayItem = {
  position: OverlayPosition,
  opacity: number,
};
