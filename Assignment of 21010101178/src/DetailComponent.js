import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetailComponent() {
  const navigate = useNavigate();
  const param = useParams();

  const apiUrl = "https://630c645f83986f74a7bf23bb.mockapi.io/Faculties";

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(apiUrl + "/" + param.id, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={data.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3
              style={{
                borderBottom: "1px solid black",
                paddingBottom: "3px",
              }}
              className="card-title"
            >
              {data.FacultyName}
            </h3>
            <h6 className="card-text">{data.Email}</h6>
            <h6 className="card-text">{"ZipCode : " + data.PinCode}</h6>
            <h6 className="card-text">ContactNumber : {data.ContactNumbar}</h6>
            <h6>{data.ContactNumber}</h6>

            <div>
              <div
                style={{
                  float: "left",
                }}
                className="btn btn-danger"
                onClick={() => {
                  fetch(apiUrl + "/" + param.id, { method: "DELETE" }).then(
                    (res) => {
                      navigate("/faculties");
                    }
                  );
                }}
              >
                Delete
              </div>
              <div
                style={{
                  width: "40px",
                  float: "left",
                  border: "2px solid white",
                }}
              ></div>
              <div
                style={{
                  float: "left",
                }}
                className="btn btn-primary"
                onClick={() => {
                  fetch(apiUrl + "/" + param.id, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                      "content-type": "application/json",
                    },
                  }).then(navigate("../faculties/edit/" + param.id));
                }}
              >
                Edit
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
