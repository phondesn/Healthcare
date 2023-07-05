import { useEffect, useState } from "react";
import axios from "axios";
import './css/tables.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Header2 from "./header2";
import Footer from './footer';

function AddNewMedicineSchedule() {
    var [medSch, setMedSch] = useState({morningBeforeMeal:"", morningAfterMeal:"", afternoonBeforeMeal:"",
                                        afternoonAfterMeal:"", eveningBeforeMeal:"", eveningAfterMeal:"",
                                        user:{email:sessionStorage.getItem("email")}});

    var history = useHistory();
    var [message, setMessage] = useState("");

    var handleChange = (args) =>
    {
      var copy = {...medSch}
      copy[args.target.name] = args.target.value;
      setMedSch(copy);
    }

    const addDetails = () =>
    {
        axios.post("http://localhost:8080/user/addmedsch", medSch)
        .then(response=>{
            console.log(response.data);
            console.log(typeof(response.data));
            if(response.data === "Added"){
                setMedSch({
                    morningBeforeMeal: "",
                    morningAfterMeal: "",
                    afternoonBeforeMeal: "",
                    afternoonAfterMeal: "",
                    eveningBeforeMeal: "",
                    eveningAfterMeal: ""
                    });
                setMessage("Details Added Successfully...");
                setTimeout(() => {history.push('medicineschedule')}, 2000);                
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
        <h2>Add Medicine Schedule</h2>
        <div className="registercontainer">
            <table className='regtable'>
                <tbody>
                    <tr>
                        <td>
                            <label className='label'>Morning Before Meal :</label>
                        </td>
                        <td>
                            <input
                            type="text"
                            id="morningBeforeMeal"
                            name="morningBeforeMeal"
                            value={medSch.morningBeforeMeal}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Morning After Meal :</label>
                        </td>
                        <td>
                            <input
                            type="text"
                            id="morningAfterMeal"
                            name="morningAfterMeal"
                            value={medSch.morningAfterMeal}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Afternoon Before Meal :</label>
                        </td>
                        <td>
                            <input
                            type="text"
                            id="afternoonBeforeMeal"
                            name="afternoonBeforeMeal"
                            value={medSch.afternoonBeforeMeal}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Afternoon After Meal :</label>
                        </td>
                        <td>
                            <input
                            type="text"
                            id="afternoonAfterMeal"
                            name="afternoonAfterMeal"
                            value={medSch.afternoonAfterMeal}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Evening Before Meal :</label>
                        </td>
                        <td>
                            <input
                            type="text"
                            id="eveningBeforeMeal"
                            name="eveningBeforeMeal"
                            value={medSch.eveningBeforeMeal}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Evening After Meal :</label>
                        </td>
                        <td>
                            <input
                            type="text"
                            id="eveningAfterMeal"
                            name="eveningAfterMeal"
                            value={medSch.eveningAfterMeal}
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
            <a href="/medicineschedule">Back</a>
        </div>
        <Footer></Footer>
    </>
    );
}

export default AddNewMedicineSchedule;