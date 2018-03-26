package com.tos.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity(name="ProjectRythm")
@Table(name="ProjectRythm")
@EntityListeners(AuditingEntityListener.class)
public class ProjectRythm {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String event;
	
	@NotNull
	@Column(name="projectrythm_team_id")
	private Long teamId;
	
	private String frequency;
	
	private String whoRythm;
	
	private String whereRythm;
	
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date createdAt;

	public ProjectRythm() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEvent() {
		return event;
	}

	public void setEvent(String event) {
		this.event = event;
	}

	public Long getTeamId() {
		return teamId;
	}

	public void setTeamId(Long teamId) {
		this.teamId = teamId;
	}

	public String getFrequency() {
		return frequency;
	}

	public void setFrequency(String frequency) {
		this.frequency = frequency;
	}

	public String getWhoRythm() {
		return whoRythm;
	}

	public void setWhoRythm(String whoRythm) {
		this.whoRythm = whoRythm;
	}

	public String getWhereRythm() {
		return whereRythm;
	}

	public void setWhereRythm(String whereRythm) {
		this.whereRythm = whereRythm;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

}
