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

import com.tos.model.Skill;
import com.tos.service.SkillService;

@RestController
@RequestMapping("/tos")
public class SkillController {
	
	@Autowired
	private SkillService skillService;

	@GetMapping("/skills")
	public List<Skill> getAllSkill(){
		return skillService.getAllSkill();
	}
	
	@GetMapping("/skills/{id}")
	public Skill getSkill(@PathVariable long id) {
		return skillService.getSkill(id);
	}
	
	@PostMapping("/skills")
	public ResponseEntity<Skill> addSkill(@RequestBody Skill skill) {
		Skill empSkill = skillService.addSkill(skill);
		if(empSkill==null) {
			return new ResponseEntity<Skill>(empSkill, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Skill>(empSkill, HttpStatus.OK);
	}
	
	@PutMapping("/skills/{id}")
	public ResponseEntity<Void> updateSkill(@Valid @RequestBody Skill skill, @PathVariable Long id) {
		if(skillService.updateSkill(skill, id)==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@DeleteMapping("/skills/{id}")
	public ResponseEntity<Void> deleteSkill(@PathVariable long id) {
		if(skillService.deleteSkill(id) ==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
}
