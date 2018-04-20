package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
		return certificationRepository.save(certification);
	}
	
	/*get a certification by id*/
	public Certification getCertification(Long certificationId) {
		return certificationRepository.findOne(certificationId);
	}

	/*to update a certification*/
	public Certification updateCertification(Certification certification, long id) {
		if(certificationRepository.findOne(id)==null) {
			return null;
		}
		return certificationRepository.save(certification);
	}
	
	/*delete a certification*/
	public boolean deleteCertification(Long certificationId) {
		if(certificationRepository.findOne(certificationId)==null) {
			return false;
		}
		certificationRepository.delete(certificationId);
		return true;
	}
}
