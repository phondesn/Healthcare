package com.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Doctors;
import com.app.repos.DoctorsRepo;

@Service
public class DoctorsServiceImpl implements IDoctorsService {

	@Autowired
	DoctorsRepo drepo;

///////////////////	Fetch Doctor by Full Name
	@Override
	public List<Doctors> findDocByFullName(String fullName) {
		List<Doctors> docs = drepo.findDoctorsByFullName(fullName);
		return docs;
	}

///////////////////	Fetch Doctors list
	@Override
	public List<Doctors> getAllDoctors() {
		List<Doctors> docslist = drepo.findAll();
		return docslist;
	}
	
}
