import ReactDOM from "react-dom";

function SummaryModal() {
  return ReactDOM.createPortal(
    <div className="summary-modal-overlay">
      <div className="summary-modal-card">
        <button type="button" className="summary-modal__close">
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
            <h1>498</h1>
          </div>
          <div className="summary-des-sub">
            <h3>Average</h3>
            <h1>98%</h1>
          </div>
          <div className="summary-des-sub">
            <h3>Grade</h3>
            <h1>Excellent</h1>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("studentprofile")
  );
}
export default SummaryModal;
