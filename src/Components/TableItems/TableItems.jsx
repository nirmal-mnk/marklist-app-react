import { useDispatch, useSelector } from "react-redux";
import { OPEN_PROFILE_MODAL } from "../../Features/Reducers/ProfileReducer";
import { useEffect } from "react";
function TableItems({ currentItems }) {
  const dispatch = useDispatch();
  const openProfileModal = (student) => {
    console.log(student);
    dispatch({ type: OPEN_PROFILE_MODAL, value: student });
  };
  const tableError = useSelector((state) => state.allStudentsState.error);
  const tableDataLoading = useSelector(
    (state) => state.allStudentsState.loading
  );

  return (
    <>
      <div className="marklist-table">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Email</th>
              <th>Ph Number</th>
              <th>Total</th>
              <th>Average</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {!tableDataLoading ? (
              !tableError ? (
                currentItems.map((student, index) => (
                  <tr key={index} onClick={() => openProfileModal(student)}>
                    <td className="table-student">
                      <div className="table-student-sub">
                        <div className="student__profilepic">
                          {student.gender === "Male" ? (
                            <img
                              src={require("../../assets/male-profile.png")}
                              alt=""
                            />
                          ) : (
                            <img
                              src={require("../../assets/female-profile.png")}
                              alt=""
                            />
                          )}
                        </div>
                        <div className="student__det">
                          <h5>{student.name}</h5>
                          <p> Id: {student.id}</p>
                        </div>
                      </div>
                    </td>
                    <td>{student.email !== null ? student.email : "-"}</td>
                    <td>{student.phone !== null ? student.phone : "-"}</td>
                    <td>{student.total}</td>
                    <td>{student.average}</td>
                    <td>
                      {student.grade === "Excellent" ? (
                        <div className="grade excellent">
                          <p>{student.grade}</p>
                        </div>
                      ) : student.grade === "Very Good" ? (
                        <div className="grade verygood">
                          <p>{student.grade}</p>
                        </div>
                      ) : student.grade === "Good" ? (
                        <div className="grade good">
                          <p>{student.grade}</p>
                        </div>
                      ) : student.grade === "Ok" ? (
                        <div className="grade ok">
                          <p>{student.grade}</p>
                        </div>
                      ) : (
                        <div className="grade fairfail">
                          <p>{student.grade}</p>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Failed to Fetch Student's Record</td>
                </tr>
              )
            ) : (
              <tr>
                <td colSpan="6">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default TableItems;
