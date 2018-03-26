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

@Entity(name="Certification")
@Table(name="Certification")
@EntityListeners(AuditingEntityListener.class)
public class Certification {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	@NotNull
	@Column(name="cert_emp_id")
	private Long employeeId;
	
	private String yearOfCertification;
	
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date createdAt;

	public Certification() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}

	public String getYearOfCertification() {
		return yearOfCertification;
	}

	public void setYearOfCertification(String yearOfCertification) {
		this.yearOfCertification = yearOfCertification;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

}
