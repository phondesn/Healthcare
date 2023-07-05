import { useEffect, useState } from "react";
import axios from "axios";
import './css/tables.css';
import './css/signin.css';
import './css/style.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Header2 from "./header2";
import Footer from './footer';

function CheckupSchedule() {
  var [users, setUsers] = useState({email:sessionStorage.getItem("email")});
  var [chkSch, setChkSch] = useState([]);
  var history = useHistory();

  /*-----------------------Fetch Users Details-------------------------- */
  function getUsers() {

    axios.post("http://localhost:8080/user/email", users)
      .then(result => result.data) 
      .then(result => {
        setUsers(result);
      });
  }

  /*-------------------------Fetch Check Schedule-------------------------- */
  function getChkSch() {
    debugger;
    axios.post("http://localhost:8080/user/chksch", users)
      .then(result => result.data) 
      .then(result => {
        console.log("result : "+result); 
        setChkSch(result);
        
      });
  }

  useEffect(()=>{
    document.title = `HealthCare : CheckUp Schedule`;
    getUsers();
    getChkSch();
  },[]);

  const addNewCheckupSchedule = () => {
    history.push('addcheckupschedule');
  }

  const bookAppointment = () => {
    history.push('doctorsappointment');
  }

  const logout = () => {
    sessionStorage.removeItem("email");
    history.push('signin');
  }
 
  return (
    <>
      <Header2></Header2>
      <h1>{users.firstName}'s Report</h1>
      <h2>  Checkup Schedule : </h2>
      {/*-----------------------Fetch Check Schedule-------------------------- */}
      <div className="Checkupcontainer">
        <table className="table" border={2}  text-align="center">
          <thead>
            <tr>
              <th>Physical Exams</th>
              <th>Blood Pressure Screening</th>
              <th>Cholesterol Screening</th>
              <th>Dental Exam</th>
              <th>Diabetes Screening</th>
              <th>Eye Exam</th>
              <th>Hearing Test</th>
              <th>Infectious Disease Screening</th>
              <th>Osteoporosis Screening</th>
              <th>Skin Exam</th>
              <th>Colorectal Cancer Screening</th>
              <th>Prostate Cancer Screening</th>
            </tr>
          </thead>
          <tbody>
          {chkSch.map((cSch) => (
            <tr>
              <td>{cSch.physicalExams}</td>
              <td>{cSch.bloodPressureScreening}</td>
              <td>{cSch.cholesterolScreening}</td>
              <td>{cSch.dentalExam}</td>
              <td>{cSch.diabetesScreening}</td>
              <td>{cSch.eyeExam}</td>
              <td>{cSch.hearingTest}</td>
              <td>{cSch.infectiousDiseaseScreening}</td>
              <td>{cSch.osteoporosisScreening}</td>
              <td>{cSch.skinExam}</td>
              <td>{cSch.colorectalCancerScreening}</td>
              <td>{cSch.prostateCancerScreening}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>   
      <div>
        <button className="book" type="submit" onClick={addNewCheckupSchedule}>Add New Record</button>
      </div><br></br> 
      <div>
        <button className="book" type="submit" onClick={bookAppointment}>Book Appointment</button>
      </div>
      <Footer></Footer>
    </>
  );
}

export default CheckupSchedule;
