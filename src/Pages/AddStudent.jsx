import CardHeader from "../Components/CardHeader/CardHeader";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import SummaryModal from "./SummaryModal";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewStudent,
  updateStudent,
} from "../Features/Actions/ActionCreator";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addNewStudentReducer } from "../Features/Reducers/MarklistReducer";
import { CHANGE_STUDENT } from "../Features/Actions/ActionType";

function AddStudent() {
  const dispatch = useDispatch();
  const addStudentForm = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const editThisStudent = location.state;
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [toggleForm, setToggleForm] = useState(true);
  const studentResult = useSelector(
    (state) => state.addNewStudentState.studentResult
  );
  const studentAdded = useSelector(
    (state) => state.addNewStudentState.studentadded
  );
  const studentUpdated = useSelector(
    (state) => state.updateStudentState.studentUpdated
  );
  useEffect(() => {
    if (studentAdded) {
      // setOpenSuccessModal(true);
      setTimeout(() => {
        // setOpenSuccessModal(false);
        navigate("/marklist", { forcepage: true });
      }, 5000);
    }
  }, [studentAdded]);
  useEffect(() => {
    if (studentUpdated) {
      // setOpenSuccessModal(true);
      setTimeout(() => {
        // setOpenSuccessModal(false);
        navigate("/marklist", { forcepage: true });
      }, 5000);
    }
  }, [studentUpdated]);
  useEffect(() => {
    return () => {
      dispatch({ type: CHANGE_STUDENT });
    };
  }, []);
  useEffect(() => {
    if (editThisStudent) {
      setToggleForm(false);
      Object.entries(editThisStudent).forEach(([name, value]) =>
        addStudentForm.setValue(name, value)
      );
    }
  }, [editThisStudent]);
  const addGenderOptions = [
    { value: "Male", label: "Boy" },
    { value: "Female", label: "Girl" },
  ];
  const addstandardOptions = [
    { value: 4, label: "4th Standard" },
    { value: 5, label: "5th Standard" },
    { value: 6, label: "6th Standard" },
    { value: 7, label: "7th Standard" },
    { value: 8, label: "8th Standard" },
    { value: 9, label: "9th Standard" },
    { value: 10, label: "10th Standard" },
  ];
  const getStudentFormData = (data) => {
    const total =
      Number(data.english) +
      Number(data.tamil) +
      Number(data.maths) +
      Number(data.science) +
      Number(data.social_science);
    const average = total / 5;
    let grade;
    if (average > 95) {
      grade = "Excellent";
    } else if (average < 95 && average > 85) {
      grade = "Very Good";
    } else if (average < 85 && average > 65) {
      grade = "Good";
    } else if (average < 65 && average > 35) {
      grade = "Ok";
    } else {
      grade = "Fair & Fail";
    }
    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      gender: data.gender,
      standard: data.standard,
      english: data.english,
      tamil: data.tamil,
      maths: data.maths,
      science: data.science,
      social_science: data.social_science,
      total: total,
      average: average,
      grade: grade,
      comments: data.comments,
    };
    if (toggleForm) {
      dispatch(addNewStudent(payload));
    } else {
      dispatch(updateStudent(payload, editThisStudent));
    }
    // addStudentForm.reset();
  };
  return (
    <>
      <CardHeader
        title={toggleForm ? "Add New Student" : "Update Student Record"}
      />
      <form
        onSubmit={addStudentForm.handleSubmit((data) =>
          getStudentFormData(data)
        )}
      >
        <div className="add-student-main">
          <div className="student-detail">
            <h3 className="student__heading">Student Details</h3>
            <div className="student-form-control">
              <div className="student-form-input">
                <Input
                  type="text"
                  label="Name"
                  id="name"
                  registerHandle={addStudentForm.register("name", {
                    required: "please enter the Student Name",
                  })}
                  error={
                    addStudentForm.formState.errors?.name &&
                    addStudentForm.formState.errors.name.message
                  }
                />
              </div>
              <div className="student-form-input">
                <Input
                  type="email"
                  label="Email"
                  id="email"
                  registerHandle={addStudentForm.register("email", {
                    required: "please enter the Email",
                  })}
                  error={
                    addStudentForm.formState.errors?.email &&
                    addStudentForm.formState.errors.email.message
                  }
                />
              </div>
              <div className="student-form-input">
                <Input
                  type="number"
                  label="Ph Number"
                  id="phone"
                  registerHandle={addStudentForm.register("phone", {
                    required: "please enter the Phone Number",
                  })}
                  error={
                    addStudentForm.formState.errors?.phone &&
                    addStudentForm.formState.errors.phone.message
                  }
                />
              </div>
              <div className="student-form-input">
                <Input
                  type="select"
                  label="Gender"
                  id="gender"
                  options={addGenderOptions}
                  registerHandle={addStudentForm.register("gender", {
                    required: "please select the Gender",
                  })}
                  error={
                    addStudentForm.formState.errors?.gender &&
                    addStudentForm.formState.errors.gender.message
                  }
                />
              </div>
              <div className="student-form-input">
                <Input
                  type="select"
                  label="Standard"
                  id="standard"
                  options={addstandardOptions}
                  registerHandle={addStudentForm.register("standard", {
                    required: "please select the Gender",
                  })}
                  error={
                    addStudentForm.formState.errors?.standard &&
                    addStudentForm.formState.errors.standard.message
                  }
                />
              </div>
            </div>
          </div>
          <div className="student-detail">
            <h3 className="student__heading">Student Marks</h3>
            <div className="student-form-control">
              <div className="student-form-input">
                <Input
                  type="number"
                  label="English"
                  id="english"
                  registerHandle={addStudentForm.register("english", {
                    required: "please enter the English Mark",
                  })}
                  error={
                    addStudentForm.formState.errors?.english &&
                    addStudentForm.formState.errors.english.message
                  }
                />
              </div>
              <div className="student-form-input">
                <Input
                  type="number"
                  label="Tamil"
                  id="tamil"
                  registerHandle={addStudentForm.register("tamil", {
                    required: "please enter the Tamil Mark",
                  })}
                  error={
                    addStudentForm.formState.errors?.tamil &&
                    addStudentForm.formState.errors.tamil.message
                  }
                />
              </div>
              <div className="student-form-input">
                <Input
                  type="number"
                  label="Maths"
                  id="maths"
                  registerHandle={addStudentForm.register("maths", {
                    required: "please enter the Maths Mark",
                  })}
                  error={
                    addStudentForm.formState.errors?.maths &&
                    addStudentForm.formState.errors.maths.message
                  }
                />
              </div>
              <div className="student-form-input">
                <Input
                  type="number"
                  label="Science"
                  id="science"
                  registerHandle={addStudentForm.register("science", {
                    required: "please enter the Science Mark",
                  })}
                  error={
                    addStudentForm.formState.errors?.science &&
                    addStudentForm.formState.errors.science.message
                  }
                />
              </div>
              <div className="student-form-input">
                <Input
                  type="number"
                  label="Social Science"
                  id="social_science"
                  registerHandle={addStudentForm.register("social_science", {
                    required: "please enter the Social Science Mark",
                  })}
                  error={
                    addStudentForm.formState.errors?.social_science &&
                    addStudentForm.formState.errors.social_science.message
                  }
                />
              </div>
            </div>
          </div>
          <div className="student-detail">
            <h3 className="student__heading">Comments</h3>
            <div className="student-form-control">
              <div className="student-form-input">
                <Input
                  type="textarea"
                  id="comments"
                  registerHandle={addStudentForm.register("comments", {
                    required: "please enter the Comments",
                  })}
                  error={
                    addStudentForm.formState.errors?.comments &&
                    addStudentForm.formState.errors.comments.message
                  }
                />
              </div>
            </div>
          </div>
          <div className="addstudent-actions">
            <Button type="button" label="Cancel" btnstyle="routingbtn" />
            <Button
              type="submit"
              label={toggleForm ? "Submit" : "Update"}
              btnstyle="fillbtn"
            />
          </div>
        </div>
      </form>
      {openSuccessModal && <SummaryModal studentResult={studentResult} />}
    </>
  );
}
export default AddStudent;
