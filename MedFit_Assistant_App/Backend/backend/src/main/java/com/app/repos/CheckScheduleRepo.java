package com.app.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.CheckupSchedule;
import com.app.pojos.Users;

@Repository
public interface CheckScheduleRepo extends JpaRepository<CheckupSchedule, Long> {

	List<CheckupSchedule> findCheckupScheduleByUser(Users user);
}
