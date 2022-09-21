import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import GetAllStudents from "./GetAllStudent";
import GetAllFaculty from "./getAllFaculty";
import DetailComponent from "./DetailComponent";
import FacultyEdit from "./FacultyEdit";
import AddFaculty from "./AddFaculty";
import StudentDetail from "./StudentDetail";
import Home from "./Home";
import StudentEdit from "./StudentEdit";
import AddStudent from "./AddStudent";
import GetAllSupercar from "./GetAllSupercar";
import SupercarDetail from "./SupercarDetail";
import SupercarEdit from "./SupercarEdit";
import AddSupercar from "./AddSupercar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/faculties" element={<GetAllFaculty />} />
          <Route index element={<Home />} />
          <Route path="/Students" element={<GetAllStudents />} />
          <Route path="/Supercar" element={<GetAllSupercar />} />
          <Route
            path="/facultyDetail/:id"
            element={<DetailComponent />}
          ></Route>

          <Route path="/Students/:id" element={<StudentDetail />}></Route>
          <Route path="/Supercar/:id" element={<SupercarDetail />}></Route>
          <Route path="/faculties/edit/:id" element={<FacultyEdit />} />
          <Route path="/Supercar/edit/:id" element={<SupercarEdit />} />
          <Route path="/faculties/add" element={<AddFaculty />} />
          <Route path="/students/add" element={<AddStudent />} />
          <Route path="/supercar/add" element={<AddSupercar />} />
          <Route path="/students/edit/:id" element={<StudentEdit />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
