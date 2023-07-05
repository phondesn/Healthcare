import { useEffect, useState } from "react";
import axios from "axios";
import './css/tables.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Header2 from "./header2";
import Footer from './footer';

function AddNewMedicalHistory() {

    var [medHistory, setMedHistory] = useState({currentIllnesses:"", currentMedicines:"", pastIllnesses:"",
                                        pastMedicines:"", 
                                        user:{email:sessionStorage.getItem("email")}});

    var history = useHistory();
    var [message, setMessage] = useState("");

    var handleChange = (args) =>
    {
      var copy = {...medHistory}
      copy[args.target.name] = args.target.value;
      setMedHistory(copy);
    }

    const addDetails = () =>
    {
        axios.post("http://localhost:8080/user/addmedhistory", medHistory)
        .then(response=>{
            console.log(response.data);
            console.log(typeof(response.data));
            if(response.data === "Added"){
                setMedHistory({
                    currentIllnesses: "",
                    currentMedicines: "",
                    pastIllnesses: "",
                    pastMedicines: ""
                    });
                setMessage("Details Added Successfully...");
                setTimeout(() => {history.push('addmedicalhistory')}, 2000);                
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
        <h2>Add Medical History</h2>
        <div className="registercontainer">
            <table className='regtable'>
                <tbody>
                    <tr>
                        <td>
                            <label className='label'>Current Illnesses :</label>
                        </td>
                        <td>
                            <input
                            type="text"
                            id="currentIllnesses"
                            name="currentIllnesses"
                            value={medHistory.currentIllnesses}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Current Medicines :</label>
                        </td>
                        <td>
                            <input
                            type="text"
                            id="currentMedicines"
                            name="currentMedicines"
                            value={medHistory.currentMedicines}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Past Illnesses :</label>
                        </td>
                        <td>
                            <input
                            type="text"
                            id="pastIllnesses"
                            name="pastIllnesses"
                            value={medHistory.pastIllnesses}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Past Medicines :</label>
                        </td>
                        <td>
                            <input
                            type="text"
                            id="pastMedicines"
                            name="pastMedicines"
                            value={medHistory.pastMedicines}
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
            <a href="/medicalhistory">Back</a>
        </div>
      <Footer></Footer>
    </>
    );
}

export default AddNewMedicalHistory;