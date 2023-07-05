import { useEffect, useState } from "react";
import axios from "axios";
import './css/tables.css';
import './css/signin.css';
import './css/style.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Header2 from "./header2";
import Footer from './footer';

function FitnessDetails() {

  var [users, setUsers] = useState({email:sessionStorage.getItem("email")});
  var [fitDetails, setFitDetails] = useState([]);
  var history = useHistory();

  /*-----------------------Fetch Users Details-------------------------- */
  function getUsers() {

    axios.post("http://localhost:8080/user/email", users)
      .then(result => result.data) 
      .then(result => {
        setUsers(result);
      });
  }

  /*-----------------------Fetch Fitness Details-------------------------- */
  function getFitDetails() {

    axios.post("http://localhost:8080/user/fdetails", users)
      .then(result => result.data) 
      .then(result => {
        setFitDetails(result);
      });
  }

  useEffect(()=>{
    document.title = `HealthCare : Fitness Details`;
    getUsers()
    getFitDetails();
  },[]);

  const addNewFitnessDetails = () => {
    history.push('addfitnessdetails');
  }

  const bookAppointment = () => {
    history.push('doctorsappointment');
  }

  const logout = () => {
    sessionStorage.removeItem("email");
    history.push('signin');
  }
 
  const isBloodPressureInRange = (systolic, diastolic) => {
    if (systolic > 140 || diastolic > 90) {
      return 'abnormal';
    } else if (systolic < 90 || diastolic < 60) {
      return 'abnormal';
    } else {
      return 'normal';
    }
  };

  const isHeartRateInRange = (heart_rate) => {
    if (heart_rate >= 75 && heart_rate <= 135) {
      return 'normal';
    } else {
      return 'abnormal';
    }
  };

  const isBMIInRange = (bmi) => {
    if (25 <= bmi && bmi <= 27) {
      return 'normal';
    } else {
      return 'abnormal';
    }
  };

  const isSugarLevelInRange = (sugar_level) => {
    if (70 <= sugar_level && sugar_level <= 140) {
      return 'normal';
    } else {
      return 'abnormal';
    }
  };

  return (
    <>
      <Header2></Header2>
      <h1>{users.firstName}'s Report</h1>

      <h2>  Fitness Details : </h2>
      {/*-----------------------Fetch Fitness Details-------------------------- */}
      <div className="container">
        <table className="table" border={2}  text-align="center">
          <thead>
            <tr>
              <th>Height (cms) </th>
              <th>Weight (kgs) </th>
              <th>BMI (kg/m2) </th>
              <th>Sugar Level (mg/dL) </th>
              <th>Blood Pressure<br/>(mm Hg) </th>
              <th>Heart Rate (bpm) </th>
              <th>Last Checked</th>
            </tr>
          </thead>
          <tbody>
          {fitDetails.map((fDetails) => (
            <tr>
              <td>{fDetails.height}</td>
              <td>{fDetails.weight}</td>
              <td className={isBMIInRange(fDetails.bmi)}>
                {fDetails.bmi}
              </td>
              <td className={isSugarLevelInRange(fDetails.sugar_level)}>
                {fDetails.sugar_level}
              </td>
              <td className={isBloodPressureInRange(fDetails.systolic_blood_pressure, fDetails.diastolic_blood_pressure)}>
                {`${fDetails.systolic_blood_pressure}/${fDetails.diastolic_blood_pressure}`}
              </td>
              <td className={isHeartRateInRange(fDetails.heart_rate)}>
                {fDetails.heart_rate}
              </td>
              <td>{fDetails.last_checked}</td>
            </tr>))}
          </tbody>
        </table>
      </div>
      <div>
        <button className="book" type="submit" onClick={addNewFitnessDetails}>Add New Record</button>
      </div><br></br>
      <div>
        <button className="book" type="submit" onClick={bookAppointment}>Book Appointment</button>
      </div>
      <Footer></Footer>
    </>
  );
}

export default FitnessDetails;
