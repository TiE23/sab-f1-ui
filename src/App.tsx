// import "./App.css";
import { Outlet, Link } from "react-router-dom";

import { Nav } from "./components/Common/Nav.styled";

function App() {
  return (
    <div className="App">
      <h1>Main Page</h1>
      <Nav>
        <Link to="/broadcast">Broadcast Page</Link>
      </Nav>
      <Outlet />
    </div>
  );
}

export default App;
