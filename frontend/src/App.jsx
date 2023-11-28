/* eslint-disable no-unused-vars */
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./Student";
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />}></Route>
          <Route path="/insert" element={<CreateStudent />}></Route>
          <Route path="/update/:idStudent" element={<UpdateStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
