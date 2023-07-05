package com.app.services;

import java.util.List;

import com.app.pojos.FitnessDetails;

public interface IFitDetailsService {
	
	List<FitnessDetails> findFitdetailsByEmail(String email);

	String addFitnessDetails(FitnessDetails newFitnessDetails);

}
