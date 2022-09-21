import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function StudentEdit() {
  const param = useParams();
  const navigate = useNavigate();
  const apiUrl = "https://631204e3f5cba498da8a9dd2.mockapi.io/StudentDetai";
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(apiUrl + "/" + param.id, { method: "GET" })
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  return (
    <>
      {/* <div
        className="input-group mb-3"
        onChange={(e) => {
          setData({ ...data, StudentName: e.target.value });
        }}
      >
        <span className="col-1 input-group-text" id="inputGroup-sizing-sm">
          Name
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <div
        className="input-group mb-3"
        onChange={(e) => {
          setData({ ...data, ContactNumber: e.target.value });
        }}
      >
        <span className="col-1 input-group-text" id="inputGroup-sizing-lg">
          Contact-Number
        </span>
        <input
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
              value="Edit Student"
              onClick={() => {
                fetch(apiUrl + "/" + param.id, {
                  method: "PUT",
                  body: JSON.stringify(data),
                }).then((res) => {
                  navigate("/students");
                });
              }}
            />;
            navigate("/students");
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
          navigate("/students");
        }}
      /> */}

<div
        style={{
          paddingTop: "4px",
        }}
        className="input-group mb-3"
        onChange={(e) => {
          setData({ ...data, StudentName: e.target.value });
        }}
      >
        <span className="col-1 input-group-text" id="inputGroup-sizing-sm">
          Name
        </span>
        <input
          value={data.StudentName}
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
          setData({ ...data, ContactNumber : e.target.value });
        }}
      >
        <span className="col-1 input-group-text" id="inputGroup-sizing-lg">
          Contact-Number
        </span>
        <input
          type="Number"
          value={data.ContactNumber}
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
              value="Edit Student"
              onClick={() => {
                fetch(apiUrl + "/" + param.id, {
                  method: "PUT",
                  body: JSON.stringify(data),
                }).then((res) => {
                  navigate("/students");
                });
              }}
            />;
            navigate("/students");
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
          navigate("/students");
        }}
      />

    </>
  );
}
