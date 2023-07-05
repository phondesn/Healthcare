package com.app.services;

import java.util.List;

import com.app.pojos.Doctors;

public interface IDoctorsService {
	
	List<Doctors> getAllDoctors();
	List<Doctors> findDocByFullName(String fullName);

}
