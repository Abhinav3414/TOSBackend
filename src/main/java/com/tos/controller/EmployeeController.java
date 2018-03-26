package com.tos.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tos.model.Employee;
import com.tos.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:8080/*", maxAge = 3600)
@RestController
@RequestMapping("/tos")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;

	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeService.getAllEmployee();
	}

	@GetMapping(value = "/employees/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public Employee getEmployee(@PathVariable long id) {
		return employeeService.getEmployee(id);
	}
	
	@PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee employee) {
		return employeeService.addEmployee(employee);
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@Valid @RequestBody Employee employee, @PathVariable(value="id") Long id) {
		return employeeService.updateEmployee(employee, id);
	}
	
	@DeleteMapping("/employees/{id}")
	public Employee deleteEmployee(@PathVariable long id) {
		return employeeService.deleteEmployee(id);
	}
	
}
