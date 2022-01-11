import { Outlet } from "react-router-dom";

import { useDimensions } from "./utils/hooks";
import {
  setMenuDimensions,
  setAppDimensions,
} from "./features/pageDimensions/pageDimensionsSlice";

import { MainMenu } from "./components/Menu";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const [appRef, { height: appHeight, width: appWidth }] = useDimensions<HTMLDivElement>();
  const [mainMenuRef, { height: mainMenuHeight }] = useDimensions<HTMLDivElement>();

  // Set App height and width.
  useEffect(() => {
    dispatch(setAppDimensions({ height: appHeight, width: appWidth }));
  }, [appHeight, appWidth]);

  // Set MainMenu height.
  useEffect(() => {
    dispatch(setMenuDimensions({ height: mainMenuHeight }));
  }, [mainMenuHeight]);

  return (
    <div className="App" ref={appRef}>
      <MainMenu ref={mainMenuRef} />
      <Outlet />
    </div>
  );
}

export default App;
