package com.app.services;

import java.util.List;

import com.app.pojos.MedicineSchedule;

public interface IMedScheduleService {

	List<MedicineSchedule> findMedScheduleByEmail(String email);

	String addMedicineSchedule(MedicineSchedule newMedicineSchedule);
}
