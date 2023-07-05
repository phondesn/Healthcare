package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.MedicalHistory;
import com.app.pojos.Users;
import com.app.repos.MedHistoryRepo;
import com.app.repos.UsersRepo;

@Service
public class MedHistoryServiceImpl implements IMedHistoryService {

	@Autowired
	MedHistoryRepo mhrepo;
	
	@Autowired
	UsersRepo urepo;
	
	@Override
	public List<MedicalHistory> findMedHistoryByEmail(String email) {
		Users user = urepo.findById(email).orElseThrow();
		List<MedicalHistory> medhistory = mhrepo.findMedicalHistoryByUser(user);
		return medhistory;
	}

	@Override
	public String addMedicalHistory(MedicalHistory newMedicalHistory) {
		mhrepo.save(newMedicalHistory);
		return "Added";
	}

}
