import { Outlet, Link } from "react-router-dom";

import { Menu } from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu title="F1 World Broadcast Emulator Project">
        <Link to="/broadcast">Broadcast Page</Link>
        <Link to="/broadcast">Broadcast Page</Link>
        <Link to="/broadcast">Broadcast Page</Link>
        <Link to="/broadcast">Broadcast Page</Link>
      </Menu>
      <Outlet />
    </div>
  );
}

export default App;
