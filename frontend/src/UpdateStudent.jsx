/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {idStudent} = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getUserById();
  }, []);
  const getUserById = async () => {
    const response = await axios.get(`http://localhost:8081/api/update/${idStudent}`)
      .then((res) => {
        const data = res.data[0];
        setName(data.name);
        setEmail(data.email);
      })
    .catch((err) => console.log(err));
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios.put(`http://localhost:8081/api/store/${idStudent}`, {
      studentName: name,
      studentEmail: email,
    });
    navigate("/");
  }
  return (
    <>
      <div className="container">
        <div className="content form">
          <h1>Update Student</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                placeholder="Enter Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="Enter Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input type="submit" value="Update" className="btn" />
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateStudent;
