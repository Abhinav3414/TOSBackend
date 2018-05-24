package com.tos.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
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

@Entity(name = "Ace5")
@Table(name = "Ace5")
@EntityListeners(AuditingEntityListener.class)
public class Ace5 {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = Action.class)
	@JoinColumn(name = "action_ace5_id")
	private List<Action> actions;

	@OneToMany(cascade = CascadeType.ALL, targetEntity = Risk.class)
	@JoinColumn(name = "risk_ace5_id")
	private List<Risk> risks;

	private Long customerId;

	private Date intialDiscussionDate;

	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdAt;

	public Ace5() {
	}

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<Action> getActions() {
		return actions;
	}

	public void setActions(List<Action> actions) {
		this.actions = actions;
	}

	public List<Risk> getRisks() {
		return risks;
	}

	public void setRisks(List<Risk> risks) {
		this.risks = risks;
	}

	public Date getIntialDiscussionDate() {
		return intialDiscussionDate;
	}

	public void setIntialDiscussionDate(Date intialDiscussionDate) {
		this.intialDiscussionDate = intialDiscussionDate;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

}
