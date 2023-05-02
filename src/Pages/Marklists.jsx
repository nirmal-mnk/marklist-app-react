import CardHeader from "../Components/CardHeader/CardHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllStudents } from "../Features/Actions/ActionCreator";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import StudentProfile from "./StudentProfile";

function Items({ currentItems }) {
  return (
    <>
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
            {currentItems.map((student, index) => (
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
                      <p> Id: {student.id}</p>
                    </div>
                  </div>
                </td>
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
                <td>{student.email !== null ? student.email : "-"}</td>
                <td>{student.phone !== null ? student.phone : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function Marklist({ itemsPerPage }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.allStudentsState.allStudents);
  console.log(state);

  useEffect(() => {
    dispatch(getAllStudents());
  }, []);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = state.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(state.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % state.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <CardHeader title="Student Marks" />
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        className="pagination-btns"
      />
      <StudentProfile />
    </>
  );
}
export default Marklist;
