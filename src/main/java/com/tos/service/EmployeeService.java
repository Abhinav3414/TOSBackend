package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tos.model.Certification;
import com.tos.model.Employee;
import com.tos.model.Feedback;
import com.tos.model.ImprovementArea;
import com.tos.model.Skill;
import com.tos.model.Training;
import com.tos.repository.CertificationRepository;
import com.tos.repository.EmployeeRepository;
import com.tos.repository.FeedbackRepository;
import com.tos.repository.ImprovementAreaRepository;
import com.tos.repository.SkillRepository;
import com.tos.repository.TrainingRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private SkillRepository skillRepository;
	
	@Autowired
	private CertificationRepository certificationRepository;
	
	@Autowired
	private TrainingRepository trainingRepository;
	
	@Autowired
	private FeedbackRepository feedbackRepository;
	
	@Autowired
	private ImprovementAreaRepository improvementAreaRepository;
	
	/* search all employees*/
	public List<Employee> getAllEmployee() {
		return employeeRepository.findAll();
	}
	
	/*to save an employee*/
	public Employee addEmployee(Employee emp) {
		return employeeRepository.save(emp);
	}
	
	/*get an employee by id*/
	public Employee getEmployee(Long empId) {
		return employeeRepository.findOne(empId);
	}

	/*to update an employee*/
	public Employee updateEmployee(Employee emp, long id) {
		if(employeeRepository.findOne(id)==null) {
			return null;
		}
		return employeeRepository.save(emp);
	}
	
	/*delete an employee*/
	public boolean deleteEmployee(Long empId) {
		if(employeeRepository.findOne(empId)==null) {
			return false;
		}
		
		List<Skill> employeeSkills = skillRepository.getSkillByEmployeeId(empId);
		List<Certification> employeeCertifications = certificationRepository.getCertificationByEmployeeId(empId);
		List<Training> employeeTrainings = trainingRepository.getTrainingByEmployeeId(empId);
		List<Feedback> employeeFeedbacks = feedbackRepository.getFeedbackByEmployeeId(empId);
		List<ImprovementArea> employeeImprovementAreas = improvementAreaRepository.getImprovementAreaByEmployeeId(empId);
		
		for (Skill skill : employeeSkills) {
			skillRepository.delete(skill.getId());
		}
		for (Certification certification : employeeCertifications) {
			certificationRepository.delete(certification.getId());
		}
		for (Training training : employeeTrainings) {
			trainingRepository.delete(training.getId());
		}
		for (Feedback feedback : employeeFeedbacks) {
			feedbackRepository.delete(feedback.getId());
		}
		for (ImprovementArea improvementArea : employeeImprovementAreas) {
			improvementAreaRepository.delete(improvementArea.getId());
		}
		
		employeeRepository.delete(empId);
		return true;
	}
	
	
}
