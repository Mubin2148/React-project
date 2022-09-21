import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FacultyEdit() {
  const param = useParams();
  const navigate = useNavigate();
  const apiUrl = "https://630c645f83986f74a7bf23bb.mockapi.io/Faculties";
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(apiUrl + "/" + param.id, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <div
        style={{
          paddingTop: "4px",
        }}
        className="input-group mb-3"
        onChange={(e) => {
          setData({ ...data, FacultyName: e.target.value });
        }}
      >
        <span className="col-1 input-group-text" id="inputGroup-sizing-sm">
          Name
        </span>
        <input
          value={data.FacultyName}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <div
        style={{
          paddingTop: "4px",
        }}
        className="input-group mb-3"
        onChange={(e) => {
          setData({ ...data, avatar: e.target.value });
        }}
      >
        <span className="col-1 input-group-text" id="inputGroup-sizing-sm">
          Profile-picture
        </span>
        <input
          value={data.avatar}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <div
        className="input-group mb-3"
        onChange={(e) => {
          setData({ ...data, Email: e.target.value });
        }}
      >
        <span className="col-1 input-group-text" id="inputGroup-sizing-default">
          Email
        </span>
        <input
          value={data.Email}
          type="Email"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>

      <div
        className="input-group mb-3"
        onChange={(e) => {
          setData({ ...data, ContactNumbar: e.target.value });
        }}
      >
        <span className="col-1 input-group-text" id="inputGroup-sizing-lg">
          Contact-Number
        </span>
        <input
          type="tNumber"
          value={data.ContactNumbar}
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>

      <div
        className="input-group mb-3"
        onChange={(e) => {
          setData({ ...data, PinCode: e.target.value });
        }}
      >
        <span className="col-1 input-group-text" id="inputGroup-sizing-lg">
          PinCode
        </span>
        <input
          value={data.PinCode}
          type="tNumber"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>

      <input
        className="btn btn-success"
        style={{
          marginLeft: "500px",
          width: "90px",
        }}
        value="Save"
        onClick={() => {
          fetch(apiUrl + "/" + param.id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {
            <input
              type="button"
              value="Edit Faculty"
              onClick={() => {
                fetch(apiUrl + "/" + param.id, {
                  method: "PUT",
                  body: JSON.stringify(data),
                }).then((res) => {
                  navigate("/faculties");
                });
              }}
            />;
            navigate("/faculties");
          });
        }}
      />
      <input
        className="btn btn-primary"
        type="button"
        style={{
          margin: "40px",
        }}
        value="Cancel"
        onClick={() => {
          navigate("/faculties");
        }}
      />
    </>
  );
}
