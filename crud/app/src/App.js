import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./components/Home";
import About from "./components/About";

import CreateStudent from "./components/crud/students/CreateStudent";
import ListStudent from "./components/crud/students/ListStudent";
import EditStudent from "./components/crud/students/EditStudent";

import CreateProfessor from "./components/crud/professor/CreateProfessor";
import ListProfessor from "./components/crud/professor/ListProfessor";
import EditProfessor from "./components/crud/professor/EditProfessor";


function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{paddingLeft:10}}>CRUD</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Student
              </a>
              <ul className="dropdown-menu dropdown-menu-blank" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a className="dropdown-item" href="/createStudent">Criar Estudante</a></li>
                <li><a className="dropdown-item" href="/listStudent">Listar Estudante</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Professor
              </a>
              <ul className="dropdown-menu dropdown-menu-blank" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a className="dropdown-item" href="/createProfessor">Criar Professor</a></li>
                <li><a className="dropdown-item" href="/listProfessor">Listar Professores</a></li>
              </ul>
            </li>

            <li className="navitem">
              <Link to="about" className="nav-link">About</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />

        <Route path="createProfessor" element={<CreateProfessor />} />
        <Route path="listProfessor" element={<ListProfessor />} />
        <Route path="editProfessor/:id" element={< EditProfessor/>} />

      </Routes>
    </div>

  );
}

export default App;