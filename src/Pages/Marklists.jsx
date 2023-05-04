import CardHeader from "../Components/CardHeader/CardHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllStudents } from "../Features/Actions/ActionCreator";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import StudentProfile from "./StudentProfile";
import TableItems from "../Components/TableItems/TableItems";
import { useLocation } from "react-router-dom";

function Marklist({ itemsPerPage }) {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location.forcepage);

  const approle = useSelector((state) => state.roleState.role);
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const state = useSelector((state) => state.allStudentsState.allStudents);
  const profileModal = useSelector(
    (state) => state.profileModalState.toggleProfileModal
  );
  const getStudentData = useSelector(
    (state) => state.profileModalState.studentData
  );
  const searchedStudentData = useSelector(
    (state) => state.searchNameState.searchedStudent
  );
  useEffect(() => {
    setStudents(state);
  }, [state]);
  useEffect(() => {
    setStudents(searchedStudentData);
  }, [searchedStudentData]);

  useEffect(() => {
    dispatch(getAllStudents());
  }, []);
  useEffect(() => {
    if (location.forcepage) {
      setCurrentPage(41);
    } else {
      setCurrentPage(0);
    }
  }, [location.forcepage]);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = students.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(students.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % students.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <CardHeader title="Student Marks" />
      <TableItems currentItems={currentItems} approle={approle} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        forcePage={currentPage}
        renderOnZeroPageCount={null}
        className="pagination-btns"
      />
      {profileModal && <StudentProfile studentProfile={getStudentData} />}
    </>
  );
}
export default Marklist;
