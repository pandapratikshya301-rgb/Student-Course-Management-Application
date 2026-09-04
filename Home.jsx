import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Home() {
  const student = useContext(StudentContext);

  return (
    <div>
      <h1>Student Course Management Application</h1>

      <h2>Student Information</h2>

      <p>Name: {student.name}</p>
      <p>Course: {student.course}</p>
      <p>College: {student.college}</p>
    </div>
  );
}

export default Home;
