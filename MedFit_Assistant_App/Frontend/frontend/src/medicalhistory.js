import { useEffect, useState } from "react";
import axios from "axios";
import './css/tables.css';
import './css/signin.css';
import './css/style.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Header2 from "./header2";
import Footer from './footer';

function MedicalHistory() {
  var [users, setUsers] = useState({email:sessionStorage.getItem("email")});
  var [medHistory,setMedHistory] = useState([]);
  var history = useHistory();

  /*-----------------------Fetch Users Details-------------------------- */
  function getUsers() {

    axios.post("http://localhost:8080/user/email", users)
      .then(result => result.data) 
      .then(result => {
        setUsers(result);
      });
  }

 /* -----------------------Fetch Medical Histpry-------------------------- */
  function getMedHistory() {

    axios.post("http://localhost:8080/user/medhistory", users)
      .then(result => result.data) 
      .then(result => {
        setMedHistory(result);
        console.log(result); 
      });
  }

  useEffect(()=>{
    document.title = `HealthCare : Medical History`;
    getUsers();
    getMedHistory();
  },[]);

  const addNewMedicalHistory  = () => {
    history.push('addmedicalhistory');
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

      <h2>  Medical History : </h2>
      {/*-----------------------Fetch Medical Histpry-------------------------- */}
      <div className="container">
        <table className="table" border={2}  text-align="center">
          <thead>
            <tr>
              <th>Current Illnesses</th>
              <th>Current Medicines</th>
              <th>Past Illnesses</th>
              <th>Past Medicines</th>
            </tr>
          </thead>
          <tbody>
          {medHistory.map((mHis) => (
            <tr>
              <td>{mHis.currentIllnesses}</td>
              <td>{mHis.currentMedicines}</td>
              <td>{mHis.pastIllnesses}</td>
              <td>{mHis.pastMedicines}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div> 
      <div>
        <button className="book" type="submit" onClick={addNewMedicalHistory}>Add New Record</button>
      </div><br></br> 
      <div>
        <button className="book" type="submit" onClick={bookAppointment}>Book Appointment</button>
      </div>
      <Footer></Footer>
    </>
  );
}

export default MedicalHistory;
