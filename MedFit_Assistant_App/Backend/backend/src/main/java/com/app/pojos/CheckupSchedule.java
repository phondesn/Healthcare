package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

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
@Table(name = "checkup_schedule")
public class CheckupSchedule extends BaseEntity {
	
	@Column(name = "physical_exams", length = 25, nullable = false)
	private LocalDate physicalExams;
	
	@Column(name = "blood_pressure_screening", length = 25, nullable = false)
	private LocalDate bloodPressureScreening;
	
	@Column(name = "cholesterol_screening", length = 25, nullable = false)
	private LocalDate cholesterolScreening;
	
	@Column(name = "dental_exam", length = 25, nullable = false)
	private LocalDate dentalExam;
	
	@Column(name = "diabetes_screening", length = 25, nullable = false)
	private LocalDate diabetesScreening;
	
	@Column(name = "eye_exam", length = 25, nullable = false)
	private LocalDate eyeExam;
	
	@Column(name = "hearing_test", length = 25, nullable = false)
	private LocalDate hearingTest;
	
	@Column(name = "infectious_disease_screening", length = 25, nullable = false)
	private LocalDate infectiousDiseaseScreening;
	
	@Column(name = "osteoporosis_screening", length = 25, nullable = false)
	private LocalDate osteoporosisScreening;
	
	@Column(name = "skin_exam", length = 25, nullable = false)
	private LocalDate skinExam;
	
	@Column(name = "colorectal_cancer_screening", length = 25, nullable = false)
	private LocalDate colorectalCancerScreening;
	
	@Column(name = "prostate_cancer_screening", length = 25, nullable = false)
	private LocalDate prostateCancerScreening;
	
	@JsonIgnoreProperties(value = "checkSchedule")
	@ManyToOne
	@JoinColumn(name="user_id", nullable = false)
	private Users user;

}
