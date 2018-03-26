package com.tos.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	public Certification addCertification(@RequestBody Certification skill) {
		return certificationService.addCertification(skill);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value ="/certifications/{id}" )
	public ResponseEntity<Certification> updateCertification(@Valid @RequestBody Certification certification, @PathVariable Long id) {
		return certificationService.updateCertification(certification, id);
	}
	
	@DeleteMapping("/certifications/{id}")
	public Certification deleteCertification(@PathVariable long id) {
		return certificationService.deleteCertification(id);
	}
	
}
