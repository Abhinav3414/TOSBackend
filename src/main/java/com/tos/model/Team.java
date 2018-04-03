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
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity(name="Team")
@Table(name="Team")
@EntityListeners(AuditingEntityListener.class)
public class Team {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String specialization;
	
	@NotNull
	@Column(name="team_cust_id")
	private Long customerId;
	
	private String name;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity= TeamMember.class)
	@JoinColumn(name = "teammember_team_id")
	private List<TeamMember> teamMembers;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity= Action.class)
	@JoinColumn(name = "action_team_id")
	private List<Action> actions;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity= ProjectRythm.class)
	@JoinColumn(name = "projectrythm_team_id")
	private List<ProjectRythm> projectRythms;
	
	
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date createdAt;

	public Team() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<TeamMember> getTeamMembers() {
		return teamMembers;
	}

	public void setTeamMembers(List<TeamMember> teamMembers) {
		this.teamMembers = teamMembers;
	}

	public List<Action> getActions() {
		return actions;
	}

	public void setActions(List<Action> actions) {
		this.actions = actions;
	}

	public List<ProjectRythm> getProjectRythms() {
		return projectRythms;
	}

	public void setProjectRythms(List<ProjectRythm> projectRythms) {
		this.projectRythms = projectRythms;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

}
