const StudentsForm = ({
  students,
  setStudents,
  studentTitle,
  setStudentTitle,
  editMode,
  setEditMode,
  editAbleStudent,
}) => {
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
