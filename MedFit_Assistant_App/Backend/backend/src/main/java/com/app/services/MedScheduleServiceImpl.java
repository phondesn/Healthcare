package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.MedicineSchedule;
import com.app.pojos.Users;
import com.app.repos.MedScheduleRepo;
import com.app.repos.UsersRepo;

@Service
public class MedScheduleServiceImpl implements IMedScheduleService {

	@Autowired
	MedScheduleRepo msrepo;
	
	@Autowired
	UsersRepo urepo;
	
	@Override
	public List<MedicineSchedule> findMedScheduleByEmail(String email) {
		Users user = urepo.findById(email).orElseThrow();
		List<MedicineSchedule> medschedule = msrepo.findMedicineScheduleByUser(user);
		return medschedule;
	}

	@Override
	public String addMedicineSchedule(MedicineSchedule newMedicineSchedule) {
		msrepo.save(newMedicineSchedule);
		return "Added";
	}

}
