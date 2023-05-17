import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import CreatNew from "./pages/CreatNew";
import Update from "./pages/Update";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/create" Component={CreatNew} />
          <Route path="/update/:id" Component={Update} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
