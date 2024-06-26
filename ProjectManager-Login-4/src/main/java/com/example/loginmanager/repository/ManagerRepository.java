package com.example.loginmanager.repository;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.example.loginmanager.model.AuthenticationRequest;



@Repository
public class ManagerRepository {
	  @Autowired
		private JdbcTemplate temp;
		public UserDetails loadByusername(String email_id) {
			
			String sql="select * from manager where email_id=?";
			
			AuthenticationRequest auth =temp.queryForObject(sql, new Object[] {email_id},new AuthMapper());
			return new User(auth.getEmailId() ,auth.getPassword(),new ArrayList<>());
		}
}
