import { useState } from "react";
import "./App.css";
import StudentsForm from "./components/StudentsForm";
import StudentSection from "./components/StudentSection";

function App() {
  const [studentTitle, setStudentTitle] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editAbleStudent, setEditAbleStudent] = useState(null);

  return (
    <>
      <h2>Simple Attendance</h2>
      <StudentsForm
        students={students}
        setStudents={setStudents}
        studentTitle={studentTitle}
        setStudentTitle={setStudentTitle}
        editMode={editMode}
        setEditMode={setEditMode}
        editAbleStudent={editAbleStudent}
      />
      <StudentSection
        students={students}
        setStudents={setStudents}
        setEditMode={setEditMode}
        setEditAbleStudent={setEditAbleStudent}
        setStudentTitle={setStudentTitle}
      />
    </>
  );
}

export default App;
