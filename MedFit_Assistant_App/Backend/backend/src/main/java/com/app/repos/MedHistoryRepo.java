package com.app.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.MedicalHistory;
import com.app.pojos.Users;

@Repository
public interface MedHistoryRepo extends JpaRepository<MedicalHistory, Long> {

	List<MedicalHistory> findMedicalHistoryByUser(Users user);
}
