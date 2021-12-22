import { Outlet } from "react-router-dom";

import { MainMenu } from "./components/Menu";

function App() {
  return (
    <div className="App">
      <MainMenu />
      <Outlet />
    </div>
  );
}

export default App;
