import { useState } from "react";
import "./App.css";

function App() {
  const [studentTitle, setStudentTitle] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editAbleStudent, setEditAbleStudent] = useState(null);
  //handler name
  const handleNameChange = (e) => {
    setStudentTitle(e.target.value);
  };
  //derived state...declare korte hoy na kintu state hisabe count hoy
  //present list
  const presentList = students.filter((student) => student.isPresent === true);
  //absent list
  const absentList = students.filter((student) => student.isPresent === false);

  //add student
  const createHandler = () => {
    const newStudent = {
      id: Date.now() + "",
      name: studentTitle,
      isPresent: undefined,
    };
    setStudents([newStudent, ...students]);
    //reset input box
    setStudentTitle("");
  };

  //update
  const editHandler = (student) => {
    setEditMode(true);
    setEditAbleStudent(student);
    setStudentTitle(student.name);
  };
  const updateHandler = () => {
    const updateStudents = students.map((student) => {
      if (student.id === editAbleStudent.id) {
        return {
          ...student,
          name: studentTitle,
          isPresent: undefined,
        };
      }
      return student;
    });
    setStudents(updateStudents);
    setStudentTitle("");
    setEditMode(false);
  };

  //remove student
  const removeHandler = (studentId) => {
    const filterStudent = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(filterStudent);
  };

  //submit the data
  const submitHandler = (e) => {
    e.preventDefault();
    if (studentTitle === "") {
      return alert("Plz enter valid name");
    }
    {
      editMode ? updateHandler() : createHandler();
    }
  };

  //make present
  const makePresentHandler = (student) => {
    if (student.isPresent === true || student.isPresent === false) {
      return alert(
        "The student is already in the list.Please use the accidently  button"
      );
    }
    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          isPresent: true,
        };
      }
      return item;
    });
    setStudents(updatedStudentList);
  };
  //make absent
  const makeAbsentHandler = (student) => {
    if (student.isPresent === true || student.isPresent === false) {
      return alert(
        "The student is already in the list.Please use the accidently used button"
      );
    }
    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          isPresent: false,
        };
      }
      return item;
    });
    setStudents(updatedStudentList);
  };

  //toggle handler
  const toggleHandler = (studentId) => {
    const updatedStudentList = students.map((item) => {
      if (item.id === studentId) {
        return {
          ...item,
          isPresent: !item.isPresent,
        };
      }
      return item;
    });
    setStudents(updatedStudentList);
  };
  return (
    <>
      <h2>Simple Attendence</h2>
      <form onSubmit={submitHandler}>
        <input type="text" value={studentTitle} onChange={handleNameChange} />
        <button>{editMode ? "Update Student" : "Add Student"}</button>
      </form>
      <div className="student-section">
        <div className="list all-student">
          <h2>All Student</h2>
          <ul>
            {students.map((student) => (
              <li key={student.id}>
                <span>{student.name}</span>
                <button onClick={() => editHandler(student)}>Edit</button>
                <button onClick={() => removeHandler(student.id)}>
                  Remove
                </button>
                <button onClick={() => makePresentHandler(student)}>
                  Attendence
                </button>
                <button onClick={() => makeAbsentHandler(student)}>
                  Absent
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="list present-student">
          <h2>Present Student</h2>
          <ul>
            {presentList.map((student) => (
              <li key={student.id}>
                <span>{student.name}</span>

                <button
                  onClick={() => {
                    toggleHandler(student.id);
                  }}
                >
                  Accidently Happen
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="list absent-student">
          <h2>Absent Student</h2>
          <ul>
            {absentList.map((student) => (
              <li key={student.id}>
                <span>{student.name}</span>

                <button
                  onClick={() => {
                    toggleHandler(student.id);
                  }}
                >
                  Accidently Happen
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
