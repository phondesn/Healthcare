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
@Table(name = "medical_history")
public class MedicalHistory extends BaseEntity{

	@Column(name = "current_illnesses", length = 25, nullable = false)
	private String currentIllnesses;
	
	@Column(name = "current_medicines", length = 25, nullable = false)
	private String currentMedicines;
	
	@Column(name = "past_illnesses", length = 25, nullable = false)
	private String pastIllnesses;
	
	@Column(name = "past_medicines", length = 25, nullable = false)
	private String pastMedicines;
	
	@JsonIgnoreProperties(value = "medHistory")
	@ManyToOne
	@JoinColumn(name="user_id", nullable = false)
	private Users user;
	
}
