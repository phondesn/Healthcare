import { useEffect, useState } from "react";
import axios from "axios";
import './css/tables.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Header2 from "./header2";
import Footer from './footer';

function AddNewCheckupSchedule() {    
    
    var [chkSch, setChkSch] = useState({physicalExams:"", bloodPressureScreening:"", cholesterolScreening:"",
                                        dentalExam:"", diabetesScreening:"", eyeExam:"", hearingTest:"",
                                        infectiousDiseaseScreening:"", osteoporosisScreening:"", skinExam:"", 
                                        colorectalCancerScreening:"", prostateCancerScreening:"", 
                                        user:{email:sessionStorage.getItem("email")}});

    var history = useHistory();
    var [message, setMessage] = useState("");

    var handleChange = (args) =>
    {
      var copy = {...chkSch}
      copy[args.target.name] = args.target.value;
      setChkSch(copy);
    }

    const addDetails = () =>
    {
        axios.post("http://localhost:8080/user/addchksch", chkSch)
        .then(response=>{
            console.log(response.data);
            console.log(typeof(response.data));
            if(response.data === "Added"){
                setChkSch({
                    physicalExams: "",
                    bloodPressureScreening: "",
                    cholesterolScreening: "",
                    dentalExam: "",
                    diabetesScreening: "",
                    eyeExam: "",
                    hearingTest: "",
                    infectiousDiseaseScreening: "",
                    osteoporosisScreening: "",
                    skinExam: "",
                    colorectalCancerScreening: "",
                    prostateCancerScreening: ""
                    });
                setMessage("Details Added Successfully...");
                setTimeout(() => {history.push('checkupschedule')}, 2000);                
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
        <h2>Add Checkup Schedule</h2>
        <div className="registercontainer">
            <table className='regtable'>
                <tbody>
                    <tr>
                        <td>
                            <label className='label'>Physical Exams :</label>
                        </td>
                        <td>
                            <input
                            type="date"
                            id="physicalExams"
                            name="physicalExams"
                            value={chkSch.physicalExams}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Blood Pressure Screening :</label>
                        </td>
                        <td>
                            <input
                            type="date"
                            id="bloodPressureScreening"
                            name="bloodPressureScreening"
                            value={chkSch.bloodPressureScreening}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Cholesterol Screening :</label>
                        </td>
                        <td>
                            <input
                            type="date"
                            id="cholesterolScreening"
                            name="cholesterolScreening"
                            value={chkSch.cholesterolScreening}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Dental Exam :</label>
                        </td>
                        <td>
                            <input
                            type="date"
                            id="dentalExam"
                            name="dentalExam"
                            value={chkSch.dentalExam}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Diabetes Screening :</label>
                        </td>
                        <td>
                            <input
                            type="date"
                            id="diabetesScreening"
                            name="diabetesScreening"
                            value={chkSch.diabetesScreening}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Eye Exam :</label>
                        </td>
                        <td>
                            <input
                            type="date"
                            id="eyeExam"
                            name="eyeExam"
                            value={chkSch.eyeExam}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Hearing Test :</label>
                        </td>
                        <td>
                            <input
                            type="date"
                            id="hearingTest"
                            name="hearingTest"
                            value={chkSch.hearingTest}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Infectious Disease Screening :</label>
                        </td>
                        <td>
                            <input
                            type="date"
                            id="infectiousDiseaseScreening"
                            name="infectiousDiseaseScreening"
                            value={chkSch.infectiousDiseaseScreening}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Osteoporosis Screening :</label>
                        </td>
                        <td>
                            <input
                            type="date"
                            id="osteoporosisScreening"
                            name="osteoporosisScreening"
                            value={chkSch.osteoporosisScreening}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Skin Exam :</label>
                        </td>
                        <td>
                            <input
                            type="date"
                            id="skinExam"
                            name="skinExam"
                            value={chkSch.skinExam}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Colorectal Cancer Screening :</label>
                        </td>
                        <td>
                            <input
                            type="date"
                            id="colorectalCancerScreening"
                            name="colorectalCancerScreening"
                            value={chkSch.colorectalCancerScreening}
                            onChange={handleChange}
                            required
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='label'>Prostate Cancer Screening :</label>
                        </td>
                        <td>
                            <input
                            type="date"
                            id="prostateCancerScreening"
                            name="prostateCancerScreening"
                            value={chkSch.prostateCancerScreening}
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
            <a href="/checkupschedule">Back</a>
        </div>
      <Footer></Footer>
    </>
    );
}

export default AddNewCheckupSchedule;