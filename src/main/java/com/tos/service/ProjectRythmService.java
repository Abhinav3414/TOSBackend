package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
		projectRythmRepository.save(projectRythm);
		return projectRythmRepository.findOne(projectRythm.getId());
	}
	
	/*get a projectRythm by id*/
	public ProjectRythm getProjectRythm(Long projectRythmId) {
		return projectRythmRepository.findOne(projectRythmId);
	}

	/*to update a projectRythm*/
	public ResponseEntity<ProjectRythm> updateProjectRythm(ProjectRythm projectRythmData, long id) {
		ProjectRythm projectRythm=projectRythmRepository.findOne(id);
		if(projectRythm==null) {
			return ResponseEntity.notFound().build();
		}
		ProjectRythm updateProjectRythm=projectRythmRepository.save(projectRythmData);
		return ResponseEntity.ok().body(updateProjectRythm);
	}
	
	/*delete a projectRythm*/
	public ProjectRythm deleteProjectRythm(Long projectRythmId) {
		ProjectRythm projectRythm = projectRythmRepository.findOne(projectRythmId);
		projectRythmRepository.delete(projectRythmId);
		return projectRythm;
	}
}
