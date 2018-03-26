package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.tos.model.Skill;
import com.tos.repository.SkillRepository;

@Service
public class SkillService {
	
	@Autowired
	private SkillRepository skillRepository;
	
	/* search all skills*/
	public List<Skill> getAllSkill() {
		return skillRepository.findAll();
	}
	
	/*to save a skill */
	public Skill addSkill(Skill skill) {
		skillRepository.save(skill);
		return skillRepository.findOne(skill.getId());
	}
	
	/*get a skill by id*/
	public Skill getSkill(Long skillId) {
		return skillRepository.findOne(skillId);
	}

	/*to update a skill*/
	public ResponseEntity<Skill> updateSkill(Skill skillData, long id) {
		Skill skill=skillRepository.findOne(id);
		if(skill==null) {
			return ResponseEntity.notFound().build();
		}
		Skill updateSkill=skillRepository.save(skillData);
		return ResponseEntity.ok().body(updateSkill);
	}
	
	/*delete a skill*/
	public Skill deleteSkill(Long skillId) {
		Skill skill = skillRepository.findOne(skillId);
		skillRepository.delete(skillId);
		return skill;
	}
}
