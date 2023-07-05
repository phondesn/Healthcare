import { useEffect, useState } from "react";
import axios from "axios";
import './css/tables.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Header2 from "./header2";
import Footer from './footer';

function AddNewFitnessDetails() {
    
    var [fitDetails, setFitDetails] = useState({height:"", weight:"", sugar_level:"", 
                                        systolic_blood_pressure:"", diastolic_blood_pressure:"",
                                        bmi:"", heart_rate:"", last_checked:"", 
                                        user:{email:sessionStorage.getItem("email")}});

    var history = useHistory();
    var [message, setMessage] = useState("");

    var handleChange = (args) =>
    {
      var copy = {...fitDetails}
      copy.bmi = (fitDetails.weight/fitDetails.height/fitDetails.height)*10000;
      copy[args.target.name] = args.target.value;
      console.log("copy --> "+copy);
      setFitDetails(copy);
      console.log("fitDetails --> "+fitDetails);
    }

    const addDetails = () =>
    {
        axios.post("http://localhost:8080/user/addfdetails", fitDetails)
        .then(response=>{
            console.log(response.data);
            console.log(typeof(response.data));
            if(response.data === "Added"){
                setFitDetails({
                    height: "",
                    weight: "",
                    sugar_level: "",
                    blood_pressure: "",
                    heart_rate: "",
                    last_checked: ""
                    });
                setMessage("Details Added Successfully...");
                setTimeout(() => {history.push('fitnessdetails')}, 2000);                
            }
            else{
                setMessage("Unable to add details...Please try again...");
                setTimeout(() => {setMessage('');}, 2000);
            }
        }).catch(error=>{
            console.log("error : "+ error);
        })
    }
    
    return (
        <>
        <Header2></Header2>
        <h2>Add Fitness Details</h2>
        <div className="registercontainer">
            <table className='regtable'>
                <tbody>
                    <tr>
                        <td>
                            <label className='label'>Height (cms) :</label>
                        </td>
                        <td>
                            <input
                            type="number"
                            id="height"
                            name="height"
                            value={fitDetails.height}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Weight (kgs) :</label>
                        </td>
                        <td>
                            <input
                            type="number"
                            id="weight"
                            name="weight"
                            value={fitDetails.weight}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Sugar Level (mg/dL) :</label>
                        </td>
                        <td>
                            <input
                            type="number"
                            id="sugar_level"
                            name="sugar_level"
                            value={fitDetails.sugar_level}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Systolic Blood Pressure (mm Hg) :</label>
                        </td>
                        <td>
                            <input
                            type="number"
                            id="systolic_blood_pressure"
                            name="systolic_blood_pressure"
                            value={fitDetails.systolic_blood_pressure}                            
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Diastolic Blood Pressure (mm Hg) :</label>
                        </td>
                        <td>
                            <input
                            type="number"
                            id="diastolic_blood_pressure"
                            name="diastolic_blood_pressure"
                            value={fitDetails.diastolic_blood_pressure}                            
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Heart Rate (bpm) :</label>
                        </td>
                        <td>
                            <input
                            type="number"
                            id="heart_rate"
                            name="heart_rate"
                            value={fitDetails.heart_rate}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Last Checked :</label>
                        </td>
                        <td>
                            <input
                            type="date"
                            id="last_checked"
                            name="last_checked"
                            value={fitDetails.last_checked}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button type="submit" onClick={addDetails}>Add Details</button>
                            </div>        
                        </td>
                    </tr>
                </tbody>
            </table><br></br>
            <a href="/fitnessdetails">Back</a>
        </div>
      <Footer></Footer>
    </>
    );
}

export default AddNewFitnessDetails;