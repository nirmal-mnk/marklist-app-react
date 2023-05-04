import { useNavigate } from "react-router-dom";

function Error404() {
  const navigated = useNavigate();
  setTimeout(() => {
    navigated("/login");
  }, 5000);
  return (
    <div className="error-page">
      <div className="error__img">
        <img src={require("../assets/404_notfound.png")} alt="404 Not found" />
      </div>
    </div>
  );
}
export default Error404;
