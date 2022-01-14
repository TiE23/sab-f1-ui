import { Outlet } from "react-router-dom";

import { useDimensions } from "./utils/hooks";
import {
  setDimensions,
} from "./features/pageDimensions/pageDimensionsSlice";

import { MainMenu } from "./components/Menu";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const [appRef, {
    height: appHeight,
    width: appWidth,
  }] = useDimensions<HTMLDivElement>();
  const [mainMenuRef, {
    height: mainMenuHeight,
    width: mainMenuWidth,
  }] = useDimensions<HTMLDivElement>();

  // Set App dimensions.
  useEffect(() => {
    dispatch(setDimensions({
      name: "app",
      dimensions: { height: appHeight, width: appWidth },
    }));
  }, [appHeight, appWidth]);

  // Set MainMenu dimensions.
  useEffect(() => {
    dispatch(setDimensions({
      name: "mainMenu",
      dimensions: { height: mainMenuHeight, width: mainMenuWidth },
    }));
  }, [mainMenuHeight, mainMenuWidth]);

  return (
    <div className="App" ref={appRef}>
      <MainMenu ref={mainMenuRef} />
      <Outlet />
    </div>
  );
}

export default App;
