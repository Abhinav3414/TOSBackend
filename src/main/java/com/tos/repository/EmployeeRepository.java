package com.tos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
