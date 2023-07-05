import { useEffect, useState } from "react";
import axios from "axios";
import './css/tables.css';
import './css/style.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Header2 from "./header2";
import Footer from './footer';

function DoctorsAppointment() {

    var [users, setUsers] = useState({email:sessionStorage.getItem("email")});
    var [docs, setDocs] = useState([]);
    var history = useHistory();

    /*-----------------------Fetch Doctors List-------------------------- */
    function getDocs() {

    axios.get("http://localhost:8080/user/docslist")
      .then(result => result.data) 
      .then(result => {
        setDocs(result);
        console.log(result); 
      });
    }

    useEffect(()=>{
        document.title = `HealthCare : Doctor's Appointment`;
        getDocs();
    },[]);
    
    const bookAppointment = () => {
        alert('Appointment Booked');
    }

    return(
        <>
            <Header2></Header2>
            <h1>List of doctors</h1>
            <div className="container">
                {/*-----------------------Fetch Doctors List-------------------------- */}
                <table className="table" border={2}  text-align="center">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Specialization</th>
                            <th>Phone No</th>
                            <th>Address</th>
                            <th>Book Appointment</th>
                        </tr>
                    </thead>
                    <tbody>
                    {docs.map((doc) => (
                        <tr>
                        <td>{doc.fullName}</td>
                        <td>{doc.specs}</td>
                        <td>{doc.mobile}</td>
                        <td>{doc.address}</td>
                        <td><button className="book" onClick={bookAppointment}>Book Now</button></td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        <Footer></Footer>
        </>    
    );
}

export default DoctorsAppointment;