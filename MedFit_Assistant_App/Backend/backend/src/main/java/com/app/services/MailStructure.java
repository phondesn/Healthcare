package com.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailStructure {

	@Autowired
	private JavaMailSender mailSender;
	
	public void sendMail(String sub, String email, String body) {
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setFrom("9udaanproject@gmail.com");
		mail.setTo(email);
		mail.setSubject(sub);
		mail.setText(body);
		
		mailSender.send(mail);
		
		System.out.println("Mail Sent successfully.....");
	}
	
}
