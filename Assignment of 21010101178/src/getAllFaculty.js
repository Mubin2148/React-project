import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function GetAllFaculty() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://630c645f83986f74a7bf23bb.mockapi.io/Faculties")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const formatedData = data.map((fac) => {
    return (
      <>
        <div
          className="card col-lg-2 col-md-3 col-sm-4"
          style={{
            width: "12rem",
            align: "center",
            margin: "10px",
            backgroundColor: "lightYellow",
          }}
        >
          <span className="span">
            <img
              style={{
                borderRadius: "80px",
              }}
              src={fac.avatar}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <b>
                <h6 className="card-title">{fac.FacultyName}</h6>
              </b>
              <div className="card-text">{"Faculty-Id : " + fac.id}</div>
              <div style={{ clear: "both" }}></div>
              <div
                style={{
                  marginTop: "13px",
                }}
                className="btn btn-info"
                onClick={() => {
                  navigate("/facultyDetail/" + fac.id);
                }}
              >
                Details
              </div>
            </div>
          </span>
        </div>
      </>
    );
  });

  return (
    <>
      <div className=" row">
        {formatedData}
      </div>
    </>
  );
}
