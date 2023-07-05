import { useEffect, useState } from "react";
import axios from "axios";
import './css/tables.css';
import './css/signin.css';
import './css/style.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Header2 from "./header2";
import Footer from './footer';

function MedicineSchedule() {
  var [users, setUsers] = useState({email:sessionStorage.getItem("email")});
  var [medSch, setMedSch] = useState([]);
  var history = useHistory();

  /*-----------------------Fetch Users Details-------------------------- */
  function getUsers() {

    axios.post("http://localhost:8080/user/email", users)
      .then(result => result.data) 
      .then(result => {
        setUsers(result);
        console.log(result); 
      });
  }

  /*-----------------------Fetch Medicine Schedule-------------------------- */
  function getMedSch() {

    axios.post("http://localhost:8080/user/medsch", users)
      .then(result => result.data) 
      .then(result => {
        setMedSch(result);
        console.log(result); 
      });
  }

  useEffect(()=>{
    document.title = `HealthCare : Medicine Schedule`;
    getUsers();
    getMedSch();
  },[]);

  const addNewMedicineSchedule = () => {
    history.push('addmedicineschedule');
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

      <h2>  Medicine Schedule : </h2>
      {/*-----------------------Fetch Medicine Schedule-------------------------- */}
      <div className="container">
        <table className="table" border={2}  text-align="center">
          <thead>
            <tr>
              <th>Morning Before Meal</th>
              <th>Morning After Meal</th>
              <th>Afternoon Before Meal</th>
              <th>Afternoon After Meal</th>
              <th>Evening Before Meal</th>
              <th>Evening After Meal</th>
            </tr>
          </thead>
          <tbody>
          {medSch.map((mSch) => (
            <tr>
              <td>{mSch.morningBeforeMeal}</td>
              <td>{mSch.morningAfterMeal}</td>
              <td>{mSch.afternoonBeforeMeal}</td>
              <td>{mSch.afternoonAfterMeal}</td>
              <td>{mSch.eveningBeforeMeal}</td>
              <td>{mSch.eveningAfterMeal}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div>
        <button className="book" type="submit" onClick={addNewMedicineSchedule}>Add New Record</button>
      </div><br></br>
      <div>
        <button className="book" type="submit" onClick={bookAppointment}>Book Appointment</button>
      </div>
    <Footer></Footer>
    </>
  );
}

export default MedicineSchedule;
