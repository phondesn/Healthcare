package com.app.services;

import java.util.List;

import com.app.pojos.MedicalHistory;

public interface IMedHistoryService {

	List<MedicalHistory> findMedHistoryByEmail(String email);

	String addMedicalHistory(MedicalHistory newMedicalHistory);
}
