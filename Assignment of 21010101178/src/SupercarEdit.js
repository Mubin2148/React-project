import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SupercarEdit() {
  const param = useParams();
  const navigate = useNavigate();
  const apiUrl = "https://630c645f83986f74a7bf23bb.mockapi.io/SuperCar";
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
          setData({ ...data, SupercarName: e.target.value });
        }}
      >
        <span className="col-1   input-group-text" id="inputGroup-sizing-sm">
          CarName
        </span>
        <input
          value={data.SupercarName}
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
          setData({ ...data, SupercarImage: e.target.value });
        }}
      >
        <span className="col-1   input-group-text" id="inputGroup-sizing-sm">
          Car-Image
        </span>
        <input
          value={data.SupercarImage}
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
        <span className="col-1   input-group-text" id="inputGroup-sizing-default">
          Price
        </span>
        <input
          value={data.SupercarPrice}
          type="Email"
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
        <span className="col-1   input-group-text" id="inputGroup-sizing-lg">
         Description
        </span>
        <input
          type="tNumber"
          value={data.SupercarDescription}
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>

      <div
        className="input-group mb-3"
        onChange={(e) => {
          setData({ ...data, id: e.target.value });
        }}
      >
        <span className="col-1   input-group-text" id="inputGroup-sizing-lg">
          Car-id
        </span>
        <input
          value={data.id}
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
              value="Edit car details"
              onClick={() => {
                fetch(apiUrl + "/" + param.id, {
                  method: "PUT",
                  body: JSON.stringify(data),
                }).then((res) => {
                  navigate("/Supercar");
                });
              }}
            />;
            navigate("/Supercar");
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
          navigate("/Supercar");
        }}
      />
    </>
  );
}
