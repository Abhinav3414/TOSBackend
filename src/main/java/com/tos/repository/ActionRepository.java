package com.tos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.Action;

public interface ActionRepository extends JpaRepository<Action, Long> {

}
