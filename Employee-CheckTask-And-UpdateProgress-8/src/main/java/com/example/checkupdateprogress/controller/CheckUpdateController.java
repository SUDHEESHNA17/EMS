package com.example.checkupdateprogress.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.checkupdateprogress.model.TaskAssign;
import com.example.checkupdateprogress.service.CheckUpdateService;


@RestController
@RequestMapping("/check")
@CrossOrigin("http://localhost:3000")
public class CheckUpdateController {
	
	@Autowired
	private CheckUpdateService checkUpdateService;

	public CheckUpdateController(CheckUpdateService checkUpdateService) {
		super();
		this.checkUpdateService = checkUpdateService;
	}
	@GetMapping("/task/{taskId}")
	public ResponseEntity<TaskAssign> getByTaskId(@PathVariable("taskId") String taskId){
		return new ResponseEntity<TaskAssign>(checkUpdateService.getByTaskId(taskId),HttpStatus.OK);
		
	}
	@GetMapping("/{email_id}")
	public List<TaskAssign> getAllTasks(@PathVariable("email_id") String email_id){
		return checkUpdateService.getAllTasks(email_id);
	}
	
	@PutMapping("/update/{taskId}")
	public ResponseEntity<TaskAssign> updateProgress(@Valid @RequestBody TaskAssign taskAssign1,@PathVariable("taskId")String taskId) {
		return new ResponseEntity<TaskAssign>(checkUpdateService.updateProgress(taskAssign1,taskId),HttpStatus.OK);
	}
	

}
