import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SupercarDetail() {
  const navigate = useNavigate();
  const param = useParams();

  const apiUrl = "https://630c645f83986f74a7bf23bb.mockapi.io/SuperCar";

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(apiUrl + "/" + param.id, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <div style={{
        width:"25%",
        height:"450px",
        float:"left"
      }}>
        <div className="card" style={{ width: "18rem",
        height:"460px",
        float:"left"
      }}>
          <img src={data.SupercarImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3
              style={{
                borderBottom: "1px solid black",
                paddingBottom: "3px",
              }}
              className="card-title"
            >
              {data.SupercarName}
            </h3>
            <h6 className="card-text">{"Price :"+data.SupercarPrice}</h6>
            <h6 className="card-text">{"Car-id :"+data.id}</h6>

            <div>
              <div
                style={{
                  float: "left",
                }}
                className="btn btn-danger"
                onClick={() => {
                  fetch(apiUrl + "/" + param.id, { method: "DELETE" }).then(
                    (res) => {
                      navigate("/Supercar");
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
                  }).then(navigate("../Supercar/edit/" + param.id));
                }}
              >
                Edit
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div style={{

        margin:"10px",
        height:"430px",
        width:"60%",
        float:"left",
        border:"2px solid grey",
        textalign: "center",
        fontsize: "larger",
        backgroundColor: "lightPink",
        padding:"9px",
        borderRadius:"20px"

      }} className="Description">
        <h1 style={{
          textAlign:"center",
          color:"Blue",
          borderBottom:"1px solid black",
          paddingBottom:"10px"

        }}>Car-Discription</h1>
      <h4 style={{
        height:"300px"
      }} className="card-text">{ data.SupercarDescription }</h4>
      <h3 style={{
        color:"red"

      }}>Price : {data.SupercarPrice}</h3>
      </div>
     

      
    </>
  );
}
