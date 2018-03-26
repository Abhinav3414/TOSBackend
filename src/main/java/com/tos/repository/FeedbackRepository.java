package com.tos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

}
