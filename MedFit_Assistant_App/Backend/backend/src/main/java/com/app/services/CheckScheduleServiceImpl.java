package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.CheckupSchedule;
import com.app.pojos.Users;
import com.app.repos.CheckScheduleRepo;
import com.app.repos.UsersRepo;

@Service
public class CheckScheduleServiceImpl implements ICheckScheduleService {

	@Autowired
	CheckScheduleRepo csrepo;
	
	@Autowired
	UsersRepo urepo;
	
	@Override
	public List<CheckupSchedule> findCheckScheduleByEmail(String email) {
		Users user = urepo.findById(email).orElseThrow();
		List<CheckupSchedule> checkupschedule = csrepo.findCheckupScheduleByUser(user);
		return checkupschedule;
	}
	@Override
	public String addCheckupSchedule(CheckupSchedule newCheckupSchedule) {
		csrepo.save(newCheckupSchedule);
		return "Added";
	}

}
