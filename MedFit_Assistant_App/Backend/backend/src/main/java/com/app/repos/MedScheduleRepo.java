package com.app.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.MedicineSchedule;
import com.app.pojos.Users;

@Repository
public interface MedScheduleRepo extends JpaRepository<MedicineSchedule, Long> {

	List<MedicineSchedule> findMedicineScheduleByUser(Users user);
}
