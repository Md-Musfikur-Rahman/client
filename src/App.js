import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import CreatNew from "./pages/CreatNew";
import Update from "./pages/Update";
import FacultyMember from "./pages/FacultyMember";
import InternshipProgram from "./pages/InternshipProgram";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              CETL
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/FacultyMember">
                    Faculty Member
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/InternshipProgram">
                    Internship Program
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ContactUs">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href="https://github.com/md-musfikur-rahman"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary ml-3"
            >
              GitHub
            </a>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/create" Component={CreatNew} />
          <Route path="/update/:id" Component={Update} />
          <Route path="/FacultyMember" Component={FacultyMember} />
          <Route path="/InternshipProgram" Component={InternshipProgram} />
          <Route path="/ContactUs" Component={ContactUs} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
