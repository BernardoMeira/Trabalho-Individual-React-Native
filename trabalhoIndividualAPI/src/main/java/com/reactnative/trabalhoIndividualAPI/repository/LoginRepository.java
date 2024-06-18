package com.reactnative.trabalhoIndividualAPI.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.reactnative.trabalhoIndividualAPI.model.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Long> {

	Optional<Login> findByEmail(String email);
	
}
