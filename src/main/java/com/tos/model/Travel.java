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

@Entity(name="Travel")
@Table(name="Travel")
@EntityListeners(AuditingEntityListener.class)
public class Travel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	@NotNull
	@Column(name="travel_cust_id")
	private Long customerId;
	
	private String travellingFrom;
	
	private String travellingTo;
	
	private Date travellingFromDate;
	
	private Date travellingToDate;
	
	private String purpose;
	
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date createdAt;

	public Travel() {
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

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public String getTravellingFrom() {
		return travellingFrom;
	}

	public void setTravellingFrom(String travellingFrom) {
		this.travellingFrom = travellingFrom;
	}

	public String getTravellingTo() {
		return travellingTo;
	}

	public void setTravellingTo(String travellingTo) {
		this.travellingTo = travellingTo;
	}

	public Date getTravellingFromDate() {
		return travellingFromDate;
	}

	public void setTravellingFromDate(Date travellingFromDate) {
		this.travellingFromDate = travellingFromDate;
	}

	public Date getTravellingToDate() {
		return travellingToDate;
	}

	public void setTravellingToDate(Date travellingToDate) {
		this.travellingToDate = travellingToDate;
	}

	public String getPurpose() {
		return purpose;
	}

	public void setPurpose(String purpose) {
		this.purpose = purpose;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	
}
