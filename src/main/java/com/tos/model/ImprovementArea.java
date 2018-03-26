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

@Entity(name="ImprovementArea")
@Table(name="ImprovementArea")
@EntityListeners(AuditingEntityListener.class)
public class ImprovementArea {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String areasOfImprovement;
	
	@NotNull
	@Column(name="imp_area_emp_id")
	private Long employeeId;
	
	private String improvementPlan;
	
	private String proposedDate;
	
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date createdAt;

	public ImprovementArea() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAreasOfImprovement() {
		return areasOfImprovement;
	}

	public void setAreasOfImprovement(String areasOfImprovement) {
		this.areasOfImprovement = areasOfImprovement;
	}

	public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}

	public String getImprovementPlan() {
		return improvementPlan;
	}

	public void setImprovementPlan(String improvementPlan) {
		this.improvementPlan = improvementPlan;
	}

	public String getProposedDate() {
		return proposedDate;
	}

	public void setProposedDate(String proposedDate) {
		this.proposedDate = proposedDate;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

}
