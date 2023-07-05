package com.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Users;
import com.app.repos.UsersRepo;

@Service
public class UsersServiceImpl implements IUsersService {

	@Autowired
	UsersRepo urepo;

	//////////////	Fetch User by Email
	@Override
	public Users findUserByEmail(String email) {
		Users user = urepo.findById(email).orElseThrow();
		return user;
	}

	@Override
	public String addUser(Users user) {
		urepo.save(user);
		return "Added";
	}
	
}
