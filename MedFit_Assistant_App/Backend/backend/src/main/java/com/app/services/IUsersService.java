package com.app.services;

import com.app.pojos.Users;

public interface IUsersService {
	
	Users findUserByEmail(String email);
	
	String addUser(Users user);
}
