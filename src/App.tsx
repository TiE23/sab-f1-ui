import { Outlet } from "react-router-dom";

import { useDimensions } from "./utils/hooks";
import { setMenuDimensions } from "./features/pageDimensions/pageDimensionsSlice";

import { MainMenu } from "./components/Menu";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const [ref, { height }] = useDimensions<HTMLDivElement>();

  useEffect(() => {
    // Make sure to not dispatch during a render.
    dispatch(setMenuDimensions({ height }));
  }, [height]);

  return (
    <div className="App">
      <MainMenu ref={ref} />
      <Outlet />
    </div>
  );
}

export default App;
