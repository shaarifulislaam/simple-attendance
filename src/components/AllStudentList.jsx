const AllStudentList = ({
  students,
  setStudents,
  setEditMode,
  setEditAbleStudent,
  setStudentTitle,
}) => {
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
