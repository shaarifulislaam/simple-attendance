import { useContext } from "react";
import { StudentContext } from "../context/Student";

const AllStudentList = () => {
  const ctxValue = useContext(StudentContext);
  const {
    students,

    removeHandler,
    editHandler,
    makePresentHandler,
    makeAbsentHandler,
  } = ctxValue;

  return (
    <div className="list all-student">
      <h2>All Student</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => editHandler(student)}>Edit</button>
            <button onClick={() => removeHandler(student.id)}>Remove</button>
            <button onClick={() => makePresentHandler(student)}>
              Attendence
            </button>
            <button onClick={() => makeAbsentHandler(student)}>Absent</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllStudentList;
