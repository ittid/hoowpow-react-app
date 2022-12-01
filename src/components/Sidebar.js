import { Routes, Route } from "react-router-dom";
import Logo from "./atoms/Logo";
import Intro from "./atoms/Intro";
import Title from "./atoms/Title";
import Sabonner from "./atoms/Sabonner";

var stylingSidebar = {
  header: {
    position: "fixed",
    width: "25vw",
    height: "100%",
    background: "#000",
    color: "#FFF",
    padding: "1.4em 0",
    overflow: "scroll",
  },
};

function Sidebar() {
  return (
    <>
      <header className="sidebar" style={stylingSidebar.header}>
        <div className="container">
          <Logo />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Intro />
                  <Title />
                  <Sabonner />
                </>
              }
            ></Route>
          </Routes>
        </div>
      </header>
    </>
  );
}

export default Sidebar;
