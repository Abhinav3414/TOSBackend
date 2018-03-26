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

@Entity(name="TeamMember")
@Table(name="TeamMember")
@EntityListeners(AuditingEntityListener.class)
public class TeamMember {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NotNull
	@Column(name="teammember_team_id")
	private Long team_Id;
	
	private String role;
	
	private String productivity;
	
	@NotNull
	@Column(name="teammember_emp_id")
	private Long employeeId;
	
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date createdAt;

	public TeamMember() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getTeam_Id() {
		return team_Id;
	}

	public void setTeam_Id(Long team_Id) {
		this.team_Id = team_Id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getProductivity() {
		return productivity;
	}

	public void setProductivity(String productivity) {
		this.productivity = productivity;
	}

	public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

}
