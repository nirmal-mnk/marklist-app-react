import CardHeader from "../Components/CardHeader/CardHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ALL_STUDENTS } from "../Features/Reducers/marklistReducer";
import { getAllStudents } from "../Features/Actions/ActionCreator";

function Marklist() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.allStudentsState.allStudents);
  console.log(state);

  useEffect(() => {
    dispatch(getAllStudents());
  }, []);
  return (
    <>
      <CardHeader title="Student Marks" />
      <div className="marklist-table">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Total</th>
              <th>Average</th>
              <th>Grade</th>
              <th>Email</th>
              <th>Ph Number</th>
            </tr>
          </thead>
          <tbody>
            {state.map((student, index) => (
              <tr key={index}>
                <td className="table-student">
                  <div className="table-student-sub">
                    <div className="student__profilepic">
                      {student.gender === "Male" ? (
                        <img
                          src={require("../assets/male-profile.png")}
                          alt=""
                        />
                      ) : (
                        <img
                          src={require("../assets/female-profile.png")}
                          alt=""
                        />
                      )}
                    </div>
                    <div className="student__det">
                      <h5>{student.name}</h5>
                      <p>{student.id}</p>
                    </div>
                  </div>
                </td>
                <td>{student.total}</td>
                <td>{student.average}</td>
                <td>{student.grade}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Marklist;
