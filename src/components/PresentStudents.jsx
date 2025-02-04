import { useContext } from "react";
import { StudentContext } from "../context/Student";

const PresentStudents = () => {
  const ctxValue = useContext(StudentContext);
  const { students, toggleHandler } = ctxValue;
  //present list
  const presentList = students.filter((student) => student.isPresent === true);

  return (
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
  );
};

export default PresentStudents;
