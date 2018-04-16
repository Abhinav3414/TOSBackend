package com.tos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tos.model.TeamMember;

public interface TeamMemberRepository extends JpaRepository<TeamMember, Long> {

	List<TeamMember> getTeamMemberByTeamId(Long teamId);

}
