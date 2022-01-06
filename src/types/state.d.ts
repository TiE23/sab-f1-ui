export type RootState = {
  pageDimensions: PageDimensions,
};

export type PageDimensions = {
  menu: MenuDimensions,
};

export type MenuDimensions = {
  height: number,
};
