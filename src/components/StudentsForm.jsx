import { useContext } from "react";
import { StudentContext } from "../context/Student";

const StudentsForm = () => {
  const ctxValue = useContext(StudentContext);
  const { studentTitle, editMode, submitHandler, handleNameChange } = ctxValue;
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={studentTitle} onChange={handleNameChange} />
        <button>{editMode ? "Update Student" : "Add Student"}</button>
      </form>
    </div>
  );
};

export default StudentsForm;
