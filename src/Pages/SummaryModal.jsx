import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { CLOSE_SUCCESS_MODAL } from "../Features/Actions/ActionType";

function SummaryModal({ studentResult }) {
  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <div className="summary-modal-overlay">
      <div className="summary-modal-card">
        <button
          type="button"
          className="summary-modal__close"
          onClick={() => dispatch({ type: CLOSE_SUCCESS_MODAL })}
        >
          <img src={require("../assets/close_icon.png")} alt="Close Icon" />
        </button>
        <div className="summary-success">
          <div className="summary-success__img">
            <img src={require("../assets/success.gif")} alt="" />
          </div>
          <h2>Submitted Successfully</h2>
        </div>
        <div className="summary-des">
          <div className="summary-des-sub">
            <h3>Total</h3>
            <h1>{studentResult.total}</h1>
          </div>
          <div className="summary-des-sub">
            <h3>Average</h3>
            <h1>{studentResult.average}%</h1>
          </div>
          <div className="summary-des-sub">
            <h3>Grade</h3>
            <h1>{studentResult.grade}</h1>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("studentprofile")
  );
}
export default SummaryModal;
