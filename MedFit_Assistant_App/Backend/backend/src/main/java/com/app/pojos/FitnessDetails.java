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
@Table(name = "fitness_details")
public class FitnessDetails extends BaseEntity {

	@Column(name = "height", nullable = false)
	private double height;
	
	@Column(name = "weight", nullable = false)
	private double weight;
	
	@Column(name = "bmi", nullable = false, precision = 10, scale = 2)
	private double bmi;
	
	@Column(name = "sugar_level", nullable = false)
	private double sugar_level;
	
	@Column(name = "systolic_blood_pressure", nullable = false)
	private double systolic_blood_pressure;
	
	@Column(name = "diastolic_blood_pressure", nullable = false)
	private double diastolic_blood_pressure;

	@Column(name = "heart_rate", nullable = false)
	private int heart_rate;
	
	@Column(name = "last_checked", nullable = false)
	private LocalDate last_checked;

	@JsonIgnoreProperties(value = "fitDetails")
	@ManyToOne
	@JoinColumn(name="user_id", nullable = false)
	private Users user;
	
}
