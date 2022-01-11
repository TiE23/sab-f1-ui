import { RootState } from "../../types/state";

export const menuDimensionsSelector = (state: RootState) =>
  state.pageDimensions.menu;
export const appDimensionsSelector = (state: RootState) =>
  state.pageDimensions.app;
