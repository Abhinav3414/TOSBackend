package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tos.model.Feedback;
import com.tos.repository.FeedbackRepository;

@Service
public class FeedbackService {
	
	@Autowired
	private FeedbackRepository feedbackRepository;
	
	/* search all feedback*/
	public List<Feedback> getAllFeedback() {
		return feedbackRepository.findAll();
	}
	
	/*to save a feedback */
	public Feedback addFeedback(Feedback feedback) {
		return feedbackRepository.save(feedback);
	}
	
	/*get a feedback by id*/
	public Feedback getFeedback(Long feedbackId) {
		return feedbackRepository.findOne(feedbackId);
	}

	/*to update a feedback*/
	public Feedback updateFeedback(Feedback feedbackData, long id) {
		if(feedbackRepository.findOne(id)==null) {
			return null;
		}
		return feedbackRepository.save(feedbackData);
	}
	
	/*delete a feedback*/
	public boolean deleteFeedback(Long feedbackId) {
		if(feedbackRepository.findOne(feedbackId)==null) {
			return false;
		}
		feedbackRepository.delete(feedbackId);
		return true;
	}
	
	
}
