package leaveapplication.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import leaveapplication.model.LeaveApply;
import leaveapplication.model.OnlyStatus;
import leaveapplication.repository.LeaveRepository;
import leaveapplication.service.LeaveService;

@Service
public class LeaveServiceImpl implements LeaveService{
	
	@Autowired
	private LeaveRepository  leaveRepository;
	
	public LeaveServiceImpl(LeaveRepository leaveRepository) {
		super();
		this.leaveRepository = leaveRepository;
		
	}


	@Override
	public LeaveApply saveLeave(LeaveApply leaveApply) {
		// TODO Auto-generated method stub
//		leaveApply.setEmailId(null);
		
		if(leaveApply.getFromDate().isAfter(leaveApply.getToDate())) {
			throw new RuntimeException("leave can't apply ");
		}
		
			leaveApply.setLeaveStatus("pending");
		
		return leaveRepository.save(leaveApply);
	}


	@Override
	public List<LeaveApply> getEmpByEmailId(String email_id) {
		// TODO Auto-generated method stub
		return leaveRepository.findByEmailId(email_id);
	}


//	@Override
//	public OnlyStatus getEmployeeByEmailId(String email_id) {
//		// TODO Auto-generated method stub
//		return leaveRepository.findByEmailIdstatus(email_id);
//	}


	

}
