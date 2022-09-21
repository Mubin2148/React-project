import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddStudent() {
  const param = useParams();

  const navigate = useNavigate();

  const apiUrl = "https://631204e3f5cba498da8a9dd2.mockapi.io/StudentDetai";
  const [data, setData] = useState({});

  return (
    <>
      <div
        className="input-group mb-3"
        onChange={(e) => {
          setData({ ...data, StudentName: e.target.value });
        }}
      >
        <span className="input-group-text" id="inputGroup-sizing-sm">
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
          setData({ ...data, avatar: e.target.value });
        }}
      >
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Profile-picture
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
        <span className="input-group-text" id="inputGroup-sizing-lg">
          Contact-Number
        </span>
        <input
          type="tNumber"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />

        <input
          style={{}}
          className="btn btn-success"
          type="button"
          value="Add Faculty"
          onClick={() => {
            fetch(apiUrl, {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
              },
            }).then((res) => {
              navigate("/students");
            });
          }}
        />
      </div>
    </>
  );
}
