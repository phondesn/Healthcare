import { useEffect, useState } from "react";
import axios from "axios";
import './css/tables.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Header2 from "./header2";
import Footer from './footer';

function AddNewExerciseSchedule() {

    var [exeSch, setExeSch] = useState({morningWalkDistance:"", eveningWalkDistance:"", caloriesBurnt:"",
                                        user:{email:sessionStorage.getItem("email")}});

    var history = useHistory();
    var [message, setMessage] = useState("");

    var handleChange = (args) =>
    {
      var copy = {...exeSch}
      copy[args.target.name] = args.target.value;
      setExeSch(copy);
    }

    const addDetails = () =>
    {
        console.log(exeSch);
        axios.post("http://localhost:8080/user/addexesch", exeSch)
        .then(response=>{
            console.log(response.data);
            console.log(typeof(response.data));
            if(response.data === "Added"){
                setExeSch({
                    morningWalkDistance: "",
                    eveningWalkDistance: "",
                    caloriesBurnt: ""
                    });
                setMessage("Details Added Successfully...");
                setTimeout(() => {history.push('exerciseshcedule')}, 2000);                
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
        <h2>Add Exercise Shcedule</h2>
        <div className="registercontainer">
            <table className='regtable'>
                <tbody>
                    <tr>
                        <td>
                            <label className='label'>Morning Walk Distance (kms) :</label>
                        </td>
                        <td>
                            <input
                            type="number"
                            id="morningWalkDistance"
                            name="morningWalkDistance"
                            value={exeSch.morningWalkDistance}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Evening Walk Distance (kms) :</label>
                        </td>
                        <td>
                            <input
                            type="number"
                            id="eveningWalkDistance"
                            name="eveningWalkDistance"
                            value={exeSch.eveningWalkDistance}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Calories Burnt (kcal) :</label>
                        </td>
                        <td>
                            <input
                            type="number"
                            id="caloriesBurnt"
                            name="caloriesBurnt"
                            value={exeSch.caloriesBurnt}
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
            <a href="/exerciseshcedule">Back</a>
        </div>
      <Footer></Footer>
    </>
    );
}

export default AddNewExerciseSchedule;