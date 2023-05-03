import CardHeader from "../Components/CardHeader/CardHeader";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Button";
import SummaryModal from "./SummaryModal";

function AddStudent() {
  const addGenderOptions = [
    { value: "male", label: "Boy" },
    { value: "female", label: "Girl" },
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
  return (
    <>
      <CardHeader title="Add New Student" />
      <form>
        <div className="add-student-main">
          <div className="student-detail">
            <h3 className="student__heading">Student Details</h3>
            <div className="student-form-control">
              <div className="student-form-input">
                <Input type="text" label="Name" id="addname" />
              </div>
              <div className="student-form-input">
                <Input type="email" label="Email" id="addemail" />
              </div>
              <div className="student-form-input">
                <Input type="number" label="Ph Number" id="addphonenum" />
              </div>
              <div className="student-form-input">
                <Input
                  type="select"
                  label="Gender"
                  id="addgender"
                  options={addGenderOptions}
                />
              </div>
              <div className="student-form-input">
                <Input
                  type="select"
                  label="Standard"
                  id="addstandard"
                  options={addstandardOptions}
                />
              </div>
            </div>
          </div>
          <div className="student-detail">
            <h3 className="student__heading">Student Marks</h3>
            <div className="student-form-control">
              <div className="student-form-input">
                <Input type="number" label="English" id="englishmark" />
              </div>
              <div className="student-form-input">
                <Input type="number" label="Tamil" id="tamilmark" />
              </div>
              <div className="student-form-input">
                <Input type="number" label="Maths" id="mathsmark" />
              </div>
              <div className="student-form-input">
                <Input type="number" label="Science" id="sciencemark" />
              </div>
              <div className="student-form-input">
                <Input
                  type="number"
                  label="Social Science"
                  id="socialsciencemark"
                />
              </div>
            </div>
          </div>
          <div className="student-detail">
            <h3 className="student__heading">Comments</h3>
            <div className="student-form-control">
              <div className="student-form-input">
                <Input type="textarea" id="comments" />
              </div>
            </div>
          </div>
          <div className="addstudent-actions">
            <Button type="button" label="Cancel" btnstyle="routingbtn" />
            <Button type="button" label="Submit" btnstyle="fillbtn" />
          </div>
        </div>
      </form>
      {/* <SummaryModal /> */}
    </>
  );
}
export default AddStudent;
