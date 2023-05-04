import { useDispatch, useSelector } from "react-redux";
import { OPEN_PROFILE_MODAL } from "../../Features/Actions/ActionType";
import { useEffect } from "react";
import { deleteStudent } from "../../Features/Actions/ActionCreator";
import { useNavigate } from "react-router-dom";
function TableItems({ currentItems, approle }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openProfileModal = (student) => {
    dispatch({ type: OPEN_PROFILE_MODAL, value: student });
  };
  const tableError = useSelector((state) => state.allStudentsState.error);
  const tableDataLoading = useSelector(
    (state) => state.allStudentsState.loading
  );

  const handleStudentEdit = (student) => {
    navigate("/add-student", { state: student });
  };
  const handleStudentDelete = (student) => {
    dispatch(deleteStudent(student));
  };
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
              {approle === "admin" && (
                <>
                  <th></th>
                  <th></th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {!tableDataLoading ? (
              !tableError ? (
                currentItems.map((student, index) => (
                  <tr key={index}>
                    <td
                      className="table-student"
                      onClick={() => openProfileModal(student)}
                    >
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
                    <td onClick={() => openProfileModal(student)}>
                      {student.email !== null ? student.email : "-"}
                    </td>
                    <td onClick={() => openProfileModal(student)}>
                      {student.phone !== null ? student.phone : "-"}
                    </td>
                    <td onClick={() => openProfileModal(student)}>
                      {student.total}
                    </td>
                    <td onClick={() => openProfileModal(student)}>
                      {student.average}
                    </td>
                    <td onClick={() => openProfileModal(student)}>
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
                    {approle === "admin" && (
                      <>
                        <td>
                          <button
                            type="button"
                            className="iconbtn"
                            onClick={() => handleStudentEdit(student)}
                          >
                            <img
                              src={require("../../assets/edit_icon.png")}
                              alt="Edit Icon"
                            />
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="iconbtn"
                            onClick={() => handleStudentDelete(student)}
                          >
                            <img
                              src={require("../../assets/delete_icon.png")}
                              alt="Delete Icon"
                            />
                          </button>
                        </td>
                      </>
                    )}
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
