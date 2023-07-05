package com.app.services;

import java.util.List;

import com.app.pojos.CheckupSchedule;

public interface ICheckScheduleService {

	List<CheckupSchedule> findCheckScheduleByEmail(String email);

	String addCheckupSchedule(CheckupSchedule newCheckupSchedule);
}
