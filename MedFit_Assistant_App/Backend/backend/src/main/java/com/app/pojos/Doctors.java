package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "docs_tbl")
public class Doctors extends BaseEntity{
	
	@Column(name = "full_name", length = 25, nullable = false)
	private String fullName;
	
	@Column(name = "address", length = 100, nullable = false)
	private String address;
	
	
	@Column(name = "mobile_no", length = 15, nullable = false)
	private long mobile;
	
	@Column(name = "specialization", length = 20, nullable = false)
	private String specs;
	
}
