package com.tos.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tos.model.Certification;
import com.tos.service.CertificationService;

@RestController
@RequestMapping("/tos")
public class CertificationController {
	
	@Autowired
	private CertificationService certificationService;

	@GetMapping("/certifications")
	public List<Certification> getAllCertification(){
		return certificationService.getAllCertification();
	}
	
	@GetMapping("/certifications/{id}")
	public Certification getCertification(@PathVariable long id) {
		return certificationService.getCertification(id);
	}
	
	@PostMapping("/certifications")
	public ResponseEntity<Certification> addCertification(@RequestBody Certification certification) {
		Certification certi = certificationService.addCertification(certification);
		if(certi==null) {
			return new ResponseEntity<Certification>(certi, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Certification>(certi,HttpStatus.OK);
	}

	@PutMapping("/certifications/{id}")
	public ResponseEntity<Void> updateCertification(@Valid @RequestBody Certification certification, @PathVariable Long id) {
		if(certificationService.updateCertification(certification, id)==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@DeleteMapping("/certifications/{id}")
	public ResponseEntity<Void> deleteCertification(@PathVariable long id) {
		if(certificationService.deleteCertification(id) ==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
}
