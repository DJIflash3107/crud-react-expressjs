const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});
app.get("/", (req, res) => {
  const query = "SELECT * FROM student";
  db.query(query, (err, data) => {
    return err ? res.json(err) : res.json(data);
  });
});
app.post("/api/insert", (req, res) => {
  const query = "INSERT INTO student VALUES('', ?, ?)";
  const values = [req.body.studentName, req.body.studentEmail];
  db.query(query, values, (err, result) => {
    return err ? res.json(err) : res.json(result);
  });
});
app.delete("/api/delete/:idStudent", (req, res) => {
  const query = "delete from student where id = ?";
  const id = req.params.idStudent;
  db.query(query, id, (err, result) => {
    return err ? res.json(err) : res.json(result);
  });
});
app.get("/api/update/:idStudent", (req, res) => {
  const query = "select * from student where id = ?";
  const id = req.params.idStudent;
  db.query(query, id, (err, result) => {
    return err ? res.json(err) : res.json(result);
  });
});
app.put("/api/store/:idStudent", (req, res) => {
  const query = "UPDATE student SET name = ?, email = ? WHERE id = ?";
  const values = [
    req.body.studentName,
    req.body.studentEmail,
  ];
  const id = req.params.idStudent;
  db.query(query, [...values, id], (err, result) => {
    return err ? res.json(err) : res.json(result);
  });
});
app.listen(8081, () => {
  console.log("Listening 8081");
});
