package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.ExerciseSchedule;
import com.app.pojos.Users;
import com.app.repos.ExerciseRepo;
import com.app.repos.UsersRepo;

@Service
public class ExerciseServiceImpl implements IExerciseService {

	@Autowired
	ExerciseRepo erepo;
	
	@Autowired
	UsersRepo urepo;
	
	@Override
	public List<ExerciseSchedule> findExerciseScheduleByEmail(String email) {
		Users user = urepo.findById(email).orElseThrow();
		List<ExerciseSchedule> exercise = erepo.findExerciseScheduleByUser(user);
		return exercise;
	}

	@Override
	public String addExerciseSchedule(ExerciseSchedule newExerciseSchedule) {
		erepo.save(newExerciseSchedule);
		return "Added";
	}

}
