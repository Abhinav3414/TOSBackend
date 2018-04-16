package com.tos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.Certification;

public interface CertificationRepository extends JpaRepository<Certification, Long> {

	List<Certification> getCertificationByEmployeeId(Long empId);

}
