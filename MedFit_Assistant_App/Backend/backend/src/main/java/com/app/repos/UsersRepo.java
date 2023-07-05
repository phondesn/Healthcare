package com.app.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Users;

@Repository
public interface UsersRepo extends JpaRepository<Users, String>{


}