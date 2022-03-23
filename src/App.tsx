import { Outlet } from "react-router-dom";
import useMeasure from "react-use-measure";

import {
  setDimensions,
} from "./features/pageDimensions/pageDimensionsSlice";

import { MainMenu } from "./components/Menu";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { EventLoop } from "./components/Broadcast/RaceDirectorUI/EventLoop/EventLoop";

function App() {
  const dispatch = useDispatch();
  const [appRef, {
    height: appHeight,
    width: appWidth,
  }] = useMeasure();
  const [mainMenuRef, {
    height: mainMenuHeight,
    width: mainMenuWidth,
  }] = useMeasure();

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
      <EventLoop />
    </div>
  );
}

export default App;
