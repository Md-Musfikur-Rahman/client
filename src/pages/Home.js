import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const loadData = async () => {
    const response = await axios.get("http://localhost:5555/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5555/delete/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-item-center">
      <div class="w-75 p-4 m-4 m-auto">
        <table class="table bg-white text-center">
          <thead class="thead-dark ">
            <tr>
              <th scope="col">NO</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>
                    <div class="btn-group">
                      <Link to={`/update/${item.id}`}>
                        <button class="btn btn-success">Edit</button>
                      </Link>
                      <Link to="/">
                        <button
                          class="btn btn-danger"
                          onClick={(e) => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div class="text-center mt-2">
          <Link to="/create">
            <button class="btn btn-primary">Add New</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
