package leaveapplication.controller;



import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.databind.ObjectMapper;

import leaveapplication.model.LeaveApply;
import leaveapplication.model.OnlyStatus;
import leaveapplication.service.LeaveService;
import leaveapplication.service.StatusService;

@RestController
@RequestMapping("/leave")
@CrossOrigin("http://localhost:3000")
public class LeaveController {
	
	@Autowired
	public LeaveService leaveService;
	
	@Autowired
	private StatusService statusservice;

	public LeaveController(LeaveService leaveService) {
		super();
		this.leaveService = leaveService;
	}
	
	
	
//	@GetMapping("/{email_id}")
//	public ResponseEntity<OnlyStatus> getEmployeeByEmailId(@PathVariable("email_id") String email_id){
//		return new ResponseEntity<OnlyStatus>(statusservice.getEmployeeByEmailId(email_id),HttpStatus.OK);
//		
//	}
	
	@GetMapping("/emp/{email_id}")
	public List<LeaveApply> getEmpByEmailId(@PathVariable("email_id") String email_id){
		return leaveService.getEmpByEmailId(email_id);
	}
	
	@PostMapping
	public ResponseEntity<LeaveApply> saveLeave(@RequestBody LeaveApply  leaveApply ){
		return new ResponseEntity<LeaveApply>(leaveService.saveLeave(leaveApply),HttpStatus.CREATED);
		
	}
//	@GetMapping("/{email_id}")
//	public String getEmployeeByEmailId(@PathVariable("email_id") String email_id){
//		
//		String obj= new String(statusservice.getEmployeeByEmailId(email_id));
//		ObjectMapper om=new ObjectMapper();
//		String status=null;
//		String op=null;
//		System.out.println(om);
//		try {
//			status=om.writeValueAsString(obj);
//			String[] s1=status.split(",");
//			System.out.println(s1[4]);
//		     op=s1[4];
//			
//		} catch (Exception e) {
//			System.out.println(e);
//		}
//		return op;
//		
//	}

}
