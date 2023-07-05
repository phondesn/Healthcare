package com.app.pojos;

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
@Table(name = "medicine_schedule")
public class MedicineSchedule extends BaseEntity{

	@Column(name = "morning_before_meal", length = 25, nullable = false)
	private String morningBeforeMeal;
	
	@Column(name = "morning_after_meal", length = 25, nullable = false)
	private String morningAfterMeal;
	
	@Column(name = "afternoon_before_meal", length = 25, nullable = false)
	private String afternoonBeforeMeal;
	
	@Column(name = "afternoon_after_meal", length = 25, nullable = false)
	private String afternoonAfterMeal;
	
	@Column(name = "evening_before_meal", length = 25, nullable = false)
	private String eveningBeforeMeal;
	
	@Column(name = "evening_after_meal", length = 25, nullable = false)
	private String eveningAfterMeal;
	
	@JsonIgnoreProperties(value = "medSchedule")
	@ManyToOne
	@JoinColumn(name="user_id", nullable = false)
	private Users user;
	
}
