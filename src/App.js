import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "./Custom.css";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import Error404 from "./Pages/Error404";
import Dashboard from "./Pages/Dashboard";
import Marklist from "./Pages/Marklists";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="marklist" element={<Marklist />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
