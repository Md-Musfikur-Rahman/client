import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatNew() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  function handelSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5555/create", { name, email, address })
      .then((res) => {
        console.log(res);
        navigate("/FacultyMember");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="d-flex vh-100 justify-content-center align-item-center">
      <div class="w-75 p-4 m-4 m-auto">
        <form onSubmit={handelSubmit}>
          <h2> Add New Record </h2>
          <div className="mb-2">
            <label htmlFor="name"> Name </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email"> Email </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address"> Address </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter Address"
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatNew;
