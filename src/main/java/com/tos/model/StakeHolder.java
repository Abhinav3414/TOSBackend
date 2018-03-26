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

@Entity(name="StakeHolder")
@Table(name="StakeHolder")
@EntityListeners(AuditingEntityListener.class)
public class StakeHolder {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String sponsor;
	
	@NotNull
	@Column(name="stakeholder_cust_id")
	private Long customerId;
	
	private String productOwner;
	
	private String productManager;
	
	private String architect;
	
	private String customerTeamManager;
	
	private String programManager;
	
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date createdAt;

	public StakeHolder() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSponsor() {
		return sponsor;
	}

	public void setSponsor(String sponsor) {
		this.sponsor = sponsor;
	}

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public String getProductOwner() {
		return productOwner;
	}

	public void setProductOwner(String productOwner) {
		this.productOwner = productOwner;
	}

	public String getProductManager() {
		return productManager;
	}

	public void setProductManager(String productManager) {
		this.productManager = productManager;
	}

	public String getArchitect() {
		return architect;
	}

	public void setArchitect(String architect) {
		this.architect = architect;
	}

	public String getCustomerTeamManager() {
		return customerTeamManager;
	}

	public void setCustomerTeamManager(String customerTeamManager) {
		this.customerTeamManager = customerTeamManager;
	}

	public String getProgramManager() {
		return programManager;
	}

	public void setProgramManager(String programManager) {
		this.programManager = programManager;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

}
