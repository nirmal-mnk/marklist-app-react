import ReactDOM from "react-dom";
function StudentProfile() {
  return ReactDOM.createPortal(
    <div className="student-profile-overlay">
      <div className="student-profile-card">
        <div className="profile-card-left">
          <div className="profile__img">
            <img
              src={require("../assets/male_icon.png")}
              alt="Student Profile"
            />
          </div>
          <h1 className="profile__name">Nirmal</h1>
          <div className="profile-des">
            <p>
              <span>ID: </span>7382
            </p>
            <p>
              <span>Standard:</span>10th
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
                <td>98</td>
              </tr>
              <tr>
                <td>Tamil</td>
                <td>98</td>
              </tr>
              <tr>
                <td>Maths</td>
                <td>98</td>
              </tr>
              <tr>
                <td>Science</td>
                <td>98</td>
              </tr>
              <tr>
                <td className="end__mark">Social Science</td>
                <td className="end__mark">98</td>
              </tr>
              <tr>
                <td className="total__marks">Total</td>
                <td className="total__marks">829</td>
              </tr>
              <tr>
                <td>Average</td>
                <td>98</td>
              </tr>
              <tr>
                <td>Grade</td>
                <td>Excellent</td>
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
