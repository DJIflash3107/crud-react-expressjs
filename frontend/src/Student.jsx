/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Student() {
  const [student, setStudent] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/`)
      .then((res) => {
        setStudent(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  function deleteStudent(idStudent) {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/delete/${idStudent}`)
      .then((res) => {
        setStudent((prevStudent) =>
          prevStudent.filter((data) => data.id !== idStudent)
        );
      });
  }
  return (
    <>
      <div className="container">
        <div className="content">
          <Link to="/insert" className="btn">
            Add +
          </Link>
          <div>
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {student.map((data, i) => (
                  <tr key={i}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>
                      <Link className="btn" to={`update/${data.id}`}>
                        Edit
                      </Link>
                      <button onClick={() => deleteStudent(data.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student;
