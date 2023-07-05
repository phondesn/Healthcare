import Signin from "./signin";
import ProtectedRoute from './protectedroute';
import UserDashboard from "./userdashboard";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Switch } from "react-router-dom/cjs/react-router-dom";import Register from "./register";
import FitnessDetails from "./fitnessdetails";
import ExerciseSchedule from "./exerciseshcedule";
import CheckupSchedule from "./checkupschedule";
import MedicineSchedule from "./medicineschedule";
import MedicalHistory from "./medicalhistory";
import DoctorsAppointment from "./doctorsappointment";
import AddNewMedicineSchedule from "./addnewmedicineschedule";
import AddNewExerciseSchedule from "./addnewexerciseschedule";
import AddNewCheckupSchedule from "./addnewcheckupshedule";
import AddNewFitnessDetails from "./addnewfitnessdetails";
import AddNewMedicalHistory from "./addnewmedicalhistory";

function MainUI() {
    // var location = useLocation();
    
    return ( 
        <div>
            <Switch>
                <Route path='/' exact component={Signin}/>
                <Route path='/signin' exact component={Signin}/>
                <Route path='/register' exact component={Register}/>
                <ProtectedRoute path='/dashboard' exact component={UserDashboard}/>
                <ProtectedRoute path='/fitnessdetails' exact component={FitnessDetails}/>
                <ProtectedRoute path='/medicalhistory' exact component={MedicalHistory}/>
                <ProtectedRoute path='/medicineschedule' exact component={MedicineSchedule}/>
                <ProtectedRoute path='/exerciseshcedule' exact component={ExerciseSchedule}/>
                <ProtectedRoute path='/checkupschedule' exact component={CheckupSchedule}/>
                <ProtectedRoute path='/doctorsappointment' exact component={DoctorsAppointment}/> 
                <ProtectedRoute path='/addfitnessdetails' exact component={AddNewFitnessDetails}/>
                <ProtectedRoute path='/addmedicalhistory' exact component={AddNewMedicalHistory}/>
                <ProtectedRoute path='/addmedicineschedule' exact component={AddNewMedicineSchedule}/>
                <ProtectedRoute path='/addexercieschedule' exact component={AddNewExerciseSchedule}/>
                <ProtectedRoute path='/addcheckupschedule' exact component={AddNewCheckupSchedule}/>
            </Switch>
        </div>
     );
}

export default MainUI;