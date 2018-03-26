package com.tos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.Certification;

public interface CertificationRepository extends JpaRepository<Certification, Long> {

}
