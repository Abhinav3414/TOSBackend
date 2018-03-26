package com.tos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
		feedbackRepository.save(feedback);
		return feedbackRepository.findOne(feedback.getId());
	}
	
	/*get a feedback by id*/
	public Feedback getFeedback(Long feedbackId) {
		return feedbackRepository.findOne(feedbackId);
	}

	/*to update a feedback*/
	public ResponseEntity<Feedback> updateFeedback(Feedback feedbackData, long id) {
		Feedback feedback=feedbackRepository.findOne(id);
		if(feedback==null) {
			return ResponseEntity.notFound().build();
		}
		Feedback updateFeedback = feedbackRepository.save(feedbackData);
		return ResponseEntity.ok().body(updateFeedback);
	}
	
	/*delete a feedback*/
	public Feedback deleteFeedback(Long feedbackId) {
		Feedback feedback = feedbackRepository.findOne(feedbackId);
		feedbackRepository.delete(feedbackId);
		return feedback;
	}
}
