import { useState } from "react";
import { createContext } from "react";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [studentTitle, setStudentTitle] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editAbleStudent, setEditAbleStudent] = useState(null);

  //handler name
  const handleNameChange = (e) => {
    setStudentTitle(e.target.value);
  };
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
  const editHandler = (student) => {
    setEditMode(true);
    setEditAbleStudent(student);
    setStudentTitle(student.name);
  };
  //make present
  const makePresentHandler = (student) => {
    if (student.isPresent === true || student.isPresent === false) {
      return alert(
        "The student is already in the list.Please use the accidently used button"
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

  const ctxValue = {
    studentTitle,
    setStudentTitle,
    students,
    setStudents,
    editMode,
    setEditMode,
    editAbleStudent,
    setEditAbleStudent,
    submitHandler,
    updateHandler,
    createHandler,
    handleNameChange,
    removeHandler,
    editHandler,
    makePresentHandler,
    makeAbsentHandler,
    toggleHandler,
  };

  return (
    <StudentContext.Provider value={ctxValue}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
