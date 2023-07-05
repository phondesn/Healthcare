import { Route } from "react-router-dom";
import Signin from "./signin";
import UserDashboard from "./userdashboard";
import FitnessDetails from "./fitnessdetails";
import MedicalHistory from "./medicalhistory";
import MedicineSchedule from "./medicineschedule";
import ExerciseSchedule from "./exerciseshcedule";
import CheckupSchedule from "./checkupschedule";
import DoctorsAppointment from "./doctorsappointment";
import AddNewFitnessDetails from "./addnewfitnessdetails";
import AddNewMedicalHistory from "./addnewmedicalhistory";
import AddNewMedicineSchedule from "./addnewmedicineschedule";
import AddNewExerciseSchedule from "./addnewexerciseschedule";
import AddNewCheckupSchedule from "./addnewcheckupshedule";

function ProtectedRoute(props) {

    var email = sessionStorage.getItem("email");

    if(props.path == '/dashboard'){

        if (email!=null) {
            return ( <Route path={props.path} exact component={UserDashboard}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }
    if(props.path == '/fitnessdetails'){

        if (email!=null) {
            return ( <Route path={props.path} exact component={FitnessDetails}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }
    if(props.path == '/medicalhistory'){

        if (email!=null) {
            return ( <Route path={props.path} exact component={MedicalHistory}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }
    if(props.path == '/medicineschedule'){

        if (email!=null) {
            return ( <Route path={props.path} exact component={MedicineSchedule}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }
    if(props.path == '/exerciseshcedule'){

        if (email!=null) {
            return ( <Route path={props.path} exact component={ExerciseSchedule}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }
    if(props.path == '/checkupschedule'){

        if (email!=null) {
            return ( <Route path={props.path} exact component={CheckupSchedule}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }
    if(props.path == '/doctorsappointment'){

        if (email!=null) {
            return ( <Route path={props.path} exact component={DoctorsAppointment}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }
    if(props.path == '/addfitnessdetails'){

        if (email!=null) {
            return ( <Route path={props.path} exact component={AddNewFitnessDetails}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }
    if(props.path == '/addmedicalhistory'){

        if (email!=null) {
            return ( <Route path={props.path} exact component={AddNewMedicalHistory}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }
    if(props.path == '/addmedicineschedule'){

        if (email!=null) {
            return ( <Route path={props.path} exact component={AddNewMedicineSchedule}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }
    if(props.path == '/addexercieschedule'){

        if (email!=null) {
            return ( <Route path={props.path} exact component={AddNewExerciseSchedule}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }
    if(props.path == '/addcheckupschedule'){

        if (email!=null) {
            return ( <Route path={props.path} exact component={AddNewCheckupSchedule}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }

}

export default ProtectedRoute;