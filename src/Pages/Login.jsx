import RoleBtn from "../Components/RoleBtn/RoleBtn";
import { useState } from "react";
import Button from "../Components/Button/Button";
import Input from "../Components/Input/Input";
import { useForm } from "react-hook-form";

function Login() {
  const [role, setRole] = useState("student");

  const standardOptions = [
    { value: 4, label: "4th Standard" },
    { value: 5, label: "5th Standard" },
    { value: 6, label: "6th Standard" },
    { value: 7, label: "7th Standard" },
    { value: 8, label: "8th Standard" },
    { value: 9, label: "9th Standard" },
    { value: 10, label: "10th Standard" },
  ];
  const studentForm = useForm({
    defaultValues: { studentname: "Nirmal", studentstandard: 10 },
  });
  const adminForm = useForm({
    defaultValues: { adminname: "Maharaja", adminpassword: "Maharaja00" },
  });
  const getRole = (data) => {
    setRole(data);
    studentForm.reset();
    adminForm.reset();
  };

  return (
    <div className="login-main">
      <div className="login-head">
        <h2 className="login__heading">Select Your Role</h2>
        <RoleBtn getRole={getRole} />
      </div>
      {role === "student" ? (
        <div className="login-card">
          <div className="login-card-left">
            <div className="login-student__image">
              <img src="/assets/login-students.jpg" alt="Students Image" />
            </div>
          </div>
          <div className="login-card-right">
            <div className="login-content">
              <h3 className="login-content__heading">Welcome Back!</h3>
              <form
                onSubmit={studentForm.handleSubmit((data) => {
                  console.log(data);
                })}
              >
                <Input
                  type="text"
                  label="Name"
                  id="studentname"
                  registerHandle={studentForm.register("studentname", {
                    required: "please enter the studentname",
                  })}
                  error={
                    studentForm.formState.errors?.studentname &&
                    studentForm.formState.errors.studentname.message
                  }
                />
                <Input
                  type="select"
                  label="Standard"
                  id="studentstandard"
                  options={standardOptions}
                  registerHandle={studentForm.register("studentstandard", {
                    required: "please enter the studentstandard",
                  })}
                  error={
                    studentForm.formState.errors?.studentstandard &&
                    studentForm.formState.errors.studentstandard.message
                  }
                />
                <div className="login-actions">
                  <Button type="submit" label="Login" btnstyle="loginbtn" />
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="login-card">
          <div className="login-card-left">
            <div className="login-student__image">
              <img src="/assets/login-admin.jpg" alt="Admin Image" />
            </div>
          </div>
          <div className="login-card-right">
            <div className="login-content">
              <h3 className="login-content__heading">Welcome Back!</h3>
              <form
                onSubmit={adminForm.handleSubmit((data) => {
                  console.log(data);
                })}
              >
                <Input
                  type="text"
                  label="Name"
                  id="adminname"
                  registerHandle={adminForm.register("adminname", {
                    required: "please enter the adminname",
                  })}
                  error={
                    adminForm.formState.errors?.adminname &&
                    adminForm.formState.errors.adminname.message
                  }
                />
                <Input
                  type="password"
                  label="Password"
                  id="adminpassword"
                  registerHandle={adminForm.register("adminpassword", {
                    required: "please enter the adminpassword",
                  })}
                  error={
                    adminForm.formState.errors?.adminpassword &&
                    adminForm.formState.errors.adminpassword.message
                  }
                />
                <div className="login-actions">
                  <Button type="submit" label="Login" btnstyle="loginbtn" />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Login;
