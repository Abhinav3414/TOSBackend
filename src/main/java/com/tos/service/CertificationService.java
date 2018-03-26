package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.tos.model.Certification;
import com.tos.repository.CertificationRepository;

@Service
public class CertificationService {
	
	@Autowired
	private CertificationRepository certificationRepository;
	
	/* search all a certifications*/
	public List<Certification> getAllCertification() {
		return certificationRepository.findAll();
	}
	
	/*to save a certification*/
	public Certification addCertification(Certification certification) {
		certificationRepository.save(certification);
		return certificationRepository.findOne(certification.getId());
	}
	
	/*get a certification by id*/
	public Certification getCertification(Long certificationId) {
		return certificationRepository.findOne(certificationId);
	}

	/*to update a certification*/
	public ResponseEntity<Certification> updateCertification(Certification certification, long id) {
		Certification certi=certificationRepository.findOne(id);
		if(certi==null) {
			return ResponseEntity.notFound().build();
		}
		Certification updateCertification=certificationRepository.save(certification);
		return ResponseEntity.ok().body(updateCertification);
	}
	
	/*delete a certification*/
	public Certification deleteCertification(Long certificationId) {
		Certification emp = certificationRepository.findOne(certificationId);
		certificationRepository.delete(certificationId);
		return emp;
	}
}
