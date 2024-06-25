/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_API_URL}/api/insert`, {studentName: name, studentEmail: email,
    })
    navigate("/");
  }
  return (
    <>
      <div className="container">
        <div className="content form">
          <h1>Add Student</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                placeholder="Enter Name"
                type="text"
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input type="submit" value="Submit" className="btn" />
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateStudent;
