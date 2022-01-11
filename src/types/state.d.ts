export type RootState = {
  pageDimensions: PageDimensions,
  workspace: Workspace,
  overlayTool: OverlayTool,
};

// Page Dimensions
export type PageDimensions = {
  menu: MenuDimensions,
  app: AppDimensions,
};

export type MenuDimensions = {
  height: number,
};
export type AppDimensions = {
  height: number,
  width: number,
};

// Workspace
export type Workspace = {
  workspaceId: WorkspaceId,
  animatedBG: AnimatedBG,
};

export type WorkspaceId = string;
export type AnimatedBG = boolean;

// Overlay Tool
export type OverlayTool = {
  // workspaceId: WorkspaceId,
  overlayIds: Array<OverlayId>,
  currentOverlayId: OverlayId | null,
  currentOverlayItem: OverlayItem | null,
  visible: boolean,
};
export type OverlayId = string;
export type OverlayPosition = { x: number, y: number };
export type OverlayItem = {
  id: OverlayId,
  position: OverlayPosition,
  opacity: number,
  scale: number,
};
