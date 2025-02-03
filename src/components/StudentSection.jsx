import AbsentStudent from "./AbsentStudent";
import AllStudentList from "./AllStudentList";
import PresentStudents from "./PresentStudents";

const StudentSection = ({
  students,
  setStudents,
  setEditMode,
  setEditAbleStudent,
  setStudentTitle,
}) => {
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
    <div className="student-section">
      <AllStudentList
        students={students}
        setStudents={setStudents}
        setEditMode={setEditMode}
        setEditAbleStudent={setEditAbleStudent}
        setStudentTitle={setStudentTitle}
      />
      <PresentStudents students={students} toggleHandler={toggleHandler} />
      <AbsentStudent students={students} toggleHandler={toggleHandler} />
    </div>
  );
};

export default StudentSection;
