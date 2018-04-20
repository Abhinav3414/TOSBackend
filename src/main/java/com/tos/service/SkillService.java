package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
		return skillRepository.save(skill);
	}
	
	/*get a skill by id*/
	public Skill getSkill(Long skillId) {
		return skillRepository.findOne(skillId);
	}

	/*to update a skill*/
	public Skill updateSkill(Skill skillData, long id) {
		if(skillRepository.findOne(id)==null) {
			return null;
		}
		return skillRepository.save(skillData);
	}
	
	/*delete a skill*/
	public boolean deleteSkill(Long skillId) {
		if(skillRepository.findOne(skillId)==null) {
			return false;
		}
		skillRepository.delete(skillId);
		return true;
	}
	
}
