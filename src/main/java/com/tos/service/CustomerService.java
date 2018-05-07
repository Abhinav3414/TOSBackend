package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tos.model.Customer;
import com.tos.model.Goal;
import com.tos.model.StakeHolder;
import com.tos.model.Team;
import com.tos.model.Travel;
import com.tos.repository.CustomerRepository;
import com.tos.repository.GoalRepository;
import com.tos.repository.StakeHolderRepository;
import com.tos.repository.TeamRepository;
import com.tos.repository.TravelRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private GoalRepository goalRepository;
	
	@Autowired
	private TeamRepository teamRepository;
	
	@Autowired
	private StakeHolderRepository stakeHolderRepository;
	
	@Autowired
	private TravelRepository travelRepository;
	
	/* search all customers*/
	public List<Customer> getAllCustomer() {
		return customerRepository.findAll();
	}
	
	/*to save an customer*/
	public Customer addCustomer(Customer cust) {
		return customerRepository.save(cust);
	}
	
	/*get an customer by id*/
	public Customer getCustomer(Long custId) {
		return customerRepository.findOne(custId);
	}

	/*to update an customer*/
	public Customer updateCustomer(Customer cust, long id) {
		if(customerRepository.findOne(id)==null) {
			return null;
		}
		return customerRepository.save(cust);
	}
	
	/*delete an customer*/
	public boolean deleteCustomer(Long custId) {
		
		if(customerRepository.findOne(custId)==null) {
			return false;
		}
		List<Goal> customerGoals = goalRepository.getGoalByCustomerId(custId);
		List<Team> customerTeams = teamRepository.getTeamByCustomerId(custId);
		List<StakeHolder> customerStakeHolders = stakeHolderRepository.getStakeHolderByCustomerId(custId);
		List<Travel> customerTravels = travelRepository.getTravelByCustomerId(custId);

		for (Goal goal : customerGoals) {
			goalRepository.delete(goal.getId());
		}
		for (Team team : customerTeams) {
			teamRepository.delete(team.getId());
		}
		for (StakeHolder stakeHolder : customerStakeHolders) {
			stakeHolderRepository.delete(stakeHolder.getId());
		}
		for (Travel travel : customerTravels) {
			travelRepository.delete(travel.getId());
		}
		
		customerRepository.delete(custId);
		return true;
	}
	
}
