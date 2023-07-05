package com.app.pojos;

import java.time.LocalDate;
import java.util.Set;
import java.util.TreeSet;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users_tbl")
public class Users{

	@Column(name = "first_name", length = 25, nullable = false)
	private String firstName;
	
	@Column(name = "last_name", length = 25, nullable = false)
	private String lastName;
	
	@Id
	@Column(name = "email", length = 25, nullable = false)
	private String email;
	
	@Column(name = "password", length = 25, nullable = false)
	private String password;
	
	@Column(name = "age", nullable = false)
	@Min(value = 65, message = "Minimum age must be 65")
	private int age;
	
	@Column(name = "date_of_birth", length = 15, nullable = false)
	private LocalDate dob;
	
	@Column(name = "mobile_no", length = 10)
	@Size(min = 10, max = 10, message = "Mobile number must be exactly 10 digits")
	private long mobileNo;
	
	@Column(name = "gender", length = 10)
	@Enumerated(EnumType.STRING)
	private Gender gender;

	@JsonIgnoreProperties(value = "user")
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Set<FitnessDetails> fitDetails = new TreeSet<FitnessDetails>();
	
	@JsonIgnoreProperties(value = "user")
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Set<MedicalHistory> medHistory = new TreeSet<MedicalHistory>();
	
	@JsonIgnoreProperties(value = "user")
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Set<MedicineSchedule> medSchedule = new TreeSet<MedicineSchedule>();
	
	@JsonIgnoreProperties(value = "user")
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Set<ExerciseSchedule> exeSchedule = new TreeSet<ExerciseSchedule>();
	
	@JsonIgnoreProperties(value = "user")
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private Set<CheckupSchedule> checkSchedule = new TreeSet<CheckupSchedule>();
	
}
