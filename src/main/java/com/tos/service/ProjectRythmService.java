package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tos.model.ProjectRythm;
import com.tos.repository.ProjectRythmRepository;

@Service
public class ProjectRythmService {
	
	@Autowired
	private ProjectRythmRepository projectRythmRepository;
	
	/* search all projectRythms*/
	public List<ProjectRythm> getAllProjectRythm() {
		return projectRythmRepository.findAll();
	}
	
	/*to save a projectRythm */
	public ProjectRythm addProjectRythm(ProjectRythm projectRythm) {
		return projectRythmRepository.save(projectRythm);
	}
	
	/*get a projectRythm by id*/
	public ProjectRythm getProjectRythm(Long projectRythmId) {
		return projectRythmRepository.findOne(projectRythmId);
	}

	/*to update a projectRythm*/
	public ProjectRythm updateProjectRythm(ProjectRythm projectRythmData, long id) {
		if(projectRythmRepository.findOne(id)==null) {
			return null;
		}
		return projectRythmRepository.save(projectRythmData);
	}
	
	/*delete a projectRythm*/
	public boolean deleteProjectRythm(Long projectRythmId) {
		if(projectRythmRepository.findOne(projectRythmId)==null) {
			return false;
		}
		projectRythmRepository.delete(projectRythmId);
		return true;
	}
	
}
