import { RootState } from "../../types/state";

export const mainMenuDimensionsSelector = (state: RootState) =>
  state.pageDimensions.mainMenu;
export const appDimensionsSelector = (state: RootState) =>
  state.pageDimensions.app;
export const workspaceDimensionsSelector = (state: RootState) =>
  state.pageDimensions.workspace;
