package com.reactnative.trabalhoIndividualAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.reactnative.trabalhoIndividualAPI.model.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long>{

}
