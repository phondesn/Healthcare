package com.app.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.FitnessDetails;
import com.app.pojos.Users;

@Repository
public interface FitDetailRepo extends JpaRepository<FitnessDetails, Long> {
	
	List<FitnessDetails> findFitnessDetailsByUser(Users user);
}
