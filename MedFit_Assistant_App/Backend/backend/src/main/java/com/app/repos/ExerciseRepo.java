package com.app.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.ExerciseSchedule;
import com.app.pojos.Users;

@Repository
public interface ExerciseRepo extends JpaRepository<ExerciseSchedule, Long> {

	List<ExerciseSchedule> findExerciseScheduleByUser(Users user);
}
