package com.app.services;

import java.util.List;

import com.app.pojos.ExerciseSchedule;

public interface IExerciseService {

	List<ExerciseSchedule> findExerciseScheduleByEmail(String email);

	String addExerciseSchedule(ExerciseSchedule newExerciseSchedule);
}
