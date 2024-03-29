import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import Button from "../Components/Button/Button";

function Layout() {
  return (
    <div>
      <Header />
      <div className="dashboard-main">
        {/* <div className="routing-btn-grp">
          <Button
            type="button"
            label="List All"
            btnstyle="routingbtn"
            handleClick={gotoAddPage}
          />
          <Button
            type="button"
            label="List"
            btnstyle="routingbtn"
            handleClick={gotoAddPage}
          />
          <Button
            type="button"
            label="Add"
            btnstyle="routingbtn"
            handleClick={gotoAddPage}
          />
        </div> */}
        <div className="dashboard-sub">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Layout;
