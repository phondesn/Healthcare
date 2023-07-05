package com.app.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Doctors;

@Repository
public interface DoctorsRepo extends JpaRepository<Doctors, Long>{


	List<Doctors> findDoctorsByFullName(String fullName);

}