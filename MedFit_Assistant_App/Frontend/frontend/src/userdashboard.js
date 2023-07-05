import { useEffect, useState } from "react";
import axios from "axios";
import './css/tables.css';
import './css/style.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Header2 from "./header2";
import Footer from './footer';

function UserDashboard() {
  var [users, setUsers] = useState({email:sessionStorage.getItem("email")});
  var history = useHistory();

  /*-----------------------Fetch Users Details-------------------------- */
  function getUsers() {

    axios.post("http://localhost:8080/user/email", users)
      .then(result => result.data) 
      .then(result => {
        setUsers(result);
      });
  }

  useEffect(()=>{
    document.title = `HealthCare : Dashboard`;
    getUsers();
  },[]);

  const goToFitnessDetails = () => {
    history.push('fitnessdetails');
  }

  const goToMedicalHistory = () => {
    history.push('medicalhistory');
  }

  const goToMedicineSchedule = () => {
    history.push('medicineschedule');
  }

  const goToExerciseSchedule = () => {
    history.push('exerciseshcedule');
  }

  const goToCheckupSchedule = () => {
    history.push('checkupschedule');
  }

  const bookAppointment = () => {
    history.push('doctorsappointment');
  }
 
  return (
    <>
      <Header2></Header2>
      <h1>{users.firstName}'s Report</h1>
      <div className="container">
        {/*-----------------------Fetch Users Details-------------------------- */}
        <table className="table" border={2}  text-align="center">
          <thead>
            <tr>
              <th>Personal Details </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{fontWeight: 600}}>First Name</td>
              <td>{users.firstName}</td>
            </tr><tr>
              <td style={{fontWeight: 600}}>Last Name</td>
              <td>{users.lastName}</td>
            </tr><tr>
              <td style={{fontWeight: 600}}>Email</td>
              <td>{users.email}</td>
            </tr><tr>
              <td style={{fontWeight: 600}}>Age</td>
              <td>{users.age}</td>
            </tr><tr>
              <td style={{fontWeight: 600}}>Gender</td>
              <td>{users.gender}</td>
            </tr><tr>
              <td style={{fontWeight: 600}}>Mobile No</td>
              <td>{users.mobileNo}</td>
            </tr><tr>
              <td style={{fontWeight: 600}}>DOB</td>
              <td>{users.dob}</td>
            </tr>
          </tbody>
        </table>
        <div className="cardBox">
          <div className="cards" onClick={goToFitnessDetails}>
              <div>
                  <div className="cardName">Fitness Details</div>
              </div>
              {/* <div className="boxicon"><ion-icon name="eye"></ion-icon></div> */}
          </div>
          <div className="cards" onClick={goToMedicalHistory}>
              <div>
                  <div className="cardName">Medical History</div>
              </div>
              {/* <div className="boxicon"><ion-icon name="chatbubble-ellipses"></ion-icon></div> */}
          </div>
          <div className="cards" onClick={goToMedicineSchedule}>
              <div>
                  <div className="cardName">Medicine Shcedule</div>
              </div>
              {/* <div className="boxicon"><ion-icon name="cart"></ion-icon></i></div> */}
          </div>
          <div className="cards" onClick={goToExerciseSchedule}>
              <div>
                  <div className="cardName">Exercise Shcedule</div>
              </div>
              {/* <div className="boxicon"><ion-icon name="card"></ion-icon></div> */}
          </div>
          <div className="cards" onClick={goToCheckupSchedule}>
              <div>
                  <div className="cardName">CheckUp Shcedule</div>
              </div>
              {/* <div className="boxicon"><ion-icon name="card"></ion-icon></div> */}
          </div>
          <div className="cards" onClick={bookAppointment}>
              <div>
                  <div className="cardName">Book Appointment</div>
              </div>
              {/* <div className="boxicon"><ion-icon name="card"></ion-icon></div> */}
          </div>
        </div>
      </div>
        <Footer></Footer>
    </>
  );
}

export default UserDashboard;
