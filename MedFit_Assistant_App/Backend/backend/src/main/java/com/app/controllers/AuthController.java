package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Credentials;
import com.app.pojos.Users;
import com.app.services.IUsersService;

@CrossOrigin
@RestController
@RequestMapping("/login")
public class AuthController {
	
	@Autowired
	IUsersService uservice;
	
	@PostMapping("/authenticate")
	public String authenticate(@RequestBody Credentials cred){
		System.out.println("Credentials are = "+cred.getEmail());
		try {
			Users user = uservice.findUserByEmail(cred.getEmail());
			if (user != null && user.getPassword().equals(cred.getPassword())) {
				System.out.println("Cred inside TRY --> "+cred.getEmail());
	            return "Login successful";
	        } else {
	            return "Invalid credentials";
	        }
		}catch (Exception e) {
			System.out.println("Cred inside CATCH --> "+cred.getEmail());
			return "Invalid Email";
		}
       
	}

}
