const AbsentStudent = ({ students, toggleHandler }) => {
  //absent list
  const absentList = students.filter((student) => student.isPresent === false);

  return (
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
  );
};

export default AbsentStudent;
