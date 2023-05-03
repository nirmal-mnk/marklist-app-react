import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { CLOSE_PROFILE_MODAL } from "../Features/Reducers/ProfileReducer";
function StudentProfile({ studentProfile }) {
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <div className="student-profile-overlay">
      <div className="student-profile-card">
        <button
          type="button"
          className="modal__close"
          onClick={() => dispatch({ type: CLOSE_PROFILE_MODAL })}
        >
          <img src={require("../assets/close_icon.png")} alt="" />
        </button>
        <div className="profile-card-left">
          <div className="profile__img">
            {studentProfile.gender === "Male" ? (
              <img
                src={require("../assets/male_icon.png")}
                alt="Student Profile"
              />
            ) : (
              <img
                src={require("../assets/female_icon.png")}
                alt="Student Profile"
              />
            )}
          </div>
          <h1 className="profile__name">{studentProfile.name}</h1>
          <div className="profile-des">
            <p>
              <span>ID: </span>
              {studentProfile.id}
            </p>
            <p>
              <span>Standard:</span>
              {studentProfile.standard}
            </p>
          </div>
          <div className="profile-actions">
            {/* <button type="button"><img src="" alt=""/></button> */}
          </div>
        </div>
        <div className="profile-card-right">
          <h4>Marks</h4>
          <table className="profile-marks">
            <tbody>
              <tr>
                <td>English</td>
                <td>{studentProfile.english}</td>
              </tr>
              <tr>
                <td>Tamil</td>
                <td>{studentProfile.tamil}</td>
              </tr>
              <tr>
                <td>Maths</td>
                <td>{studentProfile.maths}</td>
              </tr>
              <tr>
                <td>Science</td>
                <td>{studentProfile.science}</td>
              </tr>
              <tr>
                <td className="end__mark">Social Science</td>
                <td className="end__mark">{studentProfile.social_science}</td>
              </tr>
              <tr>
                <td className="total__marks">Total</td>
                <td className="total__marks">{studentProfile.total}</td>
              </tr>
              <tr>
                <td>Average</td>
                <td>{studentProfile.average}</td>
              </tr>
              <tr>
                <td>Grade</td>
                <td>{studentProfile.grade}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>,
    document.getElementById("studentprofile")
  );
}
export default StudentProfile;
