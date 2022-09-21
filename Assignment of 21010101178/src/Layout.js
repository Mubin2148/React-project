import { Link, Outlet } from "react-router-dom";
import AddFaculty from "./AddFaculty";

export default function Layout() {
  return (
    <>
      <div
        style={{
          backgroundColor: "lightGrey",
          borderRadius: "40px",
          marginTop: "10px",
        }}
      >
        <button
          className="Layout"
          style={{
            margin: "10px",

            borderRadius: "30px",
            padding: "5px",
            paddingLeft: "15px",
            paddingRight: "15px",
            textColor: "black",
            fontFamily: "cursive",
            fontSize: "19px",
            textDecoration: "none",
          }}
        >
          <Link to="./">Home </Link>{" "}
        </button>
        <button
          className="Layout"
          style={{
            margin: "10px",
            borderRadius: "30px",
            padding: "5px",
            paddingLeft: "15px",
            paddingRight: "15px",
            textColor: "black",
            fontFamily: "cursive",
            fontSize: "19px",
          }}
        >
          <Link to="faculties"> Faculty </Link>{" "}
        </button>

        <button
          onClick={<AddFaculty />}
          className="Layout"
          style={{
            margin: "10px",
            borderRadius: "30px",
            padding: "5px",
            paddingLeft: "15px",
            paddingRight: "15px",
            textColor: "black",
            fontFamily: "cursive",
            fontSize: "19px",
          }}
        >
          <Link to="/faculties/add">Add Faculty</Link>{" "}
        </button>

        <button
          className="Layout"
          style={{
            margin: "10px",
            borderRadius: "30px",
            padding: "5px",
            paddingLeft: "15px",
            paddingRight: "15px",
            textColor: "black",
            fontFamily: "cursive",
            fontSize: "19px",
          }}
        >
          <Link to="students">Students </Link>{" "}
        </button>

        <button
          className="Layout"
          style={{
            margin: "10px",
            borderRadius: "30px",
            padding: "5px",
            paddingLeft: "15px",
            paddingRight: "15px",
            textColor: "black",
            fontFamily: "cursive",
            fontSize: "19px",
          }}
        >
          <Link to="/students/add">Add Students </Link>{" "}
        </button>
        <button
          className="Layout"
          style={{
            margin: "10px",
            borderRadius: "30px",
            padding: "5px",
            paddingLeft: "15px",
            paddingRight: "15px",
            textColor: "black",
            fontFamily: "cursive",
            fontSize: "19px",
          }}
        >
          <Link to="Supercar"> SuperCar</Link>{" "}
        </button>

        <button
          className="Layout"
          style={{
            margin: "10px",
            borderRadius: "30px",
            padding: "5px",
            paddingLeft: "15px",
            paddingRight: "15px",
            textColor: "black",
            fontFamily: "cursive",
            fontSize: "19px",
          }}
        >
          <Link to="/Supercar/add">Add Supercar </Link>{" "}
        </button>

      </div>

      <br />
      <div
        className="Outlet"
        style={{
          width: "100%",
          height: "auto",
          minHeight: "500px",
        }}
      >
        <Outlet />
      </div>
      <div
        style={{
          boxSizing: "border-box",
          clear: "both",
        }}
      ></div>

      <h1
        className="Footer"
        style={{
          textAlign: "center",
          fontFamily: "initial",
          borderRadius: "40px",
        }}
      >
        Footer
      </h1>
    </>
  );
}
