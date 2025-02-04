import AbsentStudent from "./AbsentStudent";
import AllStudentList from "./AllStudentList";
import PresentStudents from "./PresentStudents";

const StudentSection = () => {
  return (
    <div className="student-section">
      <AllStudentList />
      <PresentStudents />
      <AbsentStudent />
    </div>
  );
};

export default StudentSection;
