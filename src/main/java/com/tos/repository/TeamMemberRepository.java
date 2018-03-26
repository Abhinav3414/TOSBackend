package com.tos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.TeamMember;

public interface TeamMemberRepository extends JpaRepository<TeamMember, Long> {

}
