package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.CheckupSchedule;
import com.app.pojos.Doctors;
import com.app.pojos.ExerciseSchedule;
import com.app.pojos.FitnessDetails;
import com.app.pojos.MedicalHistory;
import com.app.pojos.MedicineSchedule;
import com.app.pojos.Users;
import com.app.services.ICheckScheduleService;
import com.app.services.IDoctorsService;
import com.app.services.IExerciseService;
import com.app.services.IFitDetailsService;
import com.app.services.IMedHistoryService;
import com.app.services.IMedScheduleService;
import com.app.services.IUsersService;
import com.app.services.MailStructure;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UsersController {

	@Autowired
	IUsersService uservice;
	
	@Autowired
	IFitDetailsService fdservice;
	
	@Autowired
	IMedHistoryService mhservice;
	
	@Autowired
	IMedScheduleService msservice;
	
	@Autowired
	IExerciseService eservice;
	
	@Autowired
	ICheckScheduleService csservice;
	
	@Autowired
	MailStructure mservice;
	
	@Autowired
	IDoctorsService dservice;
	
	
///////////////////////////////	Fetch User details by email
	@PostMapping("/email")
	public Users getUserByEmail(@RequestBody Users user)
	{
		Users u = uservice.findUserByEmail(user.getEmail());
		return u;
	}
	
///////////////////////////////	Add new User details
	@PostMapping("/adduser")
	public String addUser(@RequestBody Users newUser)
	{
		String mesg = uservice.addUser(newUser);
		System.out.println(mesg);
		return mesg;
	}
	
///////////////////////////////	Fetch fitness details of a User by email
	@PostMapping("/fdetails")
	public List<FitnessDetails> getFDetailsByEmail(@RequestBody Users user)
	{
		List<FitnessDetails> fdetails = fdservice.findFitdetailsByEmail(user.getEmail());
		return fdetails;
	}
	
///////////////////////////////	Fetch Medical History details of a User by email
	@PostMapping("/medhistory")
	public List<MedicalHistory> getMedHisByEmail(@RequestBody Users user)
	{
		List<MedicalHistory> medhistory = mhservice.findMedHistoryByEmail(user.getEmail());
		return medhistory;
	}	
	
///////////////////////////////	Fetch Medicine schedule details of a User by email
	@PostMapping("/medsch")
	public List<MedicineSchedule> getMedSchByEmail(@RequestBody Users user)
	{
		List<MedicineSchedule> medsch = msservice.findMedScheduleByEmail(user.getEmail());
		return medsch;
	}
	
///////////////////////////////	Fetch Exercise schedule details of a User by email
	@PostMapping("/exesch")
	public List<ExerciseSchedule> getExeSchByEmail(@RequestBody Users user)
	{
		List<ExerciseSchedule> exesch = eservice.findExerciseScheduleByEmail(user.getEmail());
		return exesch;
	}
	
//////////////////////////////////Fetch CheckUp Schedule of a User by email	
	@PostMapping("/chksch")
	public List<CheckupSchedule> getCheckupSchedule(@RequestBody Users user)
	{
		List<CheckupSchedule> chkSchList = csservice.findCheckScheduleByEmail(user.getEmail());
		return chkSchList;
	}
	
///////////////////////////////	Fetch Doctors list 
	@GetMapping("/docslist")
	public List<Doctors> getAllDoctors()
	{
		List<Doctors> docs = dservice.getAllDoctors();
		return docs;
	}

///////////////////////////////	Add new fitness details of a User by email
	@PostMapping("/addfdetails")
	public String addFDetails(@RequestBody FitnessDetails newFitnessDetails)
	{
		String mesg = fdservice.addFitnessDetails(newFitnessDetails);
		System.out.println(mesg);
		return mesg;
	}
	
///////////////////////////////	Add new Medical History details of a User by email
	@PostMapping("/addmedhistory")
	public String addMedHistory(@RequestBody MedicalHistory newMedicalHistory)
	{
		String mesg = mhservice.addMedicalHistory(newMedicalHistory);
		System.out.println(mesg);
		return mesg;
	}
	
///////////////////////////////	Add new Medicine schedule details of a User by email
	@PostMapping("/addmedsch")
	public String addMedSchedule(@RequestBody MedicineSchedule newMedicineSchedule)
	{
		String mesg = msservice.addMedicineSchedule(newMedicineSchedule);
		System.out.println(mesg);
		return mesg;
	}
	
///////////////////////////////	Add new Exercise schedule details of a User by email
	@PostMapping("/addexesch")
	public String addExeSchedule(@RequestBody ExerciseSchedule newExerciseSchedule)
	{
		String mesg = eservice.addExerciseSchedule(newExerciseSchedule);
		System.out.println(mesg);
		return mesg;
	}
	
///////////////////////////////	Add new CheckUp Schedule of a User by email	
	@PostMapping("/addchksch")
	public String addCheckupSchedule(@RequestBody CheckupSchedule newCheckupSchedule)
	{
		String mesg = csservice.addCheckupSchedule(newCheckupSchedule);
		System.out.println(mesg);
		return mesg;
	}
	
//////////////////////////////// Fetch Doctor's details of a User by full name
	@PostMapping("/docdetails")
	public List<Doctors> findDocByFullName(@RequestBody Doctors doc)
	{
		List<Doctors> docs = dservice.findDocByFullName(doc.getFullName());
		return docs;
	}
	
	@PostMapping("/{email}")
	public String sendMail(@RequestBody String email)
	{
		mservice.sendMail("Physical checkup remainder", email, "Eat healthy food and do some light exercise :)");
		return "Email sent successfully...";
	}
	
	
	// Appoint a doctor
//		@PostMapping("/appointments")
//		public String appointDoctor(@RequestBody Users user,@RequestBody Doctors docs)
//		{
//			Users u =  uservice.findUserByEmail(user.getEmail());
//			System.out.println("appointDoctor");
//			
//			List<Doctors> doc = dservice.findDocByFullName(docs.getFullName());
//			String sub = "Appointment Booked at "+((Doctors) doc).getFullName();
//			String mesg = "Dear "+u.getFirstName()+" "+u.getLastName()+",\n"
//					+ "You have an appointment at "+((Doctors) doc).getFullName()+" after two days "
//							+ "i.e. on "+LocalDate.now().plusDays(2)+ " \n\n\nRemember to show up 15 minutes early.\r\n"
//									+ "Remember to bring follow-up reports."
//					;
//			mservice.sendMail(u.getEmail(), sub, mesg);
//			
//			return "mail Sent";
//			
//		}
	
}
