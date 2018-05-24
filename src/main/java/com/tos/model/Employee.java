package com.tos.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity(name = "Employee")
@Table(name="Employee")
@EntityListeners(AuditingEntityListener.class)
public class Employee {
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String name;
	private Date joiningDate;
	private String yearsOfExperience;
	private String responsibilities;
	
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdAt;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity= Skill.class)
	@JoinColumn(name = "skill_emp_id")
	private List<Skill> skills;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity= Certification.class)
	@JoinColumn(name = "cert_emp_id")
	private List<Certification> certifications;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity= Training.class)
	@JoinColumn(name = "training_emp_id")
	private List<Training> trainings;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity= Feedback.class)
	@JoinColumn(name = "feedback_emp_id")
	private List<Feedback> feedbacks;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity= ImprovementArea.class)
	@JoinColumn(name = "imp_area_emp_id")
	private List<ImprovementArea> improvementAreas;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity= TeamMember.class)
	@JoinColumn(name = "teammember_emp_id")
	private List<TeamMember> teamMembers;
	
	public Employee() {

	}
	
	public String getResponsibilities() {
		return responsibilities;
	}

	public Employee setResponsibilities(String responsibilities) {
		this.responsibilities = responsibilities;
		return this;
	}

	public Long getId() {
		return id;
	}

	public Employee setId(Long id) {
		this.id = id;
		return this;
	}

	public String getName() {
		return name;
	}

	public Employee setName(String name) {
		this.name = name;
		return this;
	}

	public Date getJoiningDate() {
		return joiningDate;
	}

	public Employee setJoiningDate(Date joiningDate) {
		this.joiningDate = joiningDate;
		return this;
	}

	public String getYearsOfExperience() {
		return yearsOfExperience;
	}

	public Employee setYearsOfExperience(String yearsOfExperience) {
		this.yearsOfExperience = yearsOfExperience;
		return this;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public Employee setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
		return this;
	}

	public List<Skill> getSkills() {
		return skills;
	}

	public Employee setSkills(List<Skill> skills) {
		this.skills = skills;
		return this;
	}

	public List<Certification> getCertifications() {
		return certifications;
	}

	public Employee setCertifications(List<Certification> certifications) {
		this.certifications = certifications;
		return this;
	}

	public List<Training> getTrainings() {
		return trainings;
	}

	public Employee setTrainings(List<Training> trainings) {
		this.trainings = trainings;
		return this;
	}

	public List<Feedback> getFeedbacks() {
		return feedbacks;
	}

	public Employee setFeedbacks(List<Feedback> feedbacks) {
		this.feedbacks = feedbacks;
		return this;
	}

	public List<ImprovementArea> getImprovementAreas() {
		return improvementAreas;
	}

	public Employee setImprovementAreas(List<ImprovementArea> improvementAreas) {
		this.improvementAreas = improvementAreas;
		return this;
	}

	public List<TeamMember> getTeamMembers() {
		return teamMembers;
	}

	public void setTeamMembers(List<TeamMember> teamMembers) {
		this.teamMembers = teamMembers;
	}
	
	
}
