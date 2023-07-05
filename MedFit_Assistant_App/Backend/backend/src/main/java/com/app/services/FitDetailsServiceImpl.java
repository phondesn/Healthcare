package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.FitnessDetails;
import com.app.pojos.Users;
import com.app.repos.FitDetailRepo;
import com.app.repos.UsersRepo;

@Service
public class FitDetailsServiceImpl implements IFitDetailsService {

	@Autowired
	FitDetailRepo fdrepo;
	
	@Autowired
	UsersRepo urepo;

	@Override
	public List<FitnessDetails> findFitdetailsByEmail(String email) {
		Users user = urepo.findById(email).orElseThrow();
		List<FitnessDetails> fitdetails = fdrepo.findFitnessDetailsByUser(user);
		return fitdetails;
	}

	@Override
	public String addFitnessDetails(FitnessDetails newFitnessDetails) {
		fdrepo.save(newFitnessDetails);
		return "Added";
	}
	
	
}
