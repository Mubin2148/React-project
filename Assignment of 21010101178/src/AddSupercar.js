import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddSupercar() {
  const param = useParams();

  const navigate = useNavigate();

  const apiUrl = "https://630c645f83986f74a7bf23bb.mockapi.io/SuperCar";
  const [data, setData] = useState({});

  return (
    <>
      <div
        className="input-group mb-3"
        onChange={(e) => {
          setData({ ...data, SupercarName: e.target.value });
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
          setData({ ...data, SupercarImage: e.target.value });
        }}
      >
        <span className="input-group-text" id="inputGroup-sizing-sm">
         Car-Image
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
          setData({ ...data, SupercarPrice: e.target.value });
        }}
      >
        <span className="input-group-text" id="inputGroup-sizing-default">
          Price
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>

      <div
        className="input-group mb-3"
        onChange={(e) => {
          setData({ ...data, id: e.target.value });
        }}
      >
        <span className="input-group-text" id="inputGroup-sizing-default">
          Car-id
        </span>
        <input
          type="Number"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>

      <div
        className="input-group mb-3"
        onChange={(e) => {
          setData({ ...data, SupercarDescription: e.target.value });
        }}
      >
        <span className="input-group-text" id="inputGroup-sizing-lg">
          Description
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
          value="Add Supercar"
          onClick={() => {
            fetch(apiUrl, {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
              },
            }).then((res) => {
              navigate("/Supercar");
            });
          }}
        />
      </div>
    </>
  );
}
