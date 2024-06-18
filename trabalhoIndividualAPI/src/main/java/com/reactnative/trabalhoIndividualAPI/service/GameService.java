package com.reactnative.trabalhoIndividualAPI.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.reactnative.trabalhoIndividualAPI.model.Game;
import com.reactnative.trabalhoIndividualAPI.repository.GameRepository;

import jakarta.transaction.Transactional;

@Service
public class GameService {

	@Autowired
	private GameRepository gameRepository;

	public List<Game> findAll() {
		List<Game> games = gameRepository.findAll();

		return games;
	}

	public Game findById(Long id) throws NotFoundException {
		Optional<Game> gameOpt = gameRepository.findById(id);
		if (gameOpt.isEmpty()) {
			throw new NotFoundException();
		}
		return gameOpt.get();
	}

	@Transactional
	public Game insert(Game game) {
		game = gameRepository.save(game);

		return game;
	}

	@Transactional
	public Game change(Game game) {

		game = gameRepository.save(game);

		return game;
	}
}
