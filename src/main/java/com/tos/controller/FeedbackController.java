package com.tos.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	public ResponseEntity<Feedback> addFeedback(@RequestBody Feedback feedback) {
		Feedback feed = feedbackService.addFeedback(feedback);
		if(feed==null) {
			return new ResponseEntity<Feedback>(feed, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Feedback>(feed, HttpStatus.OK);
	}
	
	@PutMapping("/feedbacks/{id}")
	public ResponseEntity<Void> updateFeedback(@Valid @RequestBody Feedback feedback, @PathVariable Long id) {
		if(feedbackService.updateFeedback(feedback, id)==null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@DeleteMapping("/feedbacks/{id}")
	public ResponseEntity<Void> deleteFeedback(@PathVariable long id) {
		if(feedbackService.deleteFeedback(id)==false) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
}
