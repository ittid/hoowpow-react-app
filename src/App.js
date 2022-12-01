// routing
import { Routes, Route } from "react-router-dom";
// styles
import "./App.css";
// components
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import ViewSidebar from "./components/ViewSidebar";

import View from "./pages/View";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <>
                <Sidebar />
                <Content />
              </>
            }
          ></Route>
        </Route>
        <Route path="view">
          <Route
            path=":postId"
            element={
              <>
                <ViewSidebar />
                <View />
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
