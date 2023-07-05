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
@Table(name = "exercise_schedule")
public class ExerciseSchedule extends BaseEntity{

	@Column(name = "morning_walk_distance", length = 25, nullable = false)
	private float morningWalkDistance;
	
	@Column(name = "evening_walk_distance ", length = 25, nullable = false)
	private float eveningWalkDistance;
	
	@Column(name = "calories_burnt ", length = 25, nullable = false)
	private float caloriesBurnt ;
	
	@JsonIgnoreProperties(value = "exeSchedule")
	@ManyToOne
	@JoinColumn(name="user_id", nullable = false)
	private Users user;
	
}
