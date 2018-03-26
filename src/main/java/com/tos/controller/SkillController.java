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
	public Skill addSkill(@RequestBody Skill skill) {
		return skillService.addSkill(skill);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value ="/skills/{id}" )
	public ResponseEntity<Skill> updateSkill(@Valid @RequestBody Skill skill, @PathVariable Long id) {
		return skillService.updateSkill(skill, id);
	}
	
	@DeleteMapping("/skills/{id}")
	public Skill deleteSkill(@PathVariable long id) {
		return skillService.deleteSkill(id);
	}
	
}
