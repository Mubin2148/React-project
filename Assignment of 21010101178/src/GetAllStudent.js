import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function GetAllStudents() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://631204e3f5cba498da8a9dd2.mockapi.io/StudentDetai")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const formatedData = data.map((stu) => {
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
          <img src={stu.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
            <b>
              <h6 className="card-title">{stu.StudentName}</h6>
            </b>
            <div className="card-text">{"Student-Id : " + stu.StudentId}</div>
            <div
              className="btn btn-primary"
              onClick={() => {
                navigate("/students/" + stu.StudentId);
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
      <div className="Container row">{formatedData}</div>
    </>
  );
}
