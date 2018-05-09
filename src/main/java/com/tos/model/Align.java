package com.tos.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity(name = "Align")
@Table(name = "Align")
@EntityListeners(AuditingEntityListener.class)
public class Align {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private Long customer_id;
	
	private String expectationFromOpd;

	private Date intialDiscussionDate;
	
	private String statementOfWork;

	private String skillRequirements;
	
	private Long processOwnerId;
	
	private String process;
	
	private String processTools;

	private String productSolution;

	private String alignDatabase;

	private String operatingEnvironment;

	private String accessToEnvironments;

	private String remoteMachine;

	private String vpn;

	private String ipRestrictionAndAccess;

	private String mailAccess;

	private String communicator;

	private String hwRequirement;

	private String swRequirement;
	
	@Temporal(TemporalType.TIMESTAMP)
	@LastModifiedDate
	private Date createdAt;

	public Align() {
	}

	public Long getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(Long customer_id) {
		this.customer_id = customer_id;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getExpectationFromOpd() {
		return expectationFromOpd;
	}

	public void setExpectationFromOpd(String expectationFromOpd) {
		this.expectationFromOpd = expectationFromOpd;
	}

	public Date getIntialDiscussionDate() {
		return intialDiscussionDate;
	}

	public void setIntialDiscussionDate(Date intialDiscussionDate) {
		this.intialDiscussionDate = intialDiscussionDate;
	}

	public String getStatementOfWork() {
		return statementOfWork;
	}

	public void setStatementOfWork(String statementOfWork) {
		this.statementOfWork = statementOfWork;
	}

	public String getSkillReuirements() {
		return skillRequirements;
	}

	public void setSkillReuirements(String skillReuirements) {
		this.skillRequirements = skillReuirements;
	}

	public String getProcess() {
		return process;
	}

	public void setProcess(String process) {
		this.process = process;
	}

	public String getProcessTools() {
		return processTools;
	}

	public void setProcessTools(String processTools) {
		this.processTools = processTools;
	}

	public String getProductSolution() {
		return productSolution;
	}

	public void setProductSolution(String productSolution) {
		this.productSolution = productSolution;
	}

	public String getAlignDatabase() {
		return alignDatabase;
	}

	public void setAlignDatabase(String alignDatabase) {
		this.alignDatabase = alignDatabase;
	}

	public String getOperatingEnvironment() {
		return operatingEnvironment;
	}

	public void setOperatingEnvironment(String operatingEnvironment) {
		this.operatingEnvironment = operatingEnvironment;
	}

	public String getAccessToEnvironments() {
		return accessToEnvironments;
	}

	public void setAccessToEnvironments(String accessToEnvironments) {
		this.accessToEnvironments = accessToEnvironments;
	}

	public String getRemoteMachine() {
		return remoteMachine;
	}

	public void setRemoteMachine(String remoteMachine) {
		this.remoteMachine = remoteMachine;
	}

	public String getVpn() {
		return vpn;
	}

	public void setVpn(String vpn) {
		this.vpn = vpn;
	}

	public String getIpRestrictionAndAccess() {
		return ipRestrictionAndAccess;
	}

	public void setIpRestrictionAndAccess(String ipRestrictionAndAccess) {
		this.ipRestrictionAndAccess = ipRestrictionAndAccess;
	}

	public String getMailAccess() {
		return mailAccess;
	}

	public void setMailAccess(String mailAccess) {
		this.mailAccess = mailAccess;
	}

	public String getCommunicator() {
		return communicator;
	}

	public void setCommunicator(String communicator) {
		this.communicator = communicator;
	}

	public String getHwRequirement() {
		return hwRequirement;
	}

	public void setHwRequirement(String hwRequirement) {
		this.hwRequirement = hwRequirement;
	}

	public String getSwRequirement() {
		return swRequirement;
	}

	public void setSwRequirement(String swRequirement) {
		this.swRequirement = swRequirement;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Long getProcessOwnerId() {
		return processOwnerId;
	}

	public void setProcessOwnerId(Long processOwnerId) {
		this.processOwnerId = processOwnerId;
	}

}
