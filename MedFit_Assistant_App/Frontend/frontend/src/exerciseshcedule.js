import { useEffect, useState } from "react";
import axios from "axios";
import './css/tables.css';
import './css/signin.css';
import './css/style.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Header2 from "./header2";
import Footer from './footer';

function ExerciseSchedule() {
  var [users, setUsers] = useState({email:sessionStorage.getItem("email")});
  var [exeSch, setExeSch] = useState([]);
  var history = useHistory();

  console.log("Users dashboard : "+users.email);

  /*-----------------------Fetch Users Details-------------------------- */
  function getUsers() {

    axios.post("http://localhost:8080/user/email", users)
      .then(result => result.data) 
      .then(result => {
        setUsers(result);
      });
  }

  /*-----------------------Fetch Exercise Schedule-------------------------- */
  function getExeSch() {

    axios.post("http://localhost:8080/user/exesch", users)
      .then(result => result.data) 
      .then(result => {
        setExeSch(result);
      });
  }
  useEffect(()=>{
    document.title = `HealthCare : Exercise Schedule`;
    getUsers();
    getExeSch();
  },[]);

  const addNewExerciseSchedule  = () => {
    history.push('addexercieschedule');
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
      <h2>  Exercise Schedule : </h2>
      {/*-----------------------Fetch Exercise Schedule-------------------------- */}
      <div className="container">
        <table className="table" border={2}  text-align="center">
          <thead>
            <tr>
              <th>Morning Walk Distance<br/>(kms)</th>
              <th>Evening Walk Distance<br/>(kms)</th>
              <th>Calories Burnt<br/>(kcal)</th>
            </tr>
          </thead>
          <tbody>
          {exeSch.map((eSch) => (
            <tr>
              <td>{eSch.morningWalkDistance}</td>
              <td>{eSch.eveningWalkDistance}</td>
              <td>{eSch.caloriesBurnt}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>   
      <div>
        <button className="book" type="submit" onClick={addNewExerciseSchedule}>Add New Record</button>
      </div><br></br> 
      <div>
        <button className="book" type="submit" onClick={bookAppointment}>Book Appointment</button>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ExerciseSchedule;
