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

import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity(name = "Customer")
@Table(name="Customer")
@EntityListeners(AuditingEntityListener.class)
public class Customer {
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String name;
	private String contact;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity= Address.class)
	@JoinColumn(name = "address_cust_id")
	private List<Address> addresses;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity= Goal.class)
	@JoinColumn(name = "goal_cust_id")
	private List<Goal> goals;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity= StakeHolder.class)
	@JoinColumn(name = "stakeholder_cust_id")
	private List<StakeHolder> stakeHolders;
	
	@OneToMany(cascade = CascadeType.ALL, targetEntity= Team.class)
	@JoinColumn(name = "team_cust_id")
	private List<Team> teams;
	
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date createdAt;
	
	public Customer() {

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

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public List<Address> getAddresses() {
		return addresses;
	}

	public void setAddresses(List<Address> addresses) {
		this.addresses = addresses;
	}

	public List<Goal> getGoals() {
		return goals;
	}

	public void setGoals(List<Goal> goals) {
		this.goals = goals;
	}

	public List<StakeHolder> getStakeHolder() {
		return stakeHolders;
	}

	public void setStakeHolder(List<StakeHolder> stakeHolder) {
		this.stakeHolders = stakeHolder;
	}

	public List<Team> getTeam() {
		return teams;
	}

	public void setTeam(List<Team> team) {
		this.teams = team;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	
}
