package com.tos.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tos.model.Feedback;
import com.tos.service.FeedbackService;

@RestController
@RequestMapping("/tos")
public class FeedbackController {
	
	@Autowired
	private FeedbackService feedbackService;

	@GetMapping("/feedbacks")
	public List<Feedback> getAllFeedback(){
		return feedbackService.getAllFeedback();
	}
	
	@GetMapping("/feedbacks/{id}")
	public Feedback getFeedback(@PathVariable long id) {
		return feedbackService.getFeedback(id);
	}
	
	@PostMapping("/feedbacks")
	public Feedback addFeedback(@RequestBody Feedback feedback) {
		return feedbackService.addFeedback(feedback);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value ="/feedbacks/{id}" )
	public ResponseEntity<Feedback> updateFeedback(@Valid @RequestBody Feedback feedback, @PathVariable Long id) {
		return feedbackService.updateFeedback(feedback, id);
	}
	
	@DeleteMapping("/feedbacks/{id}")
	public Feedback deleteSkill(@PathVariable long id) {
		return feedbackService.deleteFeedback(id);
	}
	
}
